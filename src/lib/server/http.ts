/** Small helpers shared by the /api route handlers. */
import { error } from '@sveltejs/kit';
import { isValidDayKey, todayKey } from '$lib/utils/gameDate';

export async function readJson<T>(request: Request): Promise<T> {
	try {
		return (await request.json()) as T;
	} catch {
		throw error(400, 'Expected a JSON body.');
	}
}

export function requireString(value: unknown, field: string): string {
	if (typeof value !== 'string' || value.trim() === '') {
		throw error(400, `\`${field}\` is required.`);
	}
	return value;
}

/**
 * Reads an optional `?day=MM-DD-YYYY` override, defaulting to today.
 * Validated because it is interpolated straight into a database path.
 */
export function dayKeyFrom(url: URL): string {
	const requested = url.searchParams.get('day');
	if (!requested) return todayKey();
	if (!isValidDayKey(requested)) throw error(400, 'Invalid day, expected MM-DD-YYYY.');
	return requested;
}
