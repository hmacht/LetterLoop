/**
 * Server-side spell checking.
 *
 * The dictionary is bundled into the server build (rather than read from
 * `static/` at runtime) so it resolves identically on every adapter -- Cloud
 * Functions, Vercel, or `vite dev`. It is parsed lazily and then cached for the
 * lifetime of the process, because parsing 62k entries is not cheap.
 */
import Typo from 'typo-js';
import affixes from '../../../static/dictionaries/en_US/en_US.aff?raw';
import words from '../../../static/dictionaries/en_US/en_US.dic?raw';

let dictionary: Typo | undefined;

export function getDictionary(): Typo {
	if (!dictionary) {
		dictionary = new Typo('en_US', affixes, words);
	}
	return dictionary;
}

export function isWord(word: string): boolean {
	return getDictionary().check(word);
}

/**
 * Parses the dictionary ahead of the first guess that needs it.
 *
 * Every guess is a rearrangement of the same eight letters, so every wrong one
 * reaches the spell check -- and on a cold instance the first of them pays for
 * parsing 62k entries while the player waits. Called when a run starts, on a
 * macrotask so the parse lands after that response has gone out rather than in
 * front of it.
 */
export function warm(): void {
	if (dictionary) return;
	setTimeout(getDictionary, 0);
}
