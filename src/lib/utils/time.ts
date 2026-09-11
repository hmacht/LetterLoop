/**
 * Duration formatting.
 *
 * Durations are SECONDS everywhere in the app -- in stores, in the API payloads
 * and in the database. Elapsed times are whole seconds; running averages are
 * not, and keep their fraction so the next game folds into the true mean.
 * `HH:MM:SS` is a presentation format produced at the very edge, never
 * something we store, sort or do arithmetic on.
 */

/** Seconds -> `HH:MM:SS`. */
export function formatDuration(totalSeconds: number | null | undefined): string {
	if (totalSeconds == null || !Number.isFinite(totalSeconds) || totalSeconds < 0) {
		return '--:--:--';
	}

	const seconds = Math.floor(totalSeconds);
	const hh = Math.floor(seconds / 3600);
	const mm = Math.floor((seconds % 3600) / 60);
	const ss = seconds % 60;

	return [hh, mm, ss].map((part) => String(part).padStart(2, '0')).join(':');
}

/**
 * `HH:MM:SS` -> seconds.
 *
 * Only needed to read legacy rows that stored the formatted string; new writes
 * are always numeric. Returns null when the value cannot be parsed.
 *
 * Numbers pass through untouched. This used to floor them, which truncated the
 * stored running averages on every read. The next game was then folded into the
 * truncated value, so the mean ratcheted downwards: a finish one second under
 * the average knocked a whole second off it, while a finish over the average
 * only moved it once the gap exceeded the number of games played. Rounding for
 * display is the formatter's job.
 */
export function parseDuration(value: unknown): number | null {
	if (typeof value === 'number') {
		return Number.isFinite(value) && value >= 0 ? value : null;
	}

	if (typeof value !== 'string') return null;

	const parts = value.split(':').map(Number);
	if (parts.length !== 3 || parts.some((part) => !Number.isFinite(part))) return null;

	const [hh, mm, ss] = parts;
	return hh * 3600 + mm * 60 + ss;
}

/** Accepts either representation and always yields seconds (or null). */
export const toSeconds = parseDuration;
