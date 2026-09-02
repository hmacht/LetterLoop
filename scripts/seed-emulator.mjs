/**
 * Seeds the Firebase emulators with a week of puzzles so the game is playable
 * locally. Safe to re-run: it overwrites the same day keys.
 *
 *   npm run seed
 *
 * Refuses to run unless the emulator host variables are set, so it can never
 * be pointed at production by accident.
 */
import { initializeApp } from 'firebase-admin/app';
import { getDatabase } from 'firebase-admin/database';

const PROJECT_ID = process.env.PUBLIC_FIREBASE_PROJECT_ID ?? 'circlepuzzlegame-1738d';
const GAME_TIMEZONE = 'America/New_York';

if (!process.env.FIREBASE_DATABASE_EMULATOR_HOST) {
	console.error(
		'Refusing to seed: FIREBASE_DATABASE_EMULATOR_HOST is not set.\n' +
			'Start the emulators first (npm run emulators), then run this in another shell.'
	);
	process.exit(1);
}

// MUSIC + CHARM -> "musichar": first word, then the middle of the second.
const LOOPS = [
	['music', 'charm'],
	['crane', 'ethic'],
	['plume', 'equip'],
	['table', 'exalt'],
	['cheat', 'toxic'],
	['drama', 'avoid'],
	['petal', 'letup']
];

const keyFormatter = new Intl.DateTimeFormat('en-US', {
	timeZone: GAME_TIMEZONE,
	year: 'numeric',
	month: '2-digit',
	day: '2-digit'
});

const dayKey = (instant) => keyFormatter.format(instant).replace(/\//g, '-');
const formatLoop = (primary, secondary) => primary + secondary.slice(1, -1);

const app = initializeApp({
	projectId: PROJECT_ID,
	databaseURL: `http://${process.env.FIREBASE_DATABASE_EMULATOR_HOST}?ns=${PROJECT_ID}-default-rtdb`
});

const db = getDatabase(app);
const today = new Date();

for (const [offset, [primary, secondary]] of LOOPS.entries()) {
	const day = new Date(today);
	day.setDate(day.getDate() + offset);

	const key = dayKey(day);
	const solution = formatLoop(primary, secondary);

	await db.ref(`solutions/${key}`).set({
		author: 'Seed Script',
		date: day.toISOString(),
		solution,
		solutions: [solution],
		primary,
		secondary
	});

	console.log(`  ${key}  ${primary} + ${secondary}  ->  ${solution}`);
}

console.log(`\nSeeded ${LOOPS.length} puzzles starting ${dayKey(today)}.`);
process.exit(0);
