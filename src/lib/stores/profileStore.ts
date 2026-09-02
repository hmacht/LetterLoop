import { writable, get } from 'svelte/store';
import { session, type SessionState } from '$lib/session';
import { getMyProfile } from '$lib/services/profileService';
import type { Profile } from '$lib/models/profile';

export const profileStore = writable<Profile | null>(null);
export const profileLoading = writable<boolean>(true);

let lastFetchedUid: string | null = null;

/** Re-reads the profile from the server, e.g. after finishing a game. */
export async function refreshProfile(): Promise<void> {
	const { user } = get(session) ?? { user: null };

	if (!user?.uid) {
		lastFetchedUid = null;
		profileStore.set(null);
		profileLoading.set(false);
		return;
	}

	profileLoading.set(true);
	try {
		lastFetchedUid = user.uid;
		profileStore.set(await getMyProfile());
	} catch (err) {
		console.error('Failed to load profile:', err);
		profileStore.set(null);
	} finally {
		profileLoading.set(false);
	}
}

/** Lets a completed game push fresh stats in without another round trip. */
export function setProfile(profile: Profile | null): void {
	profileStore.set(profile);
	profileLoading.set(false);
}

session.subscribe((state: SessionState) => {
	if (!state || state.loading) return;

	const uid = state.user?.uid ?? null;
	if (uid === lastFetchedUid) return;

	void refreshProfile();
});
