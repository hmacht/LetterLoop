/** A player's record of one day's game, stored at `profiles/{uid}/gameData/{dayKey}`. */
export interface GameData {
	dayKey: string;
	/** Authoritative duration, measured server-side. Integer seconds. */
	elapsedSeconds: number;
	gaveUp: boolean;
	completed: boolean;
	/** ISO timestamp. */
	completedAt: string;
	solution: string | null;
}
