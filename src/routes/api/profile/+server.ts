import { json } from '@sveltejs/kit';
import * as profileService from '$lib/server/services/profileService';
import { requireAccount, requireUser } from '$lib/server/auth';
import { readJson, requireString } from '$lib/server/http';
import type { RequestHandler } from './$types';

/** The caller's own profile. Anonymous players simply have none. */
export const GET: RequestHandler = async ({ locals }) => {
	const user = requireUser(locals.user);
	return json(user.isAnonymous ? null : await profileService.get(user.uid));
};

/** Creates the profile that backs a newly registered account. */
export const POST: RequestHandler = async ({ locals, request }) => {
	const user = requireAccount(locals.user);
	const body = await readJson<{ name?: unknown }>(request);

	const existing = await profileService.get(user.uid);
	if (existing) return json(existing);

	return json(await profileService.create(user, requireString(body.name, 'name')));
};

/** Updates the fields a player owns: display name and avatar. */
export const PATCH: RequestHandler = async ({ locals, request }) => {
	const user = requireAccount(locals.user);
	const body = await readJson<{ name?: unknown; avatar?: unknown }>(request);

	return json(
		await profileService.edit(user.uid, {
			...(body.name !== undefined ? { name: requireString(body.name, 'name') } : {}),
			...(body.avatar !== undefined ? { avatar: Number(body.avatar) } : {})
		})
	);
};
