<script lang="ts">
	import { onDestroy, onMount } from 'svelte';

	import Menu from '$lib/components/Menu.svelte';
	import GameBoard from '$lib/components/GameBoard.svelte';
	import GameOver from '$lib/components/GameOver.svelte';
	import FullPageAd from '$lib/components/FullPageAd.svelte';

	import * as gameService from '$lib/services/gameService';
	import type { GameResult } from '$lib/services/gameService';
	import { hideNav } from '$lib/stores/layoutUIStore';

	let showGameBoard = false;
	let showAd = false;
	let result: GameResult | null = null;
	/** True when today's run was finished before this page load. */
	let returning = false;

	$: hideNav.set((showGameBoard && !result) || showAd);

	onMount(async () => {
		// The server is the source of truth for "have I played today" -- it knows
		// even if this browser's local storage was cleared.
		try {
			const state = await gameService.getState();
			if (state?.finished) {
				result = state.finished;
				returning = true;
			}
		} catch (error) {
			// Not fatal: the player can still start, and /api/game/start will
			// return the finished run if there is one.
			console.error('Could not restore today\'s game:', error);
		}
	});

	onDestroy(() => hideNav.set(false));
</script>

<main>
	{#if showAd}
		<FullPageAd bind:showAd />
	{:else if result}
		<GameOver {result} {returning} />
	{:else if showGameBoard}
		<GameBoard bind:result bind:returning bind:showAd />
	{:else}
		<main class="flex-grow">
			<Menu bind:showGameBoard />
		</main>
	{/if}
</main>
