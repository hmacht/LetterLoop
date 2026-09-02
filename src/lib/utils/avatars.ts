/**
 * Avatar identity.
 *
 * Avatars are stored as a small integer, not a URL, so the images can be
 * renamed, re-optimised or swapped without touching a single stored profile.
 */
export const AVATAR_COUNT = 6;

export function isValidAvatar(value: unknown): value is number {
	return Number.isInteger(value) && (value as number) >= 1 && (value as number) <= AVATAR_COUNT;
}

/** A random avatar, used when an account is created. */
export function randomAvatar(): number {
	return 1 + Math.floor(Math.random() * AVATAR_COUNT);
}

/**
 * A stable avatar for a profile saved before avatars existed.
 *
 * Derived from the uid so the same player always sees the same face, rather
 * than everyone defaulting to avatar 1.
 */
export function avatarForUid(uid: string): number {
	let hash = 2166136261;
	for (let i = 0; i < uid.length; i++) {
		hash ^= uid.charCodeAt(i);
		hash = Math.imul(hash, 16777619);
	}
	return ((hash >>> 0) % AVATAR_COUNT) + 1;
}
