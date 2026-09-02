/** One player's ranked time for one day. */
export interface LeaderboardEntry {
	uid: string;
	name: string;
	/** 1-based index into the avatar set. */
	avatar: number;
	/** Server-measured, excluding paused time. */
	elapsedSeconds: number;
	/** 1-based placing for the day. */
	rank: number;
}

/**
 * The daily board as shown on the results page: the fastest few, plus the
 * player's own placing with the entry immediately above and below it.
 */
export interface DailyLeaderboard {
	dayKey: string;
	/** Fastest players today, best first. */
	top: LeaderboardEntry[];
	/** The caller's own row, or null if they are not on the board. */
	you: LeaderboardEntry | null;
	/** Neighbours, omitted when the player is already inside `top`. */
	above: LeaderboardEntry | null;
	below: LeaderboardEntry | null;
	/** How many players have a ranked time today. */
	total: number;
	/** Why the caller has no row, when they don't. */
	reason: 'ranked' | 'not-signed-in' | 'gave-up' | 'not-played' | null;
}

/** One player's standing on the all-time, games-played board. */
export interface AllTimeEntry {
	uid: string;
	name: string;
	avatar: number;
	gamesPlayed: number;
	rank: number;
}

export interface AllTimeBoard {
	top: AllTimeEntry[];
	yourRank: number | null;
	yourGamesPlayed: number | null;
}
