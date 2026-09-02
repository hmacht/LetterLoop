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
