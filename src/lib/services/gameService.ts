/** Client-side view of a game session. Thin wrapper over `/api/game/*`. */
import { api } from '$lib/services/apiClient';
import type { PublicPuzzle, RevealedPuzzle } from '$lib/models/puzzle';
import type { GlobalStats } from '$lib/models/globalStats';
import type { Profile } from '$lib/models/profile';

export interface GameResult {
	dayKey: string;
	elapsedSeconds: number;
	gaveUp: boolean;
	flagged: boolean;
	solution: RevealedPuzzle;
	globalStats: GlobalStats & { isUnderAverage: boolean; isHighScore: boolean };
	profile: Profile | null;
}

export interface GameState {
	dayKey: string;
	puzzle: PublicPuzzle;
	startedAt: string;
	serverNow: string;
	/** Server-measured, excluding time spent paused. */
	elapsedSeconds: number;
	paused: boolean;
	finished: GameResult | null;
}

export type GuessOutcome = { correct: false } | { correct: true; result: GameResult };

/** Starts or resumes today's timed run. */
export function start(): Promise<GameState> {
	return api.post<GameState>('/api/game/start');
}

/** Existing run for today, or null if the player has not started. */
export function getState(): Promise<GameState | null> {
	return api.get<GameState | null>('/api/game/state');
}

export function submitGuess(guess: string): Promise<GuessOutcome> {
	return api.post<GuessOutcome>('/api/game/guess', { guess });
}

export function giveUp(): Promise<GameResult> {
	return api.post<GameResult>('/api/game/give-up');
}

/** Stops the clock. The board must be blanked while this is in effect. */
export function pause(): Promise<GameState> {
	return api.post<GameState>('/api/game/pause');
}

export function resume(): Promise<GameState> {
	return api.post<GameState>('/api/game/resume');
}
