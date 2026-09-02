/** `typo-js` ships no type declarations of its own. */
declare module 'typo-js' {
	class Typo {
		constructor(
			dictionary?: string,
			affData?: string | null,
			wordsData?: string | null,
			settings?: { dictionaryPath?: string; platform?: string }
		);
		check(word: string): boolean;
		suggest(word: string, limit?: number): string[];
	}
	export = Typo;
}
