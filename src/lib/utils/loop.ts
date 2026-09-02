/**
 * Pure loop shape helpers. No I/O, no dictionary -- safe on both sides of the
 * wire. Anything needing the word list or a spell check lives in
 * `$lib/server/services/loopService`.
 *
 * A "loop" is two words sharing their first and last letters, stored as the
 * first word followed by the middle of the second: MUSIC + CHARM -> "musichar".
 */

export const DEFAULT_WORD_LENGTH = 5;

/** MUSIC + CHARM -> "musichar" */
export function formatLoop(primary: string, secondary: string): string {
	return primary + secondary.slice(1, -1);
}

/** "musichar" -> ["music", "charm"] */
export function parseLoop(loop: string, length: number = DEFAULT_WORD_LENGTH): [string, string] {
	const primary = loop.slice(0, length);
	const secondary = loop.slice(length - 1) + primary[0];
	return [primary, secondary];
}

/**
 * Do these two words form a loop? Checks length and the shared-letter rule
 * only -- whether they are real words is a dictionary question.
 */
export function hasLoopShape(
	primary: string,
	secondary: string,
	length: number = DEFAULT_WORD_LENGTH
): boolean {
	return (
		primary.length === length &&
		secondary.length === length &&
		primary[0] === secondary[length - 1] &&
		primary[length - 1] === secondary[0]
	);
}

/** S-words make for awkward puzzles; editors can filter them out. */
export function isSWord(word: string): boolean {
	const lower = word.toLowerCase();
	return lower.startsWith('s') || lower.endsWith('s');
}
