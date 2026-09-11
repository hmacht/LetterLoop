/**
 * Puzzle authoring: word suggestions, validation, and scheduling new loops.
 *
 * The word list and dictionary live here rather than in the browser because the
 * admin tools write to the puzzle table, and that write has to be gated on the
 * server anyway.
 */
import { error } from '@sveltejs/kit';
import * as puzzles from '$lib/server/repositories/puzzleRepository';
import { isWord } from '$lib/server/dictionary';
import { DEFAULT_WORD_LENGTH, formatLoop, hasLoopShape, isSWord } from '$lib/utils/loop';
import { daysBetween, shiftDayKey, toDayKey } from '$lib/utils/gameDate';
import wordList from '../../../../static/wordlists/prime.txt?raw';
import type { PuzzleRecord } from '$lib/models/puzzle';

let cached: string[] | undefined;

function words(): string[] {
	if (!cached) {
		cached = wordList
			.split('\n')
			.map((word) => word.trim().toLowerCase())
			.filter((word) => word.length === DEFAULT_WORD_LENGTH);
	}
	return cached;
}

/** A random sample of candidate first words. */
export function primaryOptions(count = 5, includeSWords = false): string[] {
	const pool = words().filter((word) => (includeSWords || !isSWord(word)) && isWord(word));
	const picks = new Set<string>();

	// Bounded so a small pool cannot spin forever.
	for (let i = 0; picks.size < count && i < count * 50; i++) {
		picks.add(pool[Math.floor(Math.random() * pool.length)]);
	}

	return [...picks];
}

/** Every word that closes the loop with `primary`. */
export function secondaryOptions(primary: string): string[] {
	const primer = primary.trim().toLowerCase();

	return words().filter((word) => word !== primer && hasLoopShape(primer, word) && isWord(word));
}

export function isValidLoop(primary: string, secondary: string): boolean {
	const a = primary.trim().toLowerCase();
	const b = secondary.trim().toLowerCase();
	return hasLoopShape(a, b) && isWord(a) && isWord(b);
}

export interface WordUsage {
	/** How many published days have used this word. */
	count: number;
	/** Day key of the most recent use that has already run, or null. */
	lastUsed: string | null;
}

/**
 * How often a word has run, and when it last did.
 *
 * Days still in the queue are excluded from `lastUsed`: a word scheduled for
 * next week has not been seen by anyone yet, so it cannot be the reason today's
 * loop feels familiar.
 */
export async function usage(word: string): Promise<WordUsage> {
	const dayKeys = await puzzles.findWordUsage(word.trim().toLowerCase());
	const today = toDayKey();

	// Picked by comparison rather than by sorting: `daysBetween` reads as a
	// distance, and using it as a comparator quietly orders the wrong way round.
	let lastUsed: string | null = null;
	for (const dayKey of dayKeys) {
		if (daysBetween(dayKey, today) < 0) continue; // Still in the queue.
		if (!lastUsed || daysBetween(lastUsed, dayKey) > 0) lastUsed = dayKey;
	}

	return { count: dayKeys.length, lastUsed };
}

/** How far back the queue reaches, so editors can see what just ran. */
const QUEUE_LOOKBACK_DAYS = 3;

/** Puzzles from a few days back onward, so editors can see the queue in context. */
export async function upcoming(): Promise<Array<PuzzleRecord & { dayKey: string }>> {
	const from = new Date();
	from.setDate(from.getDate() - QUEUE_LOOKBACK_DAYS);
	return puzzles.findPublishedFrom(from.toISOString());
}

/**
 * Appends a loop to the end of the schedule -- the day after the last puzzle,
 * or today if the queue is empty.
 */
export async function scheduleNext(
	primary: string,
	secondary: string,
	author: string
): Promise<PuzzleRecord & { dayKey: string }> {
	const a = primary.trim().toLowerCase();
	const b = secondary.trim().toLowerCase();

	if (!isValidLoop(a, b)) {
		throw error(400, `"${a}" and "${b}" do not form a valid loop.`);
	}

	const latest = await puzzles.findLatest();
	const dayKey = latest ? shiftDayKey(latest.dayKey, 1) : toDayKey();

	if (await puzzles.exists(dayKey)) {
		throw error(409, `A puzzle is already scheduled for ${dayKey}.`);
	}

	const solution = formatLoop(a, b);
	const record: PuzzleRecord = {
		author: author || 'mystery',
		date: dayKeyToIso(dayKey),
		solution,
		solutions: [solution],
		primary: a,
		secondary: b
	};

	await puzzles.create(dayKey, record);
	return { dayKey, ...record };
}

function dayKeyToIso(dayKey: string): string {
	const [month, day, year] = dayKey.split('-').map(Number);
	return new Date(Date.UTC(year, month - 1, day)).toISOString();
}
