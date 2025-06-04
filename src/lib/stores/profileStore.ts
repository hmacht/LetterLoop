import { writable, get } from 'svelte/store';
import { session, type SessionState } from '$lib/session';
import { getProfile } from '$lib/repos/profileRepo';
import type { Profile } from '$lib/models/profile';

export const profileStore = writable<Profile | null>(null);
export const profileLoading = writable<boolean>(true);

let lastFetchedUid: string | null = null;

// Refresh profile session manually
export async function refreshProfileStore(): Promise<void> {
  const s = get(session);
  const user = s.user;

  if (!user) {
    profileStore.set(null);
    profileLoading.set(false);
    return;
  }

  profileLoading.set(true);
  const profile = await getProfile(user.uid);
  profileStore.set(profile ?? null);
  profileLoading.set(false);
}

// Listen to user changes and fetch profile
session.subscribe((s: SessionState) => {
  if (!s || s.loading) return;

  const uid = s.user?.uid ?? null;

  if (!uid) {
    lastFetchedUid = null;
    profileStore.set(null);
    return;
  }

  if (uid === lastFetchedUid) return;

  lastFetchedUid = uid;

  (async () => {
    try {
      const profile = await getProfile(uid);
      profileStore.set(profile ?? null);
    } catch (err) {
      console.error('Failed to fetch profile:', err);
      profileStore.set(null);
    } finally {
      profileLoading.set(false);
    }
  })();
});
