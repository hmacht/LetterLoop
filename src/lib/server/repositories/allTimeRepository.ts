/**
 * All-time board, ranked by games played (Firestore, `profiles`).
 *
 * Distinct from `leaderboardRepository`, which ranks a single day by speed.
 * This one rewards showing up rather than being fast.
 */
import { adminFirestore } from '$lib/server/firebase.admin';
import { avatarForUid, isValidAvatar } from '$lib/utils/avatars';
import type { Profile } from '$lib/models/profile';

const COLLECTION = 'profiles';

export interface AllTimeEntry {
	uid: string;
	name: string;
	avatar: number;
	gamesPlayed: number;
	rank: number;
}

export async function topByGamesPlayed(count: number): Promise<AllTimeEntry[]> {
	const snapshot = await adminFirestore()
		.collection(COLLECTION)
		.orderBy('gamesPlayed', 'desc')
		.limit(count)
		.get();

	return snapshot.docs.map((doc, index) => {
		const raw = doc.data() as Partial<Profile>;
		return {
			uid: doc.id,
			name: typeof raw.name === 'string' ? raw.name : 'Looper',
			avatar: isValidAvatar(raw.avatar) ? raw.avatar : avatarForUid(doc.id),
			gamesPlayed: typeof raw.gamesPlayed === 'number' ? raw.gamesPlayed : 0,
			rank: index + 1
		};
	});
}

/** Rank = how many players have played more, plus one. */
export async function rankByGamesPlayed(gamesPlayed: number): Promise<number> {
	const snapshot = await adminFirestore()
		.collection(COLLECTION)
		.where('gamesPlayed', '>', gamesPlayed)
		.count()
		.get();

	return snapshot.data().count + 1;
}
