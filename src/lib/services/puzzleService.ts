/**
 * Today's puzzle, fetched ahead of time.
 *
 * `/api/puzzle/today` is deliberately separate from `/api/game/start`: it needs
 * no sign-in and, crucially, does NOT start anyone's clock. That makes it safe
 * to fetch while the player is still looking at the menu, so the board can be
 * on screen the instant they press Play.
 *
 * The letter bank is a deterministic per-day shuffle, so the letters this
 * returns are identical to the ones `/api/game/start` will hand back.
 */
import { api } from '$lib/services/apiClient';
import type { PublicPuzzle } from '$lib/models/puzzle';

let inFlight: Promise<PublicPuzzle> | null = null;

/** Fetch (or reuse) today's puzzle. Safe to call repeatedly. */
export function loadTodaysPuzzle(): Promise<PublicPuzzle> {
	inFlight ??= api.get<PublicPuzzle>('/api/puzzle/today');
	return inFlight;
}

/**
 * Kick off the fetch and ignore the outcome.
 *
 * Used by the menu purely to warm the cache -- a failure here is not worth
 * reporting, because the board will retry and surface it properly.
 */
export function preloadTodaysPuzzle(): void {
	loadTodaysPuzzle().catch(() => {
		inFlight = null;
	});
}
