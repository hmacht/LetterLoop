/**
 * Canonical game-day handling.
 *
 * Every "day" in LetterLoop (puzzle key, stats bucket, leaderboard bucket) is
 * resolved in ONE fixed timezone. Using the visitor's local timezone -- which is
 * what the old `timeFormatter.today()` did -- means players either see the wrong
 * puzzle or can hand themselves a second attempt by changing their system clock.
 *
 * The key format is `MM-DD-YYYY` to stay compatible with the existing
 * Realtime Database `solutions/{key}` records.
 */

export const GAME_TIMEZONE = 'America/New_York';

/** The day LetterLoop #0 was published, used to derive the puzzle number. */
const EPOCH_DAY_KEY = '02-10-2024';

const KEY_PARTS = new Intl.DateTimeFormat('en-US', {
	timeZone: GAME_TIMEZONE,
	year: 'numeric',
	month: '2-digit',
	day: '2-digit'
});

/** `MM-DD-YYYY` for the given instant, in the game timezone. */
export function toDayKey(instant: Date = new Date()): string {
	return KEY_PARTS.format(instant).replace(/\//g, '-');
}

export function todayKey(): string {
	return toDayKey();
}

export function yesterdayKey(): string {
	return shiftDayKey(todayKey(), -1);
}

/** Move a day key forward/back by whole calendar days. */
export function shiftDayKey(key: string, days: number): string {
	const date = dayKeyToUtcDate(key);
	date.setUTCDate(date.getUTCDate() + days);
	return utcDateToDayKey(date);
}

/** Whole calendar days between two keys (`b - a`). */
export function daysBetween(a: string, b: string): number {
	const ms = dayKeyToUtcDate(b).getTime() - dayKeyToUtcDate(a).getTime();
	return Math.round(ms / 86_400_000);
}

/** Sequential puzzle number for a day key. Loop #0 is the epoch day. */
export function loopNumber(key: string = todayKey()): number {
	return daysBetween(EPOCH_DAY_KEY, key);
}

export function isValidDayKey(key: string): boolean {
	if (!/^\d{2}-\d{2}-\d{4}$/.test(key)) return false;
	return utcDateToDayKey(dayKeyToUtcDate(key)) === key;
}

/** Human-readable date for display, e.g. "September 1, 2026". */
export function formatDayKey(key: string): string {
	return dayKeyToUtcDate(key).toLocaleDateString('en-US', {
		timeZone: 'UTC',
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	});
}

// Day keys are calendar dates, not instants. We anchor them at UTC midnight so
// arithmetic on them is exact and never crosses a DST boundary.
function dayKeyToUtcDate(key: string): Date {
	const [month, day, year] = key.split('-').map(Number);
	return new Date(Date.UTC(year, month - 1, day));
}

function utcDateToDayKey(date: Date): string {
	const month = String(date.getUTCMonth() + 1).padStart(2, '0');
	const day = String(date.getUTCDate()).padStart(2, '0');
	return `${month}-${day}-${date.getUTCFullYear()}`;
}
