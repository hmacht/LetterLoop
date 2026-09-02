/**
 * Data access for puzzles (Realtime Database, `solutions/{dayKey}`).
 *
 * Repositories only read and write. Anything that decides *what* the browser is
 * allowed to see belongs in the service layer.
 */
import { adminRealtimeDb } from '$lib/server/firebase.admin';
import { withDeadline } from '$lib/server/timeout';
import type { PuzzleRecord } from '$lib/models/puzzle';

const ROOT = 'solutions';

/**
 * In-process cache for published puzzles.
 *
 * A day's puzzle is read on every single guess, and once published it does not
 * change -- so re-reading it from the database each time buys nothing. The TTL
 * exists only so an editor correcting a live puzzle sees it take effect without
 * a redeploy; correctness never depends on it.
 *
 * Misses are deliberately NOT cached: a day with no puzzle yet must pick one up
 * the moment it is published, not ten minutes later.
 *
 * Each server instance keeps its own copy, which is fine -- the value is
 * identical everywhere and it warms on first use.
 */
const CACHE_TTL_MS = 10 * 60 * 1000;

const cache = new Map<string, { record: PuzzleRecord; expiresAt: number }>();

export async function findByDayKey(dayKey: string): Promise<PuzzleRecord | null> {
	const now = Date.now();
	const cached = cache.get(dayKey);
	if (cached && cached.expiresAt > now) return cached.record;

	const snapshot = await withDeadline(
		adminRealtimeDb().ref(`${ROOT}/${dayKey}`).get(),
		`read puzzle ${dayKey}`
	);

	if (!snapshot.exists()) return null;

	const record = normalize(snapshot.val());
	cache.set(dayKey, { record, expiresAt: now + CACHE_TTL_MS });
	pruneExpired(now);

	return record;
}

/** Keeps the map from growing a stale entry per day, forever. */
function pruneExpired(now: number): void {
	for (const [key, entry] of cache) {
		if (entry.expiresAt <= now) cache.delete(key);
	}
}

/** Drops a cached puzzle so an edit is visible immediately. */
export function invalidate(dayKey: string): void {
	cache.delete(dayKey);
}

/** Every puzzle published on or after `fromIso`, oldest first. */
export async function findPublishedFrom(
	fromIso: string
): Promise<Array<PuzzleRecord & { dayKey: string }>> {
	const snapshot = await withDeadline(
		adminRealtimeDb().ref(ROOT).orderByChild('date').startAt(fromIso).get(),
		'list puzzles'
	);

	if (!snapshot.exists()) return [];

	const puzzles: Array<PuzzleRecord & { dayKey: string }> = [];
	snapshot.forEach((child) => {
		puzzles.push({ dayKey: child.key as string, ...normalize(child.val()) });
	});

	return puzzles.sort((a, b) => a.date.localeCompare(b.date));
}

/** The most recently dated puzzle, used to work out where the queue ends. */
export async function findLatest(): Promise<(PuzzleRecord & { dayKey: string }) | null> {
	const snapshot = await withDeadline(
		adminRealtimeDb().ref(ROOT).orderByChild('date').limitToLast(1).get(),
		'read latest puzzle'
	);

	if (!snapshot.exists()) return null;

	let latest: (PuzzleRecord & { dayKey: string }) | null = null;
	snapshot.forEach((child) => {
		latest = { dayKey: child.key as string, ...normalize(child.val()) };
	});

	return latest;
}

export async function create(dayKey: string, record: PuzzleRecord): Promise<void> {
	await withDeadline(
		adminRealtimeDb().ref(`${ROOT}/${dayKey}`).set(record),
		`write puzzle ${dayKey}`
	);
	invalidate(dayKey);
}

export async function exists(dayKey: string): Promise<boolean> {
	const snapshot = await withDeadline(
		adminRealtimeDb().ref(`${ROOT}/${dayKey}`).get(),
		`check puzzle ${dayKey}`
	);
	return snapshot.exists();
}

/** How many published puzzles use `word` as their primary or secondary. */
export async function countWordUsage(word: string): Promise<number> {
	const [primary, secondary] = await Promise.all([
		countByField('primary', word),
		countByField('secondary', word)
	]);

	return primary + secondary;
}

async function countByField(field: 'primary' | 'secondary', value: string): Promise<number> {
	const snapshot = await withDeadline(
		adminRealtimeDb().ref(ROOT).orderByChild(field).equalTo(value).get(),
		`count ${field} usage`
	);

	return snapshot.exists() ? snapshot.numChildren() : 0;
}

/**
 * Older rows only carry `solutions[]`; newer ones also carry the denormalised
 * `solution`/`primary`/`secondary`. Present one shape to the rest of the app.
 */
function normalize(raw: Record<string, unknown>): PuzzleRecord {
	const solutions = Array.isArray(raw.solutions)
		? (raw.solutions as string[]).map((entry) => entry.toLowerCase())
		: [];
	const solution = typeof raw.solution === 'string' ? raw.solution.toLowerCase() : solutions[0];

	return {
		author: typeof raw.author === 'string' ? raw.author : 'mystery',
		date: typeof raw.date === 'string' ? raw.date : '',
		solution,
		solutions: solutions.length > 0 ? solutions : solution ? [solution] : [],
		primary: typeof raw.primary === 'string' ? raw.primary.toLowerCase() : '',
		secondary: typeof raw.secondary === 'string' ? raw.secondary.toLowerCase() : ''
	};
}
