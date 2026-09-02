/**
 * Small in-memory rate limiter.
 *
 * Deliberately modest in what it claims: the counters live in one process, so
 * on a serverless host each instance keeps its own tally and the effective
 * limit is (limit x instances). That is enough to blunt casual scripted abuse
 * of the email lookup; it is not a defence against a determined attacker with
 * a proxy pool. If that becomes a concern, move the counters to Firestore or
 * put a real WAF in front.
 */
import { error } from '@sveltejs/kit';

interface Bucket {
	count: number;
	resetAt: number;
}

const buckets = new Map<string, Bucket>();
let lastSweep = Date.now();

/** Throws 429 once `key` exceeds `limit` requests within `windowMs`. */
export function rateLimit(key: string, limit: number, windowMs: number): void {
	const now = Date.now();
	sweep(now);

	const bucket = buckets.get(key);

	if (!bucket || now >= bucket.resetAt) {
		buckets.set(key, { count: 1, resetAt: now + windowMs });
		return;
	}

	bucket.count += 1;

	if (bucket.count > limit) {
		throw error(429, 'Too many attempts. Please wait a moment and try again.');
	}
}

/** Drops expired buckets so the map cannot grow without bound. */
function sweep(now: number): void {
	if (now - lastSweep < 60_000) return;
	lastSweep = now;

	for (const [key, bucket] of buckets) {
		if (now >= bucket.resetAt) buckets.delete(key);
	}
}
