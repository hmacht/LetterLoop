import { json } from '@sveltejs/kit';
import * as statsService from '$lib/server/services/statsService';
import { dayKeyFrom } from '$lib/server/http';
import type { RequestHandler } from './$types';

/** Aggregate stats for the day. Read-only and public. */
export const GET: RequestHandler = async ({ url, setHeaders }) => {
	setHeaders({ 'cache-control': 'public, max-age=30' });
	return json(await statsService.getForDay(dayKeyFrom(url)));
};
