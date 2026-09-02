import { json } from '@sveltejs/kit';
import * as loopService from '$lib/server/services/loopService';
import * as profileService from '$lib/server/services/profileService';
import { requireAccount } from '$lib/server/auth';
import { readJson, requireString } from '$lib/server/http';
import { parseLoop } from '$lib/utils/loop';
import type { RequestHandler } from './$types';

/** The scheduled puzzle queue. Admin only -- these rows contain answers. */
export const GET: RequestHandler = async ({ locals }) => {
	await profileService.requireAdmin(requireAccount(locals.user));

	const loops = await loopService.upcoming();
	return json(
		loops.map((loop) => {
			const [primary, secondary] = parseLoop(loop.solution);
			return {
				dayKey: loop.dayKey,
				date: loop.date,
				author: loop.author,
				primary: loop.primary || primary,
				secondary: loop.secondary || secondary
			};
		})
	);
};

/** Appends a loop to the end of the schedule. */
export const POST: RequestHandler = async ({ locals, request }) => {
	const user = requireAccount(locals.user);
	const profile = await profileService.requireAdmin(user);
	const body = await readJson<{ primary?: unknown; secondary?: unknown }>(request);

	const created = await loopService.scheduleNext(
		requireString(body.primary, 'primary'),
		requireString(body.secondary, 'secondary'),
		profile.name
	);

	return json(created, { status: 201 });
};
