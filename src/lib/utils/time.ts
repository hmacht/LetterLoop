/**
 * Duration formatting.
 *
 * Durations are integer SECONDS everywhere in the app -- in stores, in the API
 * payloads and in the database. `HH:MM:SS` is a presentation format produced at
 * the very edge, never something we store, sort or do arithmetic on.
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
 */
export function parseDuration(value: unknown): number | null {
	if (typeof value === 'number') {
		return Number.isFinite(value) && value >= 0 ? Math.floor(value) : null;
	}

	if (typeof value !== 'string') return null;

	const parts = value.split(':').map(Number);
	if (parts.length !== 3 || parts.some((part) => !Number.isFinite(part))) return null;

	const [hh, mm, ss] = parts;
	return hh * 3600 + mm * 60 + ss;
}

/** Accepts either representation and always yields seconds (or null). */
export const toSeconds = parseDuration;
