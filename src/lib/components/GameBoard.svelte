<script lang="ts">
	import { onMount } from 'svelte';

	import Modal from '$lib/components/Modal.svelte';
	import Toast from '$lib/components/Toast.svelte';
	import Timer from '$lib/components/Timer.svelte';
	import Help from '$lib/components/Help.svelte';

	import * as gameService from '$lib/services/gameService';
	import type { GameResult, GameState } from '$lib/services/gameService';
	import { loadTodaysPuzzle } from '$lib/services/puzzleService';
	import { notifications } from '$lib/utils/notifications';
	import { formatDayKey } from '$lib/utils/gameDate';
	import { setProfile } from '$lib/stores/profileStore';
	import { Event, track } from '$lib/services/analytics';

	/** Set when the run ends; the parent swaps in <GameOver>. */
	export let result: GameResult | null = null;
	/** True when the run was already over before this mount, not just finished. */
	export let returning = false;
	export let showAd: boolean;

	let showHelpModal = false;
	let showPauseModal = false;
	let showGiveUpModal = false;

	let letterBank = '';
	let scrambledBank = '';
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
	let loadStatus = 'Loading Game...';

	/** Each circle swells and colours in turn, clockwise from 12 o'clock. */
	const CELEBRATION_STAGGER_MS = 90;
	const CELEBRATION_POP_MS = 520;

	/** The in-flight `start` call. Guesses wait on it rather than racing it. */
	let starting: Promise<GameState> | null = null;

	const sharedLetterIndexes = [0, 4];

	onMount(startGame);

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
			loadStatus = error instanceof Error ? error.message : 'Error Loading Game :(';
			console.error('Could not start the game:', error);
		}
	}

	function applyPuzzle(puzzle: GameState['puzzle']) {
		if (letterBank) return; // Already painted from the preload.

		letterBank = puzzle.letterBank;
		scrambledBank = letterBank;
		author = puzzle.author;
		dayKey = puzzle.dayKey;
		loopNumber = puzzle.loopNumber;
		slotCount = letterBank.length;
		selectedLetters = Array(slotCount).fill('');
	}

	async function checkSolution() {
		if (submitting || result) return;

		const guess = selectedLetters.join('');
		if (guess.length !== slotCount || selectedLetters.some((letter) => letter === '')) {
			notifications.danger('You must fill in every letter', 1000);
			return;
		}

		submitting = true;
		try {
			// The board can be usable a moment before `start` resolves; wait for it
			// rather than sending a guess the server has no run for.
			await starting;
			const outcome = await gameService.submitGuess(guess);

			if (outcome.correct) {
				await celebrate();
				finish(outcome.result);
			} else {
				notifications.danger('Incorrect', 1000);
			}
		} catch (error) {
			notifications.danger(error instanceof Error ? error.message : 'Something went wrong', 2000);
		} finally {
			submitting = false;
		}
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
	 * Plays the completion animation and resolves once it has finished.
	 *
	 * The results page used to replace the board the instant the server said
	 * "correct", so there was no window for any of this to be seen.
	 */
	async function celebrate(): Promise<void> {
		if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return;

		celebrating = true;
		const total = (slotCount - 1) * CELEBRATION_STAGGER_MS + CELEBRATION_POP_MS;
		await new Promise((resolve) => setTimeout(resolve, total));
	}

	function finish(finished: GameResult) {
		running = false;
		// The server returns the freshly updated profile, so the stats panel does
		// not need a second round trip to show the new streak.
		if (finished.profile) setProfile(finished.profile);
		showAd = true;
		result = finished;
	}

	function letterSelected(letter: string, index: number) {
		const slot = selectedLetters.findIndex((value) => value === '');
		if (slot === -1 || usedKeys.includes(index)) return;

		selectedLetters[slot] = letter;
		usedKeys = [...usedKeys, index];
	}

	function deleteLetter() {
		if (usedKeys.length === 0) return;

		const slot = usedKeys.length - 1;
		selectedLetters[slot] = '';
		usedKeys = usedKeys.slice(0, -1);
	}

	function resetBoard() {
		selectedLetters = Array(slotCount).fill('');
		usedKeys = [];
	}

	function shuffleLetters() {
		// Presentation only -- the server does not care what order we display in.
		scrambledBank = [...letterBank].sort(() => Math.random() - 0.5).join('');
		resetBoard();
	}

	function handleKeyPress(event: KeyboardEvent) {
		if (showHelpModal || showPauseModal || showGiveUpModal || paused || result || !letterBank)
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
			<i class="fa-regular fa-circle-pause" aria-hidden="true"></i>
		</button>
		<button
			class="header-action"
			on:click={requestGiveUp}
			disabled={submitting || !running}
			aria-label="Give up"
			title="Give up"
		>
			<i class="fa-regular fa-face-sad-tear" aria-hidden="true"></i>
		</button>
		<button
			class="header-action"
			on:click={() => (showHelpModal = true)}
			aria-label="How to play"
			title="How to play"
		>
			<i class="fa-regular fa-circle-question" aria-hidden="true"></i>
		</button>
	</div>

	<Toast />

	<div class="centered-container full-height-container board-area">
		{#if letterBank}
			<div class="circle-container mb-5 mt-5">
				{#each selectedLetters as letter, index}
					<div
						class="circle"
						class:filled={letter !== ''}
						class:shared={sharedLetterIndexes.includes(index)}
						class:celebrate={celebrating}
						style={`
              left: calc(38% + ${Math.cos((index / selectedLetters.length) * 2 * Math.PI - Math.PI / 2) * 100}px);
              top: calc(38% + ${Math.sin((index / selectedLetters.length) * 2 * Math.PI - Math.PI / 2) * 100}px);
              --pop-delay: ${index * CELEBRATION_STAGGER_MS}ms;
              --pop-duration: ${CELEBRATION_POP_MS}ms;
            `}
					>
						{letter}
					</div>
				{/each}
			</div>

			<div class="keyboard">
				{#each scrambledBank as letter, index (index)}
					<button
						class="key"
						class:disabled={isDisabled(index)}
						on:click={() => letterSelected(letter, index)}
					>
						{letter}
					</button>
				{/each}

				<button class="key" on:click={resetBoard} aria-label="Clear">
					<i class="fa-solid fa-eraser"></i>
				</button>
				<button class="key" on:click={shuffleLetters} aria-label="Shuffle">
					<i class="fa-solid fa-shuffle"></i>
				</button>
				<button class="key" on:click={deleteLetter} aria-label="Delete">
					<i class="fa-solid fa-delete-left"></i>
				</button>
				<button class="key enter-key" on:click={checkSolution} disabled={submitting}>
					{#if submitting}
						<i class="fa-solid fa-spinner fa-spin" aria-label="Checking"></i>
					{:else}
						Enter
					{/if}
				</button>
			</div>
		{:else}
			<p>{loadStatus}</p>
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
	<button class="share-button" on:click={resumeGame} disabled={pauseBusy}>
		{pauseBusy ? 'Resuming...' : 'Resume'}
	</button>
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
			color: #000;
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
	.circle.celebrate {
		animation: pop var(--pop-duration, 520ms) ease-in-out var(--pop-delay, 0ms) forwards;
	}

	/* The shared circles are already gradient-filled, so they only need the
	   swell -- but they still take their place in the sweep. */
	.circle.celebrate:not(.shared) {
		animation: pop-fill var(--pop-duration, 520ms) ease-in-out var(--pop-delay, 0ms) forwards;
	}

	@keyframes pop {
		0% {
			transform: scale(1);
		}
		45% {
			transform: scale(1.32);
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
		}
		45% {
			transform: scale(1.32);
			background-image: linear-gradient(to bottom, #ff5793, #f70303);
			color: #ffffff;
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

	.share-button {
		background-image: -webkit-linear-gradient(top, #ff4f87, #fc2f4f);
		background-image: linear-gradient(to bottom, #ff4f87, #fc2f4f);
		color: white;
		border-radius: 20px;
		width: 100%;
		height: 56px;
		border: none;
		text-transform: uppercase;
		font-size: 12px;
		font-weight: 600;
		letter-spacing: 1px;
		cursor: pointer;
	}

	.share-button:disabled {
		opacity: 0.6;
		cursor: default;
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
</style>
