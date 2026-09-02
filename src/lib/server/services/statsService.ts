/** Daily global stats business logic. */
import * as stats from '$lib/server/repositories/statsRepository';
import { todayKey } from '$lib/utils/gameDate';
import type { GlobalStats, GlobalStatsResult } from '$lib/models/globalStats';

const EMPTY: GlobalStats = { averageSeconds: 0, minSeconds: 0, count: 0 };

export async function getForDay(dayKey: string = todayKey()): Promise<GlobalStats> {
	return (await stats.findByDayKey(dayKey)) ?? EMPTY;
}

/**
 * Folds a completion into the day's totals.
 *
 * "Under average" and "high score" are judged against the totals as they were
 * *before* this player was added -- otherwise your own time drags the average
 * toward you and the comparison flatters everyone.
 */
export async function recordCompletion(
	dayKey: string,
	seconds: number
): Promise<GlobalStatsResult> {
	const { previous, current } = await stats.recordCompletion(dayKey, seconds);

	return {
		...current,
		isUnderAverage: previous ? seconds < previous.averageSeconds : true,
		isHighScore: previous ? seconds < previous.minSeconds : true
	};
}
