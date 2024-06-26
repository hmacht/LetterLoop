<script>
// @ts-nocheck

  import { fetchTodaysStats } from '../../js/firebaseFetchData.js';
  import { onMount } from 'svelte';

  export let globalStats;
  export let loadingStatus = "Loading Stats...";

  onMount(async () => {
    await setGlobalStats()
  });

  async function setGlobalStats() {
    if (!globalStats) {
      try {
        globalStats = await fetchTodaysStats();
      } catch (error) {
        loadingStatus = "Stats could not be loaded."
        return null;
      }
    }

    if (globalStats == "NOREF") {
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