import { json } from '@sveltejs/kit';
import * as gameService from '$lib/server/services/gameService';
import { requireUser } from '$lib/server/auth';
import { dayKeyFrom } from '$lib/server/http';
import type { RequestHandler } from './$types';

/** Current run state, or null if this player has not started today. */
export const GET: RequestHandler = async ({ locals, url }) => {
	const user = requireUser(locals.user);
	return json(await gameService.getState(user, dayKeyFrom(url)));
};
