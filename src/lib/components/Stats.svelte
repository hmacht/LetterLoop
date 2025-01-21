<script lang="ts">
  import { onMount } from 'svelte';
  import { getTodaysStats } from '$lib/repos/globalStatsRepo';
  import type { GlobalStats } from '$lib/models/globalStats';

  export let globalStats: GlobalStats | null;
  export let loadingStatus = "Loading Stats...";

  onMount(async () => {
    await setGlobalStats()
  });

  async function setGlobalStats() {
    if (!globalStats) {
      try {
        globalStats = await getTodaysStats();
      } catch (error) {
        loadingStatus = "Stats could not be loaded."
        return null;
      }
    }

    if (!globalStats) {
      loadingStatus = "Stats could not be loaded."
    }
  }
</script>

<style>
  .result {
    margin: 5px 0 0 0;
    line-height: 1.2;
  }
</style>

<p class="result">
  {#if globalStats}
      <b>{globalStats.count}</b> people have looped today with an average time of 
      <b>{globalStats.averageTime}</b>
  {:else}
    {loadingStatus}
  {/if}
</p>