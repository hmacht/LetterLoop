/**
 * Deadline wrapper for database calls.
 *
 * The Realtime Database SDK holds a persistent connection and retries
 * indefinitely: if credentials are wrong or the service is unreachable, a
 * `.get()` never settles. On a serverless host that turns one bad config into
 * every request hanging until the platform's own timeout kills it.
 *
 * Wrapping reads in an explicit deadline turns that into a fast, honest 503.
 */
import { error } from '@sveltejs/kit';

const DEFAULT_TIMEOUT_MS = 8000;

export async function withDeadline<T>(
	operation: Promise<T>,
	description: string,
	timeoutMs: number = DEFAULT_TIMEOUT_MS
): Promise<T> {
	let timer: ReturnType<typeof setTimeout> | undefined;

	const deadline = new Promise<never>((_, reject) => {
		timer = setTimeout(() => reject(new DeadlineExceeded(description, timeoutMs)), timeoutMs);
	});

	try {
		return await Promise.race([operation, deadline]);
	} catch (err) {
		if (err instanceof DeadlineExceeded) {
			console.error(err.message);
			throw error(503, 'The game database is not responding. Please try again.');
		}
		throw err;
	} finally {
		clearTimeout(timer);
	}
}

class DeadlineExceeded extends Error {
	constructor(description: string, timeoutMs: number) {
		super(`${description} did not complete within ${timeoutMs}ms`);
		this.name = 'DeadlineExceeded';
	}
}
