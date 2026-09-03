<script lang="ts">
	import { onMount } from 'svelte';
	import { getTodaysStats } from '$lib/services/statsService';
	import { formatDuration } from '$lib/utils/time';
	import type { GlobalStats } from '$lib/models/globalStats';

	/** Passed in when the caller already has stats (e.g. straight after a game). */
	export let globalStats: GlobalStats | null = null;

	let loadingStatus = 'Loading Stats...';

	onMount(async () => {
		if (globalStats) return;

		try {
			globalStats = await getTodaysStats();
		} catch {
			loadingStatus = 'Stats could not be loaded.';
		}
	});
</script>

<p class="result">
	{#if globalStats && globalStats.count > 0}
		<b>{globalStats.count.toLocaleString()}</b> people have looped today with an average time of
		<b>{formatDuration(globalStats.averageSeconds)}</b>.
	{:else if globalStats}
		Be the first to loop today!
	{:else}
		{loadingStatus}
	{/if}
</p>

<style>
	.result {
		margin: 5px 0 0 0;
		line-height: 1.2;
	}

	/* The two figures are the point of the sentence, picked out in the same red
	   the leaderboard blurb uses for a rank. */
	.result b {
		color: #fc365a;
	}
</style>
