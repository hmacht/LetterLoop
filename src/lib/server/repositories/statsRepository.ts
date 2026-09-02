/**
 * Data access for the daily global stats (Realtime Database, `Stats/{dayKey}`).
 */
import { adminRealtimeDb } from '$lib/server/firebase.admin';
import { withDeadline } from '$lib/server/timeout';
import { parseDuration } from '$lib/utils/time';
import type { GlobalStats } from '$lib/models/globalStats';

const ROOT = 'Stats';

interface StoredStats {
	averageSeconds: number;
	minSeconds: number;
	count: number;
}

export async function findByDayKey(dayKey: string): Promise<GlobalStats | null> {
	const snapshot = await withDeadline(
		adminRealtimeDb().ref(`${ROOT}/${dayKey}`).get(),
		`read stats ${dayKey}`
	);
	return snapshot.exists() ? normalize(snapshot.val()) : null;
}

/**
 * Folds one completion into the day's aggregate and returns the updated totals.
 *
 * This runs as a Realtime Database transaction. The previous implementation did
 * a read, then a write, from the browser -- two players finishing within the
 * same few hundred milliseconds would clobber each other and the count would
 * silently drift.
 */
export async function recordCompletion(
	dayKey: string,
	seconds: number
): Promise<{ previous: GlobalStats | null; current: GlobalStats }> {
	const ref = adminRealtimeDb().ref(`${ROOT}/${dayKey}`);
	let previous: GlobalStats | null = null;

	const result = await withDeadline(
		ref.transaction((raw: Record<string, unknown> | null): StoredStats => {
			previous = raw ? normalize(raw) : null;

			if (!previous) {
				return { averageSeconds: seconds, minSeconds: seconds, count: 1 };
			}

			const count = previous.count + 1;
			return {
				averageSeconds: (previous.averageSeconds * previous.count + seconds) / count,
				minSeconds: Math.min(previous.minSeconds, seconds),
				count
			};
		}),
		`record completion ${dayKey}`
	);

	if (!result.committed || !result.snapshot.exists()) {
		throw new Error(`Could not record completion for ${dayKey}`);
	}

	return { previous, current: normalize(result.snapshot.val()) };
}

/**
 * Rows written before this refactor stored `averageTime`/`minTime` as
 * "HH:MM:SS" strings. Read both shapes so historical days keep working.
 */
function normalize(raw: Record<string, unknown>): GlobalStats {
	const average = parseDuration(raw.averageSeconds ?? raw.averageTime) ?? 0;
	const min = parseDuration(raw.minSeconds ?? raw.minTime) ?? 0;
	const count = typeof raw.count === 'number' ? raw.count : 0;

	return { averageSeconds: average, minSeconds: min, count };
}
