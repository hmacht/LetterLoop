/**
 * Puzzle business logic.
 *
 * The one rule this file exists to enforce: the ordered solution never reaches
 * the browser until the player has finished. The letter bank is unavoidably
 * public -- it is literally the answer's letters -- but the ordering is the
 * puzzle, and answer checking happens here rather than in the client.
 */
import { error } from '@sveltejs/kit';
import * as puzzles from '$lib/server/repositories/puzzleRepository';
import { isWord } from '$lib/server/dictionary';
import { loopNumber, todayKey } from '$lib/utils/gameDate';
import { parseLoop } from '$lib/utils/loop';
import type { PublicPuzzle, PuzzleRecord, RevealedPuzzle } from '$lib/models/puzzle';

export const WORD_LENGTH = 5;
/** Two 5-letter words sharing both a first and last letter = 8 distinct slots. */
export const LOOP_LENGTH = WORD_LENGTH * 2 - 2;

export async function requirePuzzle(dayKey: string = todayKey()): Promise<PuzzleRecord> {
	const puzzle = await puzzles.findByDayKey(dayKey);
	if (!puzzle || !puzzle.solution) {
		throw error(404, `No puzzle has been published for ${dayKey}.`);
	}
	return puzzle;
}

/** The safe-to-publish view of a puzzle. */
export async function getPublicPuzzle(dayKey: string = todayKey()): Promise<PublicPuzzle> {
	const puzzle = await requirePuzzle(dayKey);

	return {
		dayKey,
		loopNumber: loopNumber(dayKey),
		author: puzzle.author,
		letterBank: scramble(puzzle.solution, dayKey),
		wordLength: WORD_LENGTH,
		sharedLetters: sharedLetters(puzzle)
	};
}

export async function reveal(dayKey: string = todayKey()): Promise<RevealedPuzzle> {
	const puzzle = await requirePuzzle(dayKey);
	const [primary, secondary] = parseLoop(puzzle.solution, WORD_LENGTH);

	return {
		solution: puzzle.solution,
		primary: puzzle.primary || primary,
		secondary: puzzle.secondary || secondary
	};
}

/**
 * Is `guess` an acceptable loop for the day?
 *
 * Accepts the published solution, plus any other pair of real words that forms
 * a valid loop from the same letters -- players regularly find alternatives the
 * editor did not think of, and the original client-side check allowed them too.
 */
export async function isAcceptedSolution(dayKey: string, guess: string): Promise<boolean> {
	const puzzle = await requirePuzzle(dayKey);
	const candidate = guess.trim().toLowerCase();

	if (candidate.length !== LOOP_LENGTH || !/^[a-z]+$/.test(candidate)) return false;
	if (puzzle.solutions.includes(candidate)) return true;

	// Critical: the guess must be a rearrangement of the day's letters. Without
	// this a caller could POST any two valid dictionary words and be accepted.
	if (!isAnagramOf(candidate, puzzle.solution)) return false;

	const [primary, secondary] = parseLoop(candidate, WORD_LENGTH);
	return isWord(primary) && isWord(secondary);
}

/**
 * The letters that can sit where the two words join.
 *
 * Each word starts on a joint: the words share their first and last letters, so
 * the first letter of one is the last of the other. Which of the two lands at
 * the bottom of the ring depends on the word the player starts with -- both are
 * correct -- and any alternate the editor listed brings its own pair.
 */
function sharedLetters(puzzle: PuzzleRecord): string[] {
	const loops = [puzzle.solution, ...puzzle.solutions].filter(Boolean);
	const firsts = loops.flatMap((loop) => parseLoop(loop, WORD_LENGTH).map((word) => word[0]));

	return [...new Set(firsts.filter(Boolean).map((letter) => letter.toLowerCase()))];
}

function isAnagramOf(a: string, b: string): boolean {
	return [...a].sort().join('') === [...b].sort().join('');
}

/**
 * Deterministic shuffle, seeded by the day key.
 *
 * Every player gets the same starting arrangement, and a page reload does not
 * silently deal a different board. Players can still reshuffle locally -- that
 * is presentation only.
 */
function scramble(solution: string, seed: string): string {
	const letters = [...solution];
	const random = mulberry32(hash(seed));

	for (let i = letters.length - 1; i > 0; i--) {
		const j = Math.floor(random() * (i + 1));
		[letters[i], letters[j]] = [letters[j], letters[i]];
	}

	return letters.join('');
}

function hash(value: string): number {
	let h = 2166136261;
	for (let i = 0; i < value.length; i++) {
		h ^= value.charCodeAt(i);
		h = Math.imul(h, 16777619);
	}
	return h >>> 0;
}

function mulberry32(seed: number): () => number {
	return () => {
		seed = (seed + 0x6d2b79f5) | 0;
		let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
		t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
		return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
	};
}
