/**
 * Game orchestration: starting a timed run, checking answers, finishing.
 *
 * This is the only place a completion time is produced, and it is always
 * `serverNow - run.startedAt`. The browser's own timer is presentation; a
 * duration the client merely asserts is never written anywhere.
 */
import { error } from '@sveltejs/kit';
import * as runs from '$lib/server/repositories/runRepository';
import * as puzzleService from '$lib/server/services/puzzleService';
import * as statsService from '$lib/server/services/statsService';
import * as profileService from '$lib/server/services/profileService';
import * as leaderboardService from '$lib/server/services/leaderboardService';
import { todayKey } from '$lib/utils/gameDate';
import type { AuthUser } from '$lib/server/auth';
import type { PublicPuzzle, RevealedPuzzle } from '$lib/models/puzzle';
import type { GlobalStats } from '$lib/models/globalStats';
import type { Profile } from '$lib/models/profile';

/**
 * Floor for a physically possible run.
 *
 * Set low on purpose: it is meant to catch scripted submissions, not to judge
 * fast players. A genuinely quick human can select eight letters and hit enter
 * in a handful of seconds, so anything at or above this is taken at face value.
 * Runs below it still get their time and stats -- they just do not reach the
 * leaderboard, and the run is flagged for review.
 */
const MIN_PLAUSIBLE_SECONDS = 2;

export interface GameState {
	dayKey: string;
	puzzle: PublicPuzzle;
	/** ISO. When the server handed out the letters. */
	startedAt: string;
	/** ISO. Lets the browser correct its own clock drift for display. */
	serverNow: string;
	/** Seconds elapsed so far, server-measured, excluding paused time. */
	elapsedSeconds: number;
	paused: boolean;
	finished: GameResult | null;
}

export interface GameResult {
	dayKey: string;
	elapsedSeconds: number;
	gaveUp: boolean;
	flagged: boolean;
	solution: RevealedPuzzle;
	globalStats: GlobalStats & { isUnderAverage: boolean; isHighScore: boolean };
	profile: Profile | null;
}

/**
 * Hands out today's letters and starts (or resumes) the clock.
 *
 * Idempotent by design: refreshing the page resumes the same run rather than
 * restarting the timer at zero.
 */
export async function start(user: AuthUser, dayKey: string = todayKey()): Promise<GameState> {
	const puzzle = await puzzleService.getPublicPuzzle(dayKey);
	const run = await runs.startIfAbsent(user.uid, dayKey);
	const now = new Date();

	return {
		dayKey,
		puzzle,
		startedAt: run.startedAt.toISOString(),
		serverNow: now.toISOString(),
		elapsedSeconds: elapsedFor(run, now),
		paused: run.pausedAt !== null,
		finished: run.completed ? await describeFinishedRun(user, dayKey, run) : null
	};
}

/** Current state without starting a run -- used to restore a finished day. */
export async function getState(
	user: AuthUser,
	dayKey: string = todayKey()
): Promise<GameState | null> {
	const run = await runs.find(user.uid, dayKey);
	if (!run) return null;

	const puzzle = await puzzleService.getPublicPuzzle(dayKey);
	const now = new Date();

	return {
		dayKey,
		puzzle,
		startedAt: run.startedAt.toISOString(),
		serverNow: now.toISOString(),
		elapsedSeconds: run.elapsedSeconds ?? elapsedFor(run, now),
		paused: run.pausedAt !== null,
		finished: run.completed ? await describeFinishedRun(user, dayKey, run) : null
	};
}

/**
 * Pauses the clock.
 *
 * The player's board is blanked while paused, so they cannot study the letters
 * on our time. Paused time is banked on the run and subtracted from the final
 * score; `pauseCount` is recorded so unusual patterns stay reviewable.
 */
export async function pause(user: AuthUser, dayKey: string = todayKey()): Promise<GameState> {
	await requireActiveRun(user, dayKey);
	await runs.pause(user.uid, dayKey);
	return requireState(user, dayKey);
}

export async function resume(user: AuthUser, dayKey: string = todayKey()): Promise<GameState> {
	await requireActiveRun(user, dayKey);
	await runs.resume(user.uid, dayKey);
	return requireState(user, dayKey);
}

async function requireState(user: AuthUser, dayKey: string): Promise<GameState> {
	const state = await getState(user, dayKey);
	if (!state) throw error(409, 'No run in progress.');
	return state;
}

/**
 * Checks a guess. A correct guess ends the run and returns the full result;
 * an incorrect one just increments the attempt counter.
 */
export async function submitGuess(
	user: AuthUser,
	guess: string,
	dayKey: string = todayKey()
): Promise<{ correct: false } | { correct: true; result: GameResult }> {
	const run = await requireRunningRun(user, dayKey);

	if (!(await puzzleService.isAcceptedSolution(dayKey, guess))) {
		// Deliberately not awaited. This is a diagnostic counter -- its own
		// contract already says an approximate count is fine -- and awaiting a
		// Firestore write here roughly doubles the time a player waits to be told
		// they were wrong. On a serverless host an occasional increment may be
		// lost to a frozen instance; that is the accepted trade.
		void runs.recordAttempt(user.uid, dayKey);
		return { correct: false };
	}

	return { correct: true, result: await finish(user, dayKey, run, false) };
}

export async function giveUp(user: AuthUser, dayKey: string = todayKey()): Promise<GameResult> {
	const run = await requireActiveRun(user, dayKey);
	return finish(user, dayKey, run, true);
}

async function requireActiveRun(user: AuthUser, dayKey: string) {
	const run = await runs.find(user.uid, dayKey);
	if (!run) throw error(409, 'No run in progress. Start the puzzle first.');
	if (run.completed) throw error(409, "You have already finished today's loop.");
	return run;
}

/** As above, but also refuses while the clock is stopped. */
async function requireRunningRun(user: AuthUser, dayKey: string) {
	const run = await requireActiveRun(user, dayKey);
	if (run.pausedAt) throw error(409, 'The game is paused. Resume before playing.');
	return run;
}

async function finish(
	user: AuthUser,
	dayKey: string,
	run: runs.Run,
	gaveUp: boolean
): Promise<GameResult> {
	const elapsedSeconds = elapsedFor(run, new Date());
	const flagged = !gaveUp && elapsedSeconds < MIN_PLAUSIBLE_SECONDS;

	await runs.finish(user.uid, dayKey, { elapsedSeconds, gaveUp });

	// Giving up is not a completion: folding it into the global average would
	// drag the day's mean toward whoever quit fastest. The old client logged it.
	const globalStats = gaveUp
		? withComparison(await statsService.getForDay(dayKey), false, false)
		: await statsService.recordCompletion(dayKey, elapsedSeconds);

	const [solution, profile] = await Promise.all([
		puzzleService.reveal(dayKey),
		profileService.applyCompletion(user.uid, { dayKey, elapsedSeconds, gaveUp })
	]);

	// Ranked only for registered players, on a genuine completion. The service
	// decides silently -- see recordResult.
	await leaderboardService.recordResult(user, {
		dayKey,
		elapsedSeconds,
		gaveUp,
		flagged,
		name: profile?.name ?? null,
		avatar: profile?.avatar ?? 1
	});

	await profileService.saveGameData(user.uid, {
		dayKey,
		elapsedSeconds,
		gaveUp,
		completed: true,
		completedAt: new Date().toISOString(),
		solution: gaveUp ? null : solution.solution
	});

	return { dayKey, elapsedSeconds, gaveUp, flagged, solution, globalStats, profile };
}

async function describeFinishedRun(
	user: AuthUser,
	dayKey: string,
	run: runs.Run
): Promise<GameResult> {
	const [solution, stats, profile] = await Promise.all([
		puzzleService.reveal(dayKey),
		statsService.getForDay(dayKey),
		profileService.get(user.uid)
	]);

	return {
		dayKey,
		elapsedSeconds: run.elapsedSeconds ?? 0,
		gaveUp: run.gaveUp,
		flagged: false,
		solution,
		globalStats: withComparison(stats, false, false),
		profile
	};
}

function withComparison(stats: GlobalStats, isUnderAverage: boolean, isHighScore: boolean) {
	return { ...stats, isUnderAverage, isHighScore };
}

/**
 * Wall time since the run started, minus every second spent paused --
 * including an open pause that has not been closed yet.
 */
function elapsedFor(run: runs.Run, now: Date): number {
	const openPause = run.pausedAt ? now.getTime() - run.pausedAt.getTime() : 0;
	const net = now.getTime() - run.startedAt.getTime() - run.pausedMs - openPause;

	return Math.max(0, Math.floor(net / 1000));
}
