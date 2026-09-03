/**
 * Rules about a finished run that more than one service has to agree on.
 */

/**
 * Floor for a physically possible run.
 *
 * Set low on purpose: it is meant to catch scripted submissions, not to judge
 * fast players. A genuinely quick human can select eight letters and hit enter
 * in a handful of seconds, so anything at or above this is taken at face value.
 * Runs below it still get their time and stats -- they just do not reach the
 * leaderboard, and the run is flagged for review.
 */
export const MIN_PLAUSIBLE_SECONDS = 2;

export function isPlausibleRun(elapsedSeconds: number): boolean {
	return elapsedSeconds >= MIN_PLAUSIBLE_SECONDS;
}
