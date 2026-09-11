<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import { scale } from 'svelte/transition';
	import {
		CirclePause,
		CircleQuestionMark,
		Delete,
		Eraser,
		Frown,
		Shuffle,
		X
	} from 'lucide-svelte';

	import Button from '$lib/components/ui/Button.svelte';
	import Modal from '$lib/components/Modal.svelte';
	import Toast from '$lib/components/Toast.svelte';
	import Timer from '$lib/components/Timer.svelte';
	import Help from '$lib/components/Help.svelte';
	import Loading from '$lib/components/Loading.svelte';

	import * as gameService from '$lib/services/gameService';
	import type { GameResult, GameState } from '$lib/services/gameService';
	import { loadTodaysPuzzle, preloadedTodaysPuzzle } from '$lib/services/puzzleService';
	import { notifications } from '$lib/utils/notifications';
	import { formatDayKey } from '$lib/utils/gameDate';
	import { setProfile } from '$lib/stores/profileStore';
	import { Event, track } from '$lib/services/analytics';

	/** Set when the run ends; the parent swaps in <GameOver>. */
	export let result: GameResult | null = null;
	/** True when the run was already over before this mount, not just finished. */
	export let returning = false;
	/** True when the finish could not be filed with the server. */
	export let saveFailed = false;
	export let showAd: boolean;

	let showHelpModal = false;
	let showPauseModal = false;
	let showGiveUpModal = false;

	let letterBank = '';
	let scrambledBank = '';
	/** Ships with the puzzle, so the bottom slot can confirm itself offline. */
	let sharedLetters: string[] = [];
	let author = '---';
	let dayKey = '';
	let loopNumber: number | null = null;
	let slotCount = 8;

	let selectedLetters: string[] = [];
	let usedKeys: number[] = [];
	let startedAtMs = Date.now();
	let running = false;
	let paused = false;
	let pauseBusy = false;
	let submitting = false;
	let celebrating = false;
	/** Set only when the game could not be fetched; empty means still loading. */
	let loadError = '';

	/** One lap of the "checking" wave. Each circle takes an equal share of it. */
	const CHECK_WAVE_MS = 1400;

	/** Each circle swells and colours in turn, clockwise from 12 o'clock. */
	const CELEBRATION_STAGGER_MS = 80;
	const CELEBRATION_POP_MS = 480;

	/** Wall clock at the first frame, so the sweep can be waited out mid-flight. */
	let celebrationStartedAt = 0;

	/** The board's "no" for a wrong answer. */
	const SHAKE_MS = 380;
	let shaking = false;

	/** How long the refusal sits in the middle of the ring before fading. */
	const REFUSAL_MS = 1400;
	let refusal = '';
	let refusalTimer: ReturnType<typeof setTimeout> | undefined;

	/** The in-flight `start` call. Guesses wait on it rather than racing it. */
	let starting: Promise<GameState> | null = null;

	const sharedLetterIndexes = [0, 4];
	/** Six o'clock on the ring: where the first word ends and the second starts. */
	const BOTTOM_SHARED_INDEX = 4;

	/* The one slot the board can mark on its own. Either shared letter may sit
	   there -- which one depends on the word the player started with -- and
	   everything else about the answer stays on the server. */
	$: bottomSolved = sharedLetters.includes(
		selectedLetters[BOTTOM_SHARED_INDEX]?.toLowerCase() ?? ''
	);

	/** The board is locked from the moment a full answer is committed. */
	$: frozen = submitting || !!result;

	// The menu fetches the puzzle while the player is still reading it, so the
	// board can paint letters on its first frame. Awaiting the same call in
	// `startGame` would still cost a render, and that render is a spinner.
	const preloaded = preloadedTodaysPuzzle();
	if (preloaded) applyPuzzle(preloaded);

	onMount(startGame);

	onDestroy(() => clearTimeout(refusalTimer));

	async function startGame() {
		// Two calls, deliberately in parallel:
		//
		//   loadTodaysPuzzle() is usually already cached by the menu, so the board
		//   paints immediately -- no spinner between pressing Play and seeing
		//   letters.
		//
		//   gameService.start() is the authoritative one: it stamps the server-side
		//   start time. It cannot be preloaded, because doing so would start the
		//   clock while the player was still reading the menu.
		starting = gameService.start();

		try {
			applyPuzzle(await loadTodaysPuzzle());
		} catch {
			// Fall through -- start() carries the same puzzle and better errors.
		}

		try {
			const state = await starting;

			// The run may already be over -- a refresh after finishing, say. The
			// parent needs to know it was not finished just now, so it shows the
			// "welcome back" banner rather than judging today's time again.
			if (state.finished) {
				returning = true;
				result = state.finished;
				return;
			}

			applyPuzzle(state.puzzle);

			// Anchor to the server's NET elapsed time, not raw wall time since
			// `startedAt` -- the latter ignores banked pauses, so reloading after a
			// pause would jump the displayed clock forward by however long you were
			// paused for.
			startedAtMs = Date.now() - state.elapsedSeconds * 1000;

			// The run may already be paused -- picked up on another device, or
			// reloaded while the pause screen was open. Restore that, rather than
			// showing a live board the server will refuse to accept guesses for.
			paused = state.paused;
			running = !state.paused;
			showPauseModal = state.paused;
		} catch (error) {
			loadError = error instanceof Error ? error.message : 'Error Loading Game :(';
			console.error('Could not start the game:', error);
		}
	}

	function applyPuzzle(puzzle: GameState['puzzle']) {
		if (letterBank) return; // Already painted from the preload.

		letterBank = puzzle.letterBank;
		scrambledBank = letterBank;
		sharedLetters = puzzle.sharedLetters ?? [];
		author = puzzle.author;
		dayKey = puzzle.dayKey;
		loopNumber = puzzle.loopNumber;
		slotCount = letterBank.length;
		selectedLetters = Array(slotCount).fill('');
	}

	/**
	 * Submits the board.
	 *
	 * The completeness check happens here so the keyboard can lock the instant
	 * the player commits, rather than staying live for the length of a round
	 * trip. Whether the answer is *right* is the server's call -- the browser is
	 * never told today's solution -- so nothing celebrates until it replies.
	 */
	async function checkSolution() {
		if (submitting || result) return;

		const guess = selectedLetters.join('');
		if (guess.length !== slotCount || selectedLetters.some((letter) => letter === '')) {
			// Same refusal as a wrong answer -- the board says no either way.
			refuse('Fill in every letter');
			return;
		}

		// Freezes the board: `submitting` gates every input path below.
		submitting = true;

		try {
			// The board can be usable a moment before `start` resolves; wait for it
			// rather than sending a guess the server has no run for.
			await starting;
			const outcome = await gameService.submitGuess(guess);

			if (outcome.correct) {
				startCelebrating();
				await celebrationEnds();
				finish(outcome.result);
				return;
			}

			// Wrong answer: the board shakes it off and comes back.
			refuse('Incorrect');
			submitting = false;
		} catch (error) {
			console.error('Could not submit the guess:', error);

			// No reply means no verdict, so there is nothing to celebrate. The run
			// is over for the player either way -- send them to the results with the
			// board frozen, and say there that it was not filed.
			finish(unsavedResult(), true);
		}
	}

	/**
	 * Stand-in result for a finish the server never recorded.
	 *
	 * Everything the server would have supplied -- the day's stats, the ordered
	 * solution, the profile -- is simply absent, and the results page hides those
	 * panels rather than inventing them. The time is the browser's own, which is
	 * why it is never what gets ranked.
	 */
	function unsavedResult(): GameResult {
		return {
			dayKey,
			elapsedSeconds: Math.max(0, Math.floor((Date.now() - startedAtMs) / 1000)),
			gaveUp: false,
			flagged: false,
			solution: { solution: '', primary: '', secondary: '' },
			globalStats: {
				averageSeconds: 0,
				minSeconds: 0,
				count: 0,
				isUnderAverage: false,
				isHighScore: false
			},
			profile: null
		};
	}

	function requestGiveUp() {
		if (submitting || !running) return;
		showGiveUpModal = true;
	}

	async function confirmGiveUp() {
		if (submitting) return;

		showGiveUpModal = false;
		submitting = true;
		try {
			await starting;
			track(Event.GaveUp, { elapsedSeconds: Math.floor((Date.now() - startedAtMs) / 1000) });
			finish(await gameService.giveUp());
		} catch (error) {
			notifications.danger(error instanceof Error ? error.message : 'Something went wrong', 2000);
		} finally {
			submitting = false;
		}
	}

	async function pauseGame() {
		if (pauseBusy || !running) return;

		pauseBusy = true;
		try {
			await starting;
			await gameService.pause();
			// Only blank the board once the server has actually stopped the clock,
			// so the two can never disagree about what is being timed.
			paused = true;
			running = false;
			showPauseModal = true;
		} catch (error) {
			notifications.danger(error instanceof Error ? error.message : 'Could not pause', 2000);
		} finally {
			pauseBusy = false;
		}
	}

	async function resumeGame() {
		if (pauseBusy) return;

		pauseBusy = true;
		try {
			const state = await gameService.resume();
			// Re-anchor the display to the server's net elapsed time, which now
			// excludes everything spent paused.
			startedAtMs = Date.now() - state.elapsedSeconds * 1000;
			paused = false;
			running = true;
			showPauseModal = false;
		} catch (error) {
			notifications.danger(error instanceof Error ? error.message : 'Could not resume', 2000);
		} finally {
			pauseBusy = false;
		}
	}

	/**
	 * Starts the winning sweep. Only ever called once the server has confirmed
	 * the answer -- the circles going round is the game saying "you got it", so
	 * it must never fire on a guess that turns out to be wrong.
	 */
	function startCelebrating() {
		if (prefersReducedMotion()) return;

		celebrating = true;
		celebrationStartedAt = Date.now();
	}

	/**
	 * The board's answer to a guess it will not take: a shake, and a mark in the
	 * middle of the ring where the player is already looking. It clears itself,
	 * and clears early the moment they touch a letter again.
	 */
	function refuse(message: string) {
		shakeBoard();

		clearTimeout(refusalTimer);
		refusal = message;
		refusalTimer = setTimeout(() => (refusal = ''), REFUSAL_MS);
	}

	function clearRefusal() {
		if (!refusal) return;

		clearTimeout(refusalTimer);
		refusal = '';
	}

	/**
	 * Shakes the ring of letters on a wrong answer.
	 *
	 * Cleared and re-applied across a frame rather than toggled in place: the
	 * class going straight from on to on would not restart the animation, so a
	 * second wrong guess in quick succession would sit still.
	 */
	function shakeBoard() {
		if (prefersReducedMotion()) return;

		shaking = false;
		requestAnimationFrame(() => {
			shaking = true;
			setTimeout(() => (shaking = false), SHAKE_MS);
		});
	}

	function prefersReducedMotion(): boolean {
		return window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false;
	}

	/** Resolves when the sweep already under way has run its course. */
	function celebrationEnds(): Promise<void> {
		if (!celebrating) return Promise.resolve();

		const total = (slotCount - 1) * CELEBRATION_STAGGER_MS + CELEBRATION_POP_MS;
		const remaining = Math.max(0, total - (Date.now() - celebrationStartedAt));

		return new Promise((resolve) => setTimeout(resolve, remaining));
	}

	function finish(finished: GameResult, unsaved = false) {
		running = false;
		// The server returns the freshly updated profile, so the stats panel does
		// not need a second round trip to show the new streak.
		if (finished.profile) setProfile(finished.profile);
		saveFailed = unsaved;
		// Still by way of the ad, whichever way the run ended.
		showAd = true;
		result = finished;
	}

	// Every way of touching the board runs through these, so freezing is a single
	// condition rather than something each control has to remember.
	function letterSelected(letter: string, index: number) {
		if (frozen) return;

		const slot = selectedLetters.findIndex((value) => value === '');
		if (slot === -1 || usedKeys.includes(index)) return;

		clearRefusal();
		selectedLetters[slot] = letter;
		usedKeys = [...usedKeys, index];
	}

	function deleteLetter() {
		if (frozen || usedKeys.length === 0) return;

		clearRefusal();
		const slot = usedKeys.length - 1;
		selectedLetters[slot] = '';
		usedKeys = usedKeys.slice(0, -1);
	}

	function resetBoard() {
		if (frozen) return;

		selectedLetters = Array(slotCount).fill('');
		usedKeys = [];
	}

	function shuffleLetters() {
		if (frozen) return;

		// Presentation only -- the server does not care what order we display in.
		scrambledBank = [...letterBank].sort(() => Math.random() - 0.5).join('');
		resetBoard();
	}

	function handleKeyPress(event: KeyboardEvent) {
		if (showHelpModal || showPauseModal || showGiveUpModal || paused || frozen || !letterBank)
			return;

		if (event.key === 'Enter') {
			event.preventDefault();
			void checkSolution();
			return;
		}

		if (event.key === 'Backspace') {
			event.preventDefault();
			deleteLetter();
			return;
		}

		const index = [...scrambledBank].findIndex(
			(letter, i) => letter === event.key.toLowerCase() && !usedKeys.includes(i)
		);

		if (index !== -1) {
			event.preventDefault();
			letterSelected(scrambledBank[index], index);
		}
	}

	$: isDisabled = (index: number) => usedKeys.includes(index);
	$: displayDate = dayKey ? formatDayKey(dayKey) : '';
</script>

<main>
	<div class="nav-flex-container game-header">
		<div class="header-timer">
			<Timer {startedAtMs} {running} />
		</div>

		<button
			class="header-action"
			on:click={pauseGame}
			disabled={!running || pauseBusy}
			aria-label="Pause"
			title="Pause"
		>
			<CirclePause size={22} aria-hidden="true" />
		</button>
		<button
			class="header-action"
			on:click={requestGiveUp}
			disabled={submitting || !running}
			aria-label="Give up"
			title="Give up"
		>
			<Frown size={22} aria-hidden="true" />
		</button>
		<button
			class="header-action"
			on:click={() => (showHelpModal = true)}
			aria-label="How to play"
			title="How to play"
		>
			<CircleQuestionMark size={22} aria-hidden="true" />
		</button>
	</div>

	<Toast />

	<div class="centered-container full-height-container board-area">
		{#if letterBank}
			<div class="circle-container mb-5 mt-5" class:shaking>
				{#each selectedLetters as letter, index}
					<div
						class="circle"
						class:filled={letter !== ''}
						class:shared={sharedLetterIndexes.includes(index)}
						class:locked={index === BOTTOM_SHARED_INDEX && bottomSolved}
						class:celebrate={celebrating}
						class:checking={submitting && !celebrating}
						style={`
              left: calc(38% + ${Math.cos((index / selectedLetters.length) * 2 * Math.PI - Math.PI / 2) * 100}px);
              top: calc(38% + ${Math.sin((index / selectedLetters.length) * 2 * Math.PI - Math.PI / 2) * 100}px);
              --pop-delay: ${index * CELEBRATION_STAGGER_MS}ms;
              --pop-duration: ${CELEBRATION_POP_MS}ms;
              --wave-delay: ${(index * CHECK_WAVE_MS) / selectedLetters.length}ms;
              --wave-duration: ${CHECK_WAVE_MS}ms;
            `}
					>
						{letter}
					</div>
				{/each}

				<!-- Sits at the ring's own centre, which is where the eye already is:
				     the same anchor the circles are placed from, plus half a circle. -->
				{#if refusal}
					<div class="refusal" role="status" transition:scale={{ duration: 160, start: 0.8 }}>
						<span class="refusal-mark"><X size={18} strokeWidth={3} aria-hidden="true" /></span>
						<p>{refusal}</p>
					</div>
				{/if}
			</div>

			<!-- The dimming is tied to the run being over, not to the round trip:
			     dimming for the length of a rejected guess reads as a flicker. -->
			<div class="keyboard" class:frozen={!!result}>
				{#each scrambledBank as letter, index (index)}
					<button
						class="key"
						class:disabled={isDisabled(index)}
						disabled={frozen}
						on:click={() => letterSelected(letter, index)}
					>
						{letter}
					</button>
				{/each}

				<button class="key" disabled={frozen} on:click={resetBoard} aria-label="Clear">
					<Eraser size={22} aria-hidden="true" />
				</button>
				<button class="key" disabled={frozen} on:click={shuffleLetters} aria-label="Shuffle">
					<Shuffle size={22} aria-hidden="true" />
				</button>
				<button class="key" disabled={frozen} on:click={deleteLetter} aria-label="Delete">
					<Delete size={22} aria-hidden="true" />
				</button>
				<button class="key enter-key" on:click={checkSolution} disabled={frozen}>Enter</button>
			</div>
		{:else if loadError}
			<p>{loadError}</p>
		{:else}
			<Loading plain />
		{/if}

		<br />
		<small style="color: rgb(46, 46, 46);">Edited by {author}</small>
		<small style="color: rgb(46, 46, 46);">
			{displayDate}{#if loopNumber !== null}
				&middot; Loop #{loopNumber}{/if}
		</small>
	</div>
</main>

<svelte:window on:keydown={handleKeyPress} />

<Modal
	bind:showModal={showHelpModal}
	modalType="help"
	title="How To Play"
	subtitle="Two 5-letter words, two shared letters, one loop."
>
	<Help />
</Modal>

<Modal
	bind:showModal={showGiveUpModal}
	modalType="give-up"
	title="Give up?"
	subtitle="You'll see today's answer, but the loop won't count towards your streak or the leaderboard."
>
	<div class="confirm-actions">
		<button class="confirm-secondary" on:click={() => (showGiveUpModal = false)}>
			Keep playing
		</button>
		<button class="confirm-danger" on:click={confirmGiveUp} disabled={submitting}>Give up</button>
	</div>
</Modal>

<Modal
	bind:showModal={showPauseModal}
	hide_close={true}
	modalType="pause"
	title="Paused"
	subtitle="Your timer is stopped and the board is hidden. Nothing counts against you until you resume."
>
	<Button block on:click={resumeGame} disabled={pauseBusy}>
		{pauseBusy ? 'Resuming...' : 'Resume'}
	</Button>
</Modal>

<style>
	/* Icon-only controls: no labels, so the glyphs carry the whole meaning and
	   need to be big enough to read and to hit comfortably on a phone. The
	   padding keeps each tap target near the 44px Apple/Android minimum even
	   though the icon itself is 22px. */
	/* The timer and its controls read as one group, centred over the board.
	   `.nav-flex-container` sets space-between for the old logo-left layout,
	   which has to be overridden now there is only the one cluster. */
	.game-header {
		justify-content: center;
		gap: 4px;
	}

	/* Drops the board away from the timer cluster so the two read as separate
	   things rather than one stack. */
	/* The board sits on the same pink wash as the menu and the results, just
	   paler -- the white keys and the ring need to read against it. */
	main {
		display: block;
		min-height: 100vh;
		background-color: var(--board-wash);
	}

	.board-area {
		padding-top: 28px;
	}

	.header-action {
		background: none;
		border: none;
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;
		font: inherit;
		color: inherit;
		font-size: 22px;
		width: 42px;
		height: 42px;
		padding: 0;
		border-radius: 12px;
		line-height: 1;
		transition:
			background-color 0.15s ease,
			color 0.15s ease;
	}

	/* Guarded on `hover: hover` so touch devices don't keep the highlight
	   stuck on the last thing tapped. */
	@media (hover: hover) {
		.header-action:hover:not(:disabled) {
			background-color: rgba(0, 0, 0, 0.07);
			color: var(--ink);
		}
	}

	.header-action:active:not(:disabled) {
		background-color: rgba(0, 0, 0, 0.12);
	}

	.header-action:disabled {
		opacity: 0.4;
		cursor: default;
	}

	/* The winning sweep: each circle swells and settles in turn, travelling
	   clockwise from the top. Index 0 sits at 12 o'clock and the layout angle
	   increases clockwise, so a plain per-index delay traces the right path. */
	/*
	  Each circle swells and settles in turn, clockwise from the top, taking its
	  finished colour as its turn arrives.

	  `forwards` rather than `both` is load-bearing: `both` also applies the 0%
	  frame *backwards* through the delay, which would colour every circle at
	  once the moment the sweep began. With `forwards` each circle keeps its
	  normal grey until its own turn starts.
	*/
	/*
	  The bottom shared slot is the only one the board can judge on its own, and
	  it says so quietly: one breath outward with a soft halo that fades, then
	  back to resting. Not a celebration -- the run is not over -- just a nod.

	  `:not(.celebrate)` keeps it out of the way of the winning sweep, which is
	  otherwise the less specific rule and would lose this circle.
	*/
	.circle.locked:not(.celebrate) {
		animation: settle 700ms cubic-bezier(0.22, 1, 0.36, 1);
	}

	@keyframes settle {
		0% {
			transform: scale(1);
			box-shadow: 0 0 0 0 rgba(252, 47, 79, 0.55);
		}
		40% {
			transform: scale(1.07);
			box-shadow: 0 0 0 9px rgba(252, 47, 79, 0);
		}
		70% {
			transform: scale(0.985);
		}
		100% {
			transform: scale(1);
			box-shadow: 0 0 0 0 rgba(252, 47, 79, 0);
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.circle.locked:not(.celebrate) {
			animation: none;
		}
	}

	/*
	  Waiting on the server: a swell travels round the ring, one circle at a
	  time. Every circle runs the same loop and starts a slot later than the one
	  before it, so the bump chases itself around for as long as the guess is in
	  flight. Deliberately gentle -- it is a pulse, not a verdict.
	*/
	/* `:not(.celebrate)` is for specificity as much as for safety: the settle
	   rule above carries one too, and without a match here the confirmed bottom
	   circle would outrank this and sit out the wave. */
	.circle.checking:not(.celebrate) {
		animation: wave var(--wave-duration, 1400ms) ease-in-out var(--wave-delay, 0ms) infinite;
	}

	@keyframes wave {
		0%,
		45%,
		100% {
			transform: scale(1);
		}
		18% {
			transform: scale(1.09);
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.circle.checking:not(.celebrate) {
			animation: none;
		}
	}

	/* `linear` overall: each keyframe below carries its own curve, which is what
	   keeps the bounce from feeling metered. */
	.circle.celebrate {
		animation: pop var(--pop-duration, 480ms) linear var(--pop-delay, 0ms) forwards;
	}

	/* The shared circles are already gradient-filled, so they only need the
	   swell -- but they still take their place in the sweep. */
	.circle.celebrate:not(.shared) {
		animation: pop-fill var(--pop-duration, 480ms) linear var(--pop-delay, 0ms) forwards;
	}

	/*
	  Each circle squishes the way the buttons do: pressed in fast, then let go
	  and allowed to spring back through an overshoot. Swelling outwards first
	  is what made it read as a stiff pulse -- a press starts by getting
	  smaller.
	*/
	@keyframes pop {
		0% {
			transform: scale(1);
			animation-timing-function: cubic-bezier(0.4, 0, 1, 1);
		}
		18% {
			transform: scale(0.84);
			animation-timing-function: cubic-bezier(0.17, 0.89, 0.32, 1.4);
		}
		52% {
			transform: scale(1.12);
			animation-timing-function: cubic-bezier(0.45, 0, 0.55, 1);
		}
		76% {
			transform: scale(0.96);
			animation-timing-function: ease-out;
		}
		100% {
			transform: scale(1);
		}
	}

	/* The colour is set on the very first frame and simply held -- it appears
	   the instant the circle's turn comes, with no fade or wipe. */
	@keyframes pop-fill {
		0% {
			transform: scale(1);
			background-image: linear-gradient(to bottom, #ff5793, #f70303);
			color: #ffffff;
			animation-timing-function: cubic-bezier(0.4, 0, 1, 1);
		}
		18% {
			transform: scale(0.84);
			background-image: linear-gradient(to bottom, #ff5793, #f70303);
			color: #ffffff;
			animation-timing-function: cubic-bezier(0.17, 0.89, 0.32, 1.4);
		}
		52% {
			transform: scale(1.12);
			background-image: linear-gradient(to bottom, #ff5793, #f70303);
			color: #ffffff;
			animation-timing-function: cubic-bezier(0.45, 0, 0.55, 1);
		}
		76% {
			transform: scale(0.96);
			background-image: linear-gradient(to bottom, #ff5793, #f70303);
			color: #ffffff;
			animation-timing-function: ease-out;
		}
		100% {
			transform: scale(1);
			background-image: linear-gradient(to bottom, #ff5793, #f70303);
			color: #ffffff;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.circle.celebrate,
		.circle.celebrate:not(.shared) {
			animation: none;
		}
	}

	/* Timer sets no font-size of its own, so it inherits this. Tabular figures
	   stop the width shifting as the digits tick over. */
	.header-timer {
		display: flex;
		align-items: center;
		font-size: 20px;
		font-weight: 600;
		font-variant-numeric: tabular-nums;
		padding-right: 4px;
		color: #333;
	}

	.confirm-actions {
		display: flex;
		gap: 10px;
	}

	.confirm-secondary,
	.confirm-danger {
		flex: 1;
		height: 48px;
		border-radius: 20px;
		font-size: 12px;
		font-weight: 600;
		letter-spacing: 1px;
		text-transform: uppercase;
		cursor: pointer;
	}

	/* Keep playing is the safe option, so it gets the calmer treatment. */
	.confirm-secondary {
		background: transparent;
		border: 1px solid #cfcfcf;
		color: #444;
	}

	.confirm-danger {
		background-color: #d92038;
		border: none;
		color: white;
	}

	.confirm-danger:disabled {
		opacity: 0.6;
		cursor: default;
	}

	/* The run is over and the board is no longer the player's to change. */
	.keyboard.frozen :global(.key:not(.enter-key)) {
		opacity: 0.45;
	}

	.keyboard :global(.key:disabled) {
		cursor: default;
	}

	/* Eases rather than snaps, so even the end-of-run dimming does not blink. */
	.keyboard :global(.key) {
		transition: opacity 0.18s ease;
	}

	/*
	  The refusal sits dead centre of the ring. The circles are placed from a
	  38% anchor and are 60px wide, so their shared centre is that anchor plus
	  half a circle -- the same sum puts this on it.
	*/
	.refusal {
		position: absolute;
		left: calc(38% + 30px);
		top: calc(38% + 30px);
		transform: translate(-50%, -50%);
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 6px;
		pointer-events: none;
		z-index: 2;
	}

	.refusal-mark {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 34px;
		height: 34px;
		border-radius: 50%;
		background-color: #d92038;
		color: white;
	}

	.refusal p {
		margin: 0;
		font-size: 12px;
		font-weight: 700;
		color: #d92038;
		white-space: nowrap;
	}

	/* A wrong answer: the ring shrugs it off and hands the board back. A short
	   sway that decays, rather than a rattle -- it is a "no", not an alarm. */
	.circle-container.shaking {
		animation: shake 380ms ease-in-out;
	}

	@keyframes shake {
		15% {
			transform: translateX(-9px);
		}
		33% {
			transform: translateX(8px);
		}
		51% {
			transform: translateX(-6px);
		}
		69% {
			transform: translateX(4px);
		}
		86% {
			transform: translateX(-2px);
		}
		100% {
			transform: translateX(0);
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.circle-container.shaking {
			animation: none;
		}
	}
</style>
