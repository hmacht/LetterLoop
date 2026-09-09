<script lang="ts">
	import { onMount } from 'svelte';

	import Menu from '$lib/components/Menu.svelte';
	import GameBoard from '$lib/components/GameBoard.svelte';
	import GameOver from '$lib/components/GameOver.svelte';
	import FullPageAd from '$lib/components/FullPageAd.svelte';
	import Loading from '$lib/components/Loading.svelte';

	import * as gameService from '$lib/services/gameService';
	import type { GameResult } from '$lib/services/gameService';

	let showGameBoard = false;
	let showAd = false;
	let result: GameResult | null = null;
	/** True when today's run was finished before this page load. */
	let returning = false;
	/** True when the finish never reached the server. */
	let saveFailed = false;
	/**
	 * Until the server has told us whether today's loop is already done, we do
	 * not know whether to show the menu or the results -- so show neither.
	 */
	let restoring = true;

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
			console.error("Could not restore today's game:", error);
		} finally {
			restoring = false;
		}
	});
</script>

<main>
	{#if restoring}
		<Loading />
	{:else if showAd}
		<FullPageAd bind:showAd />
	{:else if result}
		<GameOver {result} {returning} {saveFailed} />
	{:else if showGameBoard}
		<GameBoard bind:result bind:returning bind:saveFailed bind:showAd />
	{:else}
		<main class="flex-grow">
			<Menu bind:showGameBoard />
		</main>
	{/if}
</main>
