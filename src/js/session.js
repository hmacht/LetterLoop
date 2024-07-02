import { writable } from 'svelte/store';

export const session = writable({
  gameTime: 0,
  lastSavedDate: null, // Store the last saved date
});