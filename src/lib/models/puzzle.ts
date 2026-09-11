/** How a puzzle is stored in Realtime Database under `solutions/{dayKey}`. */
export interface PuzzleRecord {
	author: string;
	/** ISO timestamp of the publish date. */
	date: string;
	/** Canonical loop, e.g. "musichar" for MUSIC + CHARM. */
	solution: string;
	/** Every accepted loop for the day. `solution` is always solutions[0]. */
	solutions: string[];
	primary: string;
	secondary: string;
}

/**
 * The puzzle as handed to the browser.
 *
 * Deliberately does NOT carry `solution` / `primary` / `secondary`. The letter
 * bank is the solution's letters in scrambled order -- that much is unavoidable,
 * it *is* the puzzle -- but the ordering is the thing being asked for, so the
 * ordered answer never leaves the server until the player has finished.
 */
export interface PublicPuzzle {
	dayKey: string;
	loopNumber: number;
	author: string;
	letterBank: string;
	wordLength: number;
	/**
	 * Every letter that can legitimately join the two words.
	 *
	 * More than one, because the words can be entered in either order: MUSIC +
	 * CHARM and CHARM + MUSIC are both accepted loops, and the joint is `c` in
	 * one and `m` in the other. Editor-listed alternates add their own.
	 *
	 * The only piece of the ordering that is published, so the board can confirm
	 * that slot the instant it is filled rather than waiting on a round trip. It
	 * is a deliberate hint -- the same one the animation gives away anyway.
	 */
	sharedLetters: string[];
}

/** Returned once a player has legitimately finished or given up. */
export interface RevealedPuzzle {
	solution: string;
	primary: string;
	secondary: string;
}
