/**
 * Data access for timed runs (Firestore, `runs/{dayKey}_{uid}`).
 *
 * A run is the server's record of one player's attempt at one day's puzzle:
 * when the server handed them the letters, and when they handed back an answer.
 * It is the only thing the elapsed time is ever derived from.
 *
 * Clients have no write access to this collection -- see `firestore.rules`.
 */
import { adminFirestore } from '$lib/server/firebase.admin';
import { FieldValue, Timestamp } from 'firebase-admin/firestore';

const COLLECTION = 'runs';

export interface Run {
	uid: string;
	dayKey: string;
	/** Server clock at the moment the puzzle was handed out. */
	startedAt: Date;
	finishedAt: Date | null;
	/** Authoritative duration, set when the run finishes. Integer seconds. */
	elapsedSeconds: number | null;
	gaveUp: boolean;
	completed: boolean;
	/** How many wrong answers were submitted -- a cheap sanity signal. */
	attempts: number;
	/** Total time already spent paused, in ms. Excluded from the final score. */
	pausedMs: number;
	/** Set while a pause is open; null when running. */
	pausedAt: Date | null;
	/** How many times the player paused -- recorded so it can be reviewed. */
	pauseCount: number;
}

function runDoc(uid: string, dayKey: string) {
	return adminFirestore().collection(COLLECTION).doc(`${dayKey}_${uid}`);
}

export async function find(uid: string, dayKey: string): Promise<Run | null> {
	const snapshot = await runDoc(uid, dayKey).get();
	return snapshot.exists ? fromFirestore(snapshot.data() ?? {}) : null;
}

/**
 * Starts a run, or returns the existing one untouched.
 *
 * Reloading the page must never reset the clock, so this is deliberately
 * idempotent: the first start of the day is the one that counts.
 */
export async function startIfAbsent(uid: string, dayKey: string): Promise<Run> {
	const ref = runDoc(uid, dayKey);

	return adminFirestore().runTransaction(async (transaction) => {
		const snapshot = await transaction.get(ref);
		if (snapshot.exists) return fromFirestore(snapshot.data() ?? {});

		const run: Run = {
			uid,
			dayKey,
			startedAt: new Date(),
			finishedAt: null,
			elapsedSeconds: null,
			gaveUp: false,
			completed: false,
			attempts: 0,
			pausedMs: 0,
			pausedAt: null,
			pauseCount: 0
		};

		transaction.set(ref, toFirestore(run));
		return run;
	});
}

/** Counts a rejected guess. Best-effort: a lost increment must not fail the request. */
export async function recordAttempt(uid: string, dayKey: string): Promise<void> {
	try {
		await runDoc(uid, dayKey).update({ attempts: FieldValue.increment(1) });
	} catch {
		// The run may not exist yet; an approximate attempt count is fine.
	}
}

export async function finish(
	uid: string,
	dayKey: string,
	outcome: { elapsedSeconds: number; gaveUp: boolean }
): Promise<void> {
	await runDoc(uid, dayKey).update({
		finishedAt: Timestamp.now(),
		elapsedSeconds: outcome.elapsedSeconds,
		gaveUp: outcome.gaveUp,
		completed: true
	});
}

/**
 * Opens a pause, or leaves an already-paused run alone.
 *
 * Transactional because pause/resume are the one place a client could race
 * itself into a state where the clock never restarts.
 */
export async function pause(uid: string, dayKey: string): Promise<Run> {
	return mutate(uid, dayKey, (run) => {
		if (run.completed || run.pausedAt) return run;
		return { ...run, pausedAt: new Date(), pauseCount: run.pauseCount + 1 };
	});
}

/** Closes an open pause, banking the time spent in it. */
export async function resume(uid: string, dayKey: string): Promise<Run> {
	return mutate(uid, dayKey, (run) => {
		if (run.completed || !run.pausedAt) return run;
		return {
			...run,
			pausedMs: run.pausedMs + (Date.now() - run.pausedAt.getTime()),
			pausedAt: null
		};
	});
}

async function mutate(uid: string, dayKey: string, change: (run: Run) => Run): Promise<Run> {
	const ref = runDoc(uid, dayKey);

	return adminFirestore().runTransaction(async (transaction) => {
		const snapshot = await transaction.get(ref);
		if (!snapshot.exists) throw new Error('No run in progress.');

		const updated = change(fromFirestore(snapshot.data() ?? {}));
		transaction.set(ref, toFirestore(updated));
		return updated;
	});
}

function toFirestore(run: Run) {
	return {
		...run,
		startedAt: Timestamp.fromDate(run.startedAt),
		finishedAt: run.finishedAt ? Timestamp.fromDate(run.finishedAt) : null,
		pausedAt: run.pausedAt ? Timestamp.fromDate(run.pausedAt) : null
	};
}

function fromFirestore(raw: Record<string, unknown>): Run {
	return {
		uid: raw.uid as string,
		dayKey: raw.dayKey as string,
		startedAt: (raw.startedAt as Timestamp).toDate(),
		finishedAt: raw.finishedAt ? (raw.finishedAt as Timestamp).toDate() : null,
		elapsedSeconds: typeof raw.elapsedSeconds === 'number' ? raw.elapsedSeconds : null,
		gaveUp: raw.gaveUp === true,
		completed: raw.completed === true,
		attempts: typeof raw.attempts === 'number' ? raw.attempts : 0,
		pausedMs: typeof raw.pausedMs === 'number' ? raw.pausedMs : 0,
		pausedAt: raw.pausedAt ? (raw.pausedAt as Timestamp).toDate() : null,
		pauseCount: typeof raw.pauseCount === 'number' ? raw.pauseCount : 0
	};
}
