/** Aggregate stats for one day, stored at `Stats/{dayKey}` in Realtime Database. */
export interface GlobalStats {
	/** Seconds. Fractional -- never rounded before it is stored. */
	averageSeconds: number;
	/** Integer seconds. */
	minSeconds: number;
	count: number;
}

/** Stats plus how the player who just finished compares to them. */
export interface GlobalStatsResult extends GlobalStats {
	isUnderAverage: boolean;
	isHighScore: boolean;
}
