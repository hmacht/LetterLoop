import { json } from '@sveltejs/kit';
import * as leaderboardService from '$lib/server/services/leaderboardService';
import { dayKeyFrom } from '$lib/server/http';
import type { RequestHandler } from './$types';

/**
 * The day's fastest times, plus the caller's own placing and neighbours.
 * Readable signed out -- you just won't have a row of your own.
 */
export const GET: RequestHandler = async ({ locals, url }) => {
	return json(await leaderboardService.forDay(locals.user, dayKeyFrom(url)));
};
