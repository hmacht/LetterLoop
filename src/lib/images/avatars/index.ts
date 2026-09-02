/**
 * Avatar image URLs, indexed 1..AVATAR_COUNT.
 *
 * Imported (rather than referenced by path) so Vite fingerprints and serves
 * them, and so a missing file is a build error instead of a broken image.
 */
import avatar1 from '$lib/images/avatars/avatar_1.png';
import avatar2 from '$lib/images/avatars/avatar_2.png';
import avatar3 from '$lib/images/avatars/avatar_3.png';
import avatar4 from '$lib/images/avatars/avatar_4.png';
import avatar5 from '$lib/images/avatars/avatar_5.png';
import avatar6 from '$lib/images/avatars/avatar_6.png';
import { AVATAR_COUNT } from '$lib/utils/avatars';

const SOURCES = [avatar1, avatar2, avatar3, avatar4, avatar5, avatar6];

export const AVATAR_CHOICES = SOURCES.map((src, index) => ({ id: index + 1, src }));

export function avatarSrc(avatar: number | null | undefined): string {
	const index = ((Number(avatar) || 1) - 1) % AVATAR_COUNT;
	return SOURCES[index < 0 ? 0 : index];
}
