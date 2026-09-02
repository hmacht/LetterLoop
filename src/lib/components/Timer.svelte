<!--
  Display-only clock.

  It counts up from the moment the SERVER started the run, corrected for however
  far the local clock has drifted. It is deliberately not authoritative: the time
  that gets recorded is computed server-side when the run finishes, so nothing
  here can change a player's score.
-->
<script lang="ts">
  import { onDestroy } from 'svelte';
  import { formatDuration } from '$lib/utils/time';

  /** Server start time, already corrected onto the local clock. Epoch ms. */
  export let startedAtMs: number;
  /** Freezes the display once the run is over. */
  export let running = true;
  /** Bound out for callers that want the current reading. */
  export let elapsedSeconds = 0;

  let now = Date.now();

  const interval = setInterval(() => {
    if (running) now = Date.now();
  }, 250);

  onDestroy(() => clearInterval(interval));

  $: elapsedSeconds = Math.max(0, Math.floor((now - startedAtMs) / 1000));
</script>

<span class="timer">{formatDuration(elapsedSeconds)}</span>

<style>
  span.timer {
    padding: 0 0.2em;
  }
</style>
