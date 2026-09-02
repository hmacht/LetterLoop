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

	import Device from 'svelte-device-info';

	/** Set when the run ends; the parent swaps in <GameOver>. */
	export let result: GameResult | null = null;
	/** True when the run was already over before this mount, not just finished. */
	export let returning = false;
	export let showAd: boolean;

	let showHelpModal = false;
	let showPauseModal = false;

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
	let loadStatus = 'Loading Game...';

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

	async function giveUp() {
		if (submitting || !running) return;

		submitting = true;
		try {
			await starting;
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
		if (showHelpModal || showPauseModal || paused || result || !letterBank) return;

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
	<div class="nav-flex-container">
		<div class="title-container">
			<a href="/" class="title nav-logo">LetterLoop</a>
		</div>
		<div class="spacer"></div>
		<button class="help-container" on:click={giveUp} disabled={submitting || !running}>
			<i class="fa-regular fa-face-sad-tear"></i>
			{#if !Device.isMobile}
				<p class="how-to-play">Give Up</p>
			{/if}
		</button>
		<button class="help-container" on:click={() => (showHelpModal = true)}>
			<i class="fa-regular fa-circle-question" style={Device.isMobile ? 'padding-right: 1rem;' : ''}
			></i>
			{#if !Device.isMobile}
				<p class="how-to-play">How to play</p>
			{/if}
		</button>
	</div>
	<div class="divider"></div>

	<Toast />

	<div class="centered-container full-height-container">
		<div class="flex-container">
			<div class="timer-container">
				<Timer {startedAtMs} {running} />
			</div>

			<button
				class="icon-button"
				on:click={pauseGame}
				disabled={!running || pauseBusy}
				aria-label="Pause"
			>
				<i class="fa-solid fa-pause"></i>
			</button>
		</div>

		{#if letterBank}
			<div class="circle-container mb-5 mt-5">
				{#each selectedLetters as letter, index}
					<div
						class="circle"
						class:filled={letter !== ''}
						class:shared={sharedLetterIndexes.includes(index)}
						style={`
              left: calc(38% + ${Math.cos((index / selectedLetters.length) * 2 * Math.PI - Math.PI / 2) * 100}px);
              top: calc(38% + ${Math.sin((index / selectedLetters.length) * 2 * Math.PI - Math.PI / 2) * 100}px);
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
	.icon-button,
	.help-container {
		background: none;
		border: none;
		cursor: pointer;
		display: flex;
		align-items: center;
		font: inherit;
		color: inherit;
	}

	.help-container:disabled {
		opacity: 0.5;
		cursor: default;
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

	.icon-button:disabled {
		opacity: 0.4;
		cursor: default;
	}
</style>
