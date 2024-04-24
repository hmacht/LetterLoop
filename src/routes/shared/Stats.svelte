<script>
// @ts-nocheck

  import { fetchFirebaseData } from '../firebaseFetchData.js';
  import { onMount } from 'svelte';

  export let globalStats;

  onMount(async () => {
    // If we dont have the stats, retrieve and st
    if (!globalStats) {
      setStats()
    }
  });
  

  function setStats() {
    globalStats = getStats()
      .then((result) => {
          globalStats = result;
      })
      .catch((error) => {
          console.error('Error:', error);
      });
  }

  function todaysDate() {
    const currentDatetime = new Date();
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    const formattedDate = currentDatetime.toLocaleDateString('en-US', options).replace(/\//g, '-');

    return formattedDate;
  }
  
  async function getStats() {
    try {
      const dataFromFirebase = await fetchFirebaseData("Stats/" + todaysDate());
      return dataFromFirebase;
    } catch (error) {
      return null;
    }
  }
</script>

{#if globalStats == "NOREF"}
  <p>Stats not availible yet today</p>
{:else}
  {#if globalStats}
    <p class="large-modal-text" style="padding-top:10px;"><b>{globalStats.count}</b> people have looped today.</p>
    <p class="large-modal-text" style="padding-top:10px;">Average Time: 🔴 {globalStats.averageTime} 🔴 </p>
    <p class="large-modal-text">High Score: 🔴 {globalStats.minTime} 🔴 </p>
  {:else}
    <p>Loading Stats...</p>
  {/if}
{/if}