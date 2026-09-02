import { json } from '@sveltejs/kit';
import * as puzzleService from '$lib/server/services/puzzleService';
import { dayKeyFrom } from '$lib/server/http';
import type { RequestHandler } from './$types';

/** The day's puzzle, minus the answer. Public: no sign-in required to look. */
export const GET: RequestHandler = async ({ url, setHeaders }) => {
	const puzzle = await puzzleService.getPublicPuzzle(dayKeyFrom(url));

	// Identical for every player all day, so it is safe to cache briefly.
	setHeaders({ 'cache-control': 'public, max-age=60' });

	return json(puzzle);
};
