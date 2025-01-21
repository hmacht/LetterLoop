import { writable } from 'svelte/store';

export const gameData = writable({
  globalStats: {},
  elapsedSeconds: 0,
  solutions: [],
  gaveUp: false
});