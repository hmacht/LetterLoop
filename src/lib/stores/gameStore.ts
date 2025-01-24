import { writable, type Writable } from "svelte/store";

interface GameDataStore {
  globalStats: Record<string, any>;
  elapsedSeconds: number;
  solutions: string[];
  gaveUp: boolean;
}

export const gameData: Writable<GameDataStore> = writable({
  globalStats: {},
  elapsedSeconds: 0,
  solutions: [],
  gaveUp: false
});