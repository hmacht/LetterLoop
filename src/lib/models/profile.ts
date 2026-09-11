export interface Profile {
	id: string;
	name: string;
	email: string;
	streak: number;
	gamesPlayed: number;
	/** Mean completion time in seconds. Fractional -- never rounded before it is stored. */
	averageTime: number;
	admin: boolean;
	/** 1-based index into the avatar set. See $lib/utils/avatars. */
	avatar: number;
	/** Day key (`MM-DD-YYYY`) of the last completed game, or null. */
	lastPlayedDate: string | null;
}

/** Fields a player is allowed to change about themselves. */
export type ProfileEdit = Partial<Pick<Profile, 'name' | 'avatar'>>;
