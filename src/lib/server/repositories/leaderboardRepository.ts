/**
 * Daily fastest-time board (Firestore, `leaderboard/{dayKey}/entries/{uid}`).
 *
 * Clients cannot read or write this collection -- see `firestore.rules`. Every
 * row is written by the server from a server-measured time, which is the only
 * reason the ordering means anything.
 *
 * Ordering is by `elapsedSeconds` alone. Firestore appends `__name__` as an
 * implicit final sort key, so ties resolve deterministically and cursor paging
 * works without needing a composite index.
 */
import { adminFirestore } from '$lib/server/firebase.admin';
import { FieldValue } from 'firebase-admin/firestore';
import type { QueryDocumentSnapshot } from 'firebase-admin/firestore';
import { avatarForUid, isValidAvatar } from '$lib/utils/avatars';

const ROOT = 'leaderboard';
const ENTRIES = 'entries';

export interface StoredEntry {
	uid: string;
	name: string;
	avatar: number;
	elapsedSeconds: number;
}

function entries(dayKey: string) {
	return adminFirestore().collection(ROOT).doc(dayKey).collection(ENTRIES);
}

/** Writes a player's time for the day. First result of the day wins. */
export async function record(dayKey: string, entry: StoredEntry): Promise<void> {
	await entries(dayKey)
		.doc(entry.uid)
		.set({ ...entry, finishedAt: FieldValue.serverTimestamp() }, { merge: false });
}

export async function findEntry(dayKey: string, uid: string): Promise<StoredEntry | null> {
	const snapshot = await entries(dayKey).doc(uid).get();
	return snapshot.exists ? toEntry(snapshot as QueryDocumentSnapshot) : null;
}

export async function top(dayKey: string, count: number): Promise<StoredEntry[]> {
	const snapshot = await entries(dayKey).orderBy('elapsedSeconds').limit(count).get();
	return snapshot.docs.map(toEntry);
}

/** How many players finished faster, plus one. */
export async function rank(dayKey: string, elapsedSeconds: number): Promise<number> {
	const snapshot = await entries(dayKey).where('elapsedSeconds', '<', elapsedSeconds).count().get();

	return snapshot.data().count + 1;
}

export async function total(dayKey: string): Promise<number> {
	const snapshot = await entries(dayKey).count().get();
	return snapshot.data().count;
}

/**
 * The rows either side of a player's own.
 *
 * Cursors from the player's document snapshot rather than their time, so two
 * players sharing a time still get a stable, non-overlapping window.
 */
export async function neighbours(
	dayKey: string,
	uid: string
): Promise<{ above: StoredEntry | null; below: StoredEntry | null }> {
	const own = await entries(dayKey).doc(uid).get();
	if (!own.exists) return { above: null, below: null };

	const ordered = entries(dayKey).orderBy('elapsedSeconds');

	const [aboveSnap, belowSnap] = await Promise.all([
		ordered.endBefore(own).limitToLast(1).get(),
		ordered.startAfter(own).limit(1).get()
	]);

	return {
		above: aboveSnap.empty ? null : toEntry(aboveSnap.docs[0]),
		below: belowSnap.empty ? null : toEntry(belowSnap.docs[0])
	};
}

function toEntry(doc: QueryDocumentSnapshot): StoredEntry {
	const raw = doc.data();
	return {
		uid: doc.id,
		name: typeof raw.name === 'string' ? raw.name : 'Looper',
		// Rows written before avatars existed still need a stable face.
		avatar: isValidAvatar(raw.avatar) ? raw.avatar : avatarForUid(doc.id),
		elapsedSeconds: typeof raw.elapsedSeconds === 'number' ? raw.elapsedSeconds : 0
	};
}
