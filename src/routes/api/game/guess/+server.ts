import { json } from '@sveltejs/kit';
import * as gameService from '$lib/server/services/gameService';
import { requireUser } from '$lib/server/auth';
import { dayKeyFrom, readJson, requireString } from '$lib/server/http';
import type { RequestHandler } from './$types';

/** Checks an answer. Correct guesses end the run and return the full result. */
export const POST: RequestHandler = async ({ locals, request, url }) => {
	const user = requireUser(locals.user);
	const body = await readJson<{ guess?: unknown }>(request);
	const guess = requireString(body.guess, 'guess');

	return json(await gameService.submitGuess(user, guess, dayKeyFrom(url)));
};
