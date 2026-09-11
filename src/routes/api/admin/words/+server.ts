import { json, error } from '@sveltejs/kit';
import * as loopService from '$lib/server/services/loopService';
import * as profileService from '$lib/server/services/profileService';
import { requireAccount } from '$lib/server/auth';
import type { RequestHandler } from './$types';

/**
 * Word suggestions for the loop generator.
 *   ?mode=primary&includeS=true
 *   ?mode=secondary&primary=music
 *   ?mode=usage&word=music
 */
export const GET: RequestHandler = async ({ locals, url }) => {
	await profileService.requireAdmin(requireAccount(locals.user));

	const mode = url.searchParams.get('mode') ?? 'primary';

	switch (mode) {
		case 'primary':
			return json({
				words: loopService.primaryOptions(
					Number(url.searchParams.get('count')) || 5,
					url.searchParams.get('includeS') === 'true'
				)
			});

		case 'secondary': {
			const primary = url.searchParams.get('primary');
			if (!primary) throw error(400, '`primary` is required.');
			return json({ words: loopService.secondaryOptions(primary) });
		}

		case 'usage': {
			const word = url.searchParams.get('word');
			if (!word) throw error(400, '`word` is required.');
			return json({ word, ...(await loopService.usage(word)) });
		}

		default:
			throw error(400, `Unknown mode "${mode}".`);
	}
};
