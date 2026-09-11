<script lang="ts">
  import { SquareArrowOutUpRight } from 'lucide-svelte';

  import kickstarterLogo from '$lib/images/Ko-fi_HEART.gif';
</script>

<style>
  /* Lifted like every button on the page -- it is the one thing here asking to
     be clicked, so it should look pressable. The lift is the card's own dark
     green rather than the usual pink, since the card brings its own colour. */
  .kickstarter-container {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.5em;
    border: 2px solid #14532d;
    background-color: #09ce78;
    border-radius: 30px;
    margin: 1rem auto 0 auto;
    cursor: pointer;
    box-shadow: 0 var(--press) 0 #14532d;
    transition:
      transform var(--lift-ease),
      box-shadow var(--lift-ease);
  }

  .kickstarter-container:active {
    transform: translateY(var(--press));
    box-shadow: 0 0 0 #14532d;
  }

  .kickstarter-link {
    text-decoration: none;
    color: inherit;
  }

  .text-container {
    text-align: left;
    padding-left: 1.2rem;
  }
  .header {
    font-size: 18px;
    font-weight: 500;
    margin: 0;
    color: var(--ink);
  }
  .subtitle {
    font-size: 14px;
    color: #666;
    margin: 0;
    color: var(--ink);
    max-width: 200px;
  }

  /* Class lands on a component, so it is outside this file's scope. */
  .kickstarter-container :global(.external-link) {
    position: absolute;
    top: 0;
    right: 0;
    padding: 15px 20px 0 0;
    color: #ffffff;
  }

  .kickstarter-logo {
    width: 70px;
  }
</style>

<a href="https://ko-fi.com/letterloop" target="_blank" class="kickstarter-link">
  <div class="kickstarter-container">
    <img src={kickstarterLogo} class="kickstarter-logo"alt="Kickstarter Logo" />

    <div class="text-container">
      <p class="header">Buy me a cup of coffee.</p>
      <p class="subtitle">Click here to donate on ko-fi! $1 helps to keep us looping!</p>
    </div>

    <div style="flex: 1;"></div>
    <SquareArrowOutUpRight size={15} class="external-link" />
  </div>
</a>
