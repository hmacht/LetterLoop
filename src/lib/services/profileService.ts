import { api } from '$lib/services/apiClient';
import type { Profile } from '$lib/models/profile';

export function getMyProfile(): Promise<Profile | null> {
	return api.get<Profile | null>('/api/profile');
}

export function createMyProfile(name: string): Promise<Profile> {
	return api.post<Profile>('/api/profile', { name });
}

/** Display name and avatar, saved together in one round trip. */
export function updateMyProfile(changes: { name?: string; avatar?: number }): Promise<Profile> {
	return api.patch<Profile>('/api/profile', changes);
}
