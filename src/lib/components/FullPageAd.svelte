<script lang="ts">
  import { ArrowRight } from 'lucide-svelte';

  import Button from '$lib/components/ui/Button.svelte';

  import { onMount } from 'svelte';

  export let showAd: boolean;

  let canSkip = false;
  let countdown = 5;

  onMount(() => {
    loadAd();
    startCountdown();
  });

  function loadAd() {
    // Third-party and frequently blocked -- must never break the page.
    window.aiptag?.cmd.display.push(() => {
      window.aipDisplayTag?.display('theletterloop-com_300x600');
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
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .ad-container {
    text-align: center;
    margin-top: 1rem;
  }

  /* The wait, counted down in the same red the game uses for its own buttons. */
  /* A flex row rather than a badge dropped into running text: baseline nudging
     left the circle sitting low and the spacing around it uneven. */
  .waiting {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 7px;
    margin-top: 2rem;
    font-weight: 700;
    color: var(--ink);
  }

  /* Stands in for the digit, so there is one count, not two. */
  .countdown {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 26px;
    height: 26px;
    flex-shrink: 0;
    border-radius: 50%;
    background-image: var(--brand-gradient);
    color: white;
    font-size: 13px;
    font-weight: 700;
    font-variant-numeric: tabular-nums;
  }

  /* Layout only -- the look comes from the shared button. */
  :global(.skip-btn) {
    width: 300px;
    max-width: 100%;
    margin-top: 2rem;
  }

</style>

<div class="main-container full-height-container">
  <div class="ad-container">
    {#if canSkip}
      <Button class="skip-btn" on:click={skipAd}>
        Skip &amp; View Stats
        <ArrowRight size={16} aria-hidden="true" />
      </Button>
    {:else}
      <p class="waiting">
        <span>Skip available in</span>
        <span class="countdown">{countdown}</span>
        <span>seconds...</span>
      </p>

    {/if}

    <div id='theletterloop-com_300x600'>
      <!-- JS Ad Injection -->
    </div>
  </div>
</div>

