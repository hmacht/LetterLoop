import { writable } from 'svelte/store';
import type { Profile } from '$lib/models/profile';

export const profileStore = writable<Profile | null>(null);