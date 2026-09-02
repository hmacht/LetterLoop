/** Player profile business logic. */
import { error } from '@sveltejs/kit';
import * as profiles from '$lib/server/repositories/profileRepository';
import { todayKey, yesterdayKey } from '$lib/utils/gameDate';
import { isValidAvatar, randomAvatar, AVATAR_COUNT } from '$lib/utils/avatars';
import type { AuthUser } from '$lib/server/auth';
import type { Profile, ProfileEdit } from '$lib/models/profile';
import type { GameData } from '$lib/models/gameData';

export async function get(uid: string): Promise<Profile | null> {
	return profiles.findById(uid);
}

export async function requireProfile(uid: string): Promise<Profile> {
	const profile = await profiles.findById(uid);
	if (!profile) throw error(404, 'Profile not found.');
	return profile;
}

export async function requireAdmin(user: AuthUser): Promise<Profile> {
	const profile = await requireProfile(user.uid);
	if (!profile.admin) throw error(403, 'Admin access required.');
	return profile;
}

export async function create(user: AuthUser, name: string): Promise<Profile> {
	const profile: Profile = {
		id: user.uid,
		name: name.trim() || 'Looper',
		email: user.email ?? '',
		streak: 0,
		gamesPlayed: 0,
		averageTime: 0,
		admin: false,
		// New players get a random face rather than all starting identical.
		avatar: randomAvatar(),
		lastPlayedDate: null
	};

	await profiles.create(profile);
	return profile;
}

/** Applies the fields a player is allowed to change about themselves. */
export async function edit(uid: string, changes: ProfileEdit): Promise<Profile> {
	const update: Partial<Profile> = {};

	if (changes.name !== undefined) {
		const trimmed = changes.name.trim();
		if (trimmed.length < 1 || trimmed.length > 24) {
			throw error(400, 'Name must be between 1 and 24 characters.');
		}
		update.name = trimmed;
	}

	if (changes.avatar !== undefined) {
		if (!isValidAvatar(changes.avatar)) {
			throw error(400, `Avatar must be a whole number between 1 and ${AVATAR_COUNT}.`);
		}
		update.avatar = changes.avatar;
	}

	if (Object.keys(update).length === 0) {
		throw error(400, 'Nothing to update.');
	}

	await profiles.update(uid, update);
	return requireProfile(uid);
}

/**
 * Applies one finished game to a profile's lifetime stats.
 *
 * Giving up breaks the streak but does not count as a game played, which is how
 * the original logic behaved.
 */
export async function applyCompletion(
	uid: string,
	outcome: { dayKey: string; elapsedSeconds: number; gaveUp: boolean }
): Promise<Profile | null> {
	const profile = await profiles.findById(uid);
	if (!profile) return null;

	if (outcome.gaveUp) {
		await profiles.update(uid, { streak: 0 });
		return { ...profile, streak: 0 };
	}

	const gamesPlayed = profile.gamesPlayed + 1;
	const changes: Partial<Profile> = {
		gamesPlayed,
		streak: nextStreak(profile),
		averageTime: (profile.averageTime * profile.gamesPlayed + outcome.elapsedSeconds) / gamesPlayed,
		lastPlayedDate: outcome.dayKey
	};

	await profiles.update(uid, changes);
	return { ...profile, ...changes };
}

export async function getGameData(uid: string, dayKey: string): Promise<GameData | null> {
	return profiles.findGameData(uid, dayKey);
}

export async function saveGameData(uid: string, gameData: GameData): Promise<void> {
	await profiles.saveGameData(uid, gameData);
}

function nextStreak(profile: Profile): number {
	// Already counted today -- a replay must not inflate the streak.
	if (profile.lastPlayedDate === todayKey()) return profile.streak;
	return profile.lastPlayedDate === yesterdayKey() ? profile.streak + 1 : 1;
}
