import Typo from 'typo-js';

let cachedWords: string[] = [];
let dictionary = new Typo("en_US", null, null, { dictionaryPath: "/dictionaries" });

// Get options for first word
// 
// count: the number of words to present
// showSWords: S words are words that start or end with an S
// S words make for bad solutions, so we give admin users the option to filter out
export async function getPrimaryOptions(count: number = 5, showSWords: boolean = false): Promise<string[]> {
  const words = await fetchWordList();
  const randomWords: string[] = [];

  var wordsChosenCount = 0

  while (wordsChosenCount < 5) {
    const randomIndex = Math.floor(Math.random() * words.length);
    let word = words[randomIndex];
    let validSWord = showSWords || (!word.endsWith('s') && !word.startsWith('s'));

    if (validSWord && dictionary.check(word)) {
      randomWords.push(words[randomIndex].trim())
      wordsChosenCount++;
    }
  }

  return randomWords;
}

// Get valid second words based on the primer word
// 
// primer: the first word selected
//
// A secondary word must have these properties:
//    - First letter must equal last letter of primary
//    - Last letter mmust equal first letter of primary
export async function getSecondaryOptions(primer: string): Promise<string[]> {
  const words = await fetchWordList();
  const validWords: string[] = [];
  const primerLower = primer.toLowerCase().trim();
  const primerFirst = primerLower[0];
  const primerLast = primerLower[primerLower.length - 1];

  for (const word of words) {
    const wordLower = word.toLowerCase().trim();
    
    // Skip the primer word itself
    if (wordLower === primerLower) {
      continue;
    }

    if (wordLower[0] === primerLast && 
        wordLower[wordLower.length - 1] === primerFirst &&
        dictionary.check(wordLower)
    ) {
      validWords.push(word);
    }
  }

  return validWords;
}

// Validates a loop
//
// Words must:
// 1. Be valid dictionary words (not all word list are accurate)
// 2. word1's first letter must be word2's last letter
// 3. Word1's last letter must be word2's first letter
// 4. Must have valid length
export async function validLoop(word1: string, word2: string, length: number = 5): Promise<boolean> {
  return word1.length === length &&
         word2.length === length &&
         dictionary.check(word1) && 
         dictionary.check(word2) &&
         word1[0] === word2[length - 1] && 
         word1[length - 1] ===  word2[0];
}

// Formats loop for database
//
// EX: music & charm = musichar
// idk its just how I did it.
export function formatLoop(word1: string, word2: string): string {
  return word1 + word2.slice(1, -1);
}

// Formats loop for database
//
// EX: musichar = music & charm
export function parseLoop(loop: string, length: number = 5): [string, string] {
  const firstWord = loop.slice(0, length);
  const secondWord = loop.slice(length - 1) + firstWord[0];
  
  return [firstWord, secondWord];
}


// Private function to fetch word list
async function fetchWordList(): Promise<string[]> {
  try {
    if (cachedWords.length === 0) {
      const response = await fetch('/wordlists/prime.txt');
      const text = await response.text();
      cachedWords = text.split('\n').filter(word => word.trim() !== '');
    }
    return cachedWords;
  } catch (error) {
    console.error('Error fetching words:', error);
    return [];
  }
}