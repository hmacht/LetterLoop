<script>
  import { onMount } from 'svelte';

  export let showAd;

  let canSkip = false;
  let countdown = 5;

  onMount(() => {
    loadAd();
    startCountdown();
  });

  function loadAd() {
    window.aiptag.cmd.display.push(function() {
      window.aipDisplayTag.display('theletterloop-com_300x600');
    });
  }

  function startCountdown() {
    const interval = setInterval(() => {
      countdown--;
      if (countdown === 0) {
        clearInterval(interval);
        canSkip = true;
      }
    }, 1000);
  }

  function skipAd() {
    showAd = false;
  }
</script>

<style>
  .main-container {
    width: 100vw;
    display: flex;
    justify-content: center;
  }

  .ad-container {
    text-align: center;
    margin-top: 1rem;
  }

  .skip-btn {
    padding: 10px 15px 10px 15px;
    background-color: lightgray;
    border: 1.5px solid gray;
    border-radius: 10px;
    width: 300px;
    margin-top: 2rem;
  }

  .skip-btn:hover {
    cursor: pointer;
  }
</style>

<div class="main-container">
  <div class="ad-container">
    {#if canSkip}
      <button class="skip-btn" on:click={skipAd}>Skip & View Stats</button>
    {/if}

    {#if !canSkip}
      <p>Skip available in {countdown} seconds...</p>
    {/if}

    <div id='theletterloop-com_300x600'>
      <!-- JS Ad Injection -->
    </div>
  </div>
</div>

