/**
 * Data access for player profiles (Firestore, `profiles/{uid}`) and their
 * per-day game records (`profiles/{uid}/gameData/{dayKey}`).
 */
import { adminFirestore } from '$lib/server/firebase.admin';
import { FieldValue } from 'firebase-admin/firestore';
import { parseDuration } from '$lib/utils/time';
import { avatarForUid, isValidAvatar } from '$lib/utils/avatars';
import type { Profile } from '$lib/models/profile';
import type { GameData } from '$lib/models/gameData';

const COLLECTION = 'profiles';
const GAME_DATA = 'gameData';

function profileDoc(uid: string) {
	return adminFirestore().collection(COLLECTION).doc(uid);
}

export async function findById(uid: string): Promise<Profile | null> {
	const snapshot = await profileDoc(uid).get();
	return snapshot.exists ? normalize(uid, snapshot.data() ?? {}) : null;
}

export async function create(profile: Profile): Promise<void> {
	await profileDoc(profile.id).set({
		...profile,
		createdAt: FieldValue.serverTimestamp(),
		updatedAt: FieldValue.serverTimestamp()
	});
}

export async function update(uid: string, changes: Partial<Profile>): Promise<void> {
	await profileDoc(uid).update({
		...changes,
		updatedAt: FieldValue.serverTimestamp()
	});
}

export async function findGameData(uid: string, dayKey: string): Promise<GameData | null> {
	const snapshot = await profileDoc(uid).collection(GAME_DATA).doc(dayKey).get();
	return snapshot.exists ? (snapshot.data() as GameData) : null;
}

export async function saveGameData(uid: string, gameData: GameData): Promise<void> {
	await profileDoc(uid).collection(GAME_DATA).doc(gameData.dayKey).set(gameData);
}

/**
 * Legacy rows may carry `averageTime` as an "HH:MM:SS" string and are missing
 * newer fields entirely, so coerce everything to the current shape on read.
 */
function normalize(uid: string, raw: Record<string, unknown>): Profile {
	return {
		id: uid,
		name: typeof raw.name === 'string' ? raw.name : 'Looper',
		email: typeof raw.email === 'string' ? raw.email : '',
		streak: typeof raw.streak === 'number' ? raw.streak : 0,
		gamesPlayed: typeof raw.gamesPlayed === 'number' ? raw.gamesPlayed : 0,
		averageTime: parseDuration(raw.averageTime) ?? 0,
		admin: raw.admin === true,
		// Profiles created before avatars existed get a stable one from their uid.
		avatar: isValidAvatar(raw.avatar) ? raw.avatar : avatarForUid(uid),
		lastPlayedDate: typeof raw.lastPlayedDate === 'string' ? raw.lastPlayedDate : null
	};
}
