import { json } from '@sveltejs/kit';
import * as leaderboardService from '$lib/server/services/leaderboardService';
import type { RequestHandler } from './$types';

/** Top loopers by games played, plus the caller's own standing. */
export const GET: RequestHandler = async ({ locals, url }) => {
	const count = Math.min(Number(url.searchParams.get('count')) || 10, 50);
	return json(await leaderboardService.allTime(locals.user, count));
};
