/**
 * Daily fastest-time leaderboard.
 *
 * Only registered players are ranked. Anonymous visitors play the same game and
 * get the same time, but a board you can re-enter by clearing your cookies is
 * not a board.
 */
import * as daily from '$lib/server/repositories/leaderboardRepository';
import * as allTimeRepo from '$lib/server/repositories/allTimeRepository';
import * as profileService from '$lib/server/services/profileService';
import { todayKey } from '$lib/utils/gameDate';
import type { AuthUser } from '$lib/server/auth';
import type { AllTimeBoard, DailyLeaderboard, LeaderboardEntry } from '$lib/models/leaderboard';
import type { StoredEntry } from '$lib/server/repositories/leaderboardRepository';

const TOP_COUNT = 10;

/**
 * Adds a completed run to the day's board.
 *
 * Deliberately silent about refusals -- a caller who is anonymous, gave up, or
 * posted an implausible time simply does not appear. Announcing the rule would
 * only tell someone gaming it where the line sits.
 */
export async function recordResult(
	user: AuthUser,
	outcome: {
		dayKey: string;
		elapsedSeconds: number;
		gaveUp: boolean;
		flagged: boolean;
		name: string | null;
		avatar: number;
	}
): Promise<void> {
	if (user.isAnonymous || outcome.gaveUp || outcome.flagged || !outcome.name) return;

	await daily.record(outcome.dayKey, {
		uid: user.uid,
		name: outcome.name,
		avatar: outcome.avatar,
		elapsedSeconds: outcome.elapsedSeconds
	});
}

export async function forDay(
	user: AuthUser | null,
	dayKey: string = todayKey()
): Promise<DailyLeaderboard> {
	const [topEntries, entryCount] = await Promise.all([
		daily.top(dayKey, TOP_COUNT),
		daily.total(dayKey)
	]);

	const top = topEntries.map((entry, index) => present(entry, index + 1));
	const empty: DailyLeaderboard = {
		dayKey,
		top,
		you: null,
		above: null,
		below: null,
		total: entryCount,
		reason: null
	};

	if (!user || user.isAnonymous) {
		return { ...empty, reason: 'not-signed-in' };
	}

	const own = await daily.findEntry(dayKey, user.uid);
	if (!own) {
		return { ...empty, reason: 'not-played' };
	}

	const yourRank = await daily.rank(dayKey, own.elapsedSeconds);
	const you = present(own, yourRank);

	// Inside the top list already -- neighbours would just repeat rows.
	if (yourRank <= top.length) {
		return { ...empty, you, above: null, below: null, reason: 'ranked' };
	}

	const { above, below } = await daily.neighbours(dayKey, user.uid);

	return {
		...empty,
		you,
		above: above ? present(above, yourRank - 1) : null,
		below: below ? present(below, yourRank + 1) : null,
		reason: 'ranked'
	};
}

function present(entry: StoredEntry, rank: number): LeaderboardEntry {
	return {
		uid: entry.uid,
		name: entry.name,
		avatar: entry.avatar,
		elapsedSeconds: entry.elapsedSeconds,
		rank
	};
}

/**
 * The all-time board, ranked by games played.
 *
 * Shown alongside the daily speed board: one rewards being fast today, the
 * other rewards turning up every morning.
 */
export async function allTime(user: AuthUser | null, count = 10): Promise<AllTimeBoard> {
	const top = await allTimeRepo.topByGamesPlayed(count);

	if (!user || user.isAnonymous) return { top, yourRank: null, yourGamesPlayed: null };

	const profile = await profileService.get(user.uid);
	if (!profile) return { top, yourRank: null, yourGamesPlayed: null };

	return {
		top,
		yourRank: await allTimeRepo.rankByGamesPlayed(profile.gamesPlayed),
		yourGamesPlayed: profile.gamesPlayed
	};
}
