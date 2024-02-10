<!-- Timer.svelte -->
<script>
  import { writable, readable } from 'svelte/store';

  export let elapsedSeconds;

  let startDate = Date.now();
  let isRunning = writable(false);
  let elapsedSecondsStore = writable(0)

  const elapsedTime = readable(0, function start(set) {
      const updateElapsedTime = () => {
          if ($isRunning) {
            elapsedSecondsStore.set(Math.round((Date.now() - startDate) / 1000));
              set($elapsedSecondsStore);
          }
      };

      const interval = setInterval(updateElapsedTime, 1000);

      return function stop() {
          clearInterval(interval);
      };
  });

  $: hh = Math.floor($elapsedTime / 3600);
  $: mm = Math.floor(($elapsedTime - hh * 3600) / 60);
  $: ss = $elapsedTime - hh * 3600 - mm * 60;

  function f(value) {
      if (value < 10) {
          return `0${value}`;
      }
      return value.toString();
  }

  export function start() {
      if (!$isRunning) {
          startDate = Date.now() - ($elapsedSecondsStore * 1000);
          isRunning.set(true);
      }
  }

  export function stop() {
      if ($isRunning) {
          isRunning.set(false);
      }
  }

  export function reset() {
      stop();
      startDate = Date.now();
      elapsedSecondsStore.set(0);
  }

  $: elapsedSeconds = f(hh) + ":" + f(mm) + ":" + f(ss);

</script>

<span class="timer">
  <span class="value">
      {f(hh)}</span>:<span class="value">
      {f(mm)}</span>:<span class="value">
      {f(ss)}
  </span>
</span>

<style>
  span.timer {
      padding: 0 0.2em;
  }
</style>
