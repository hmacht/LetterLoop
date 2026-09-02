import { json } from '@sveltejs/kit';
import { adminAuth } from '$lib/server/firebase.admin';
import { rateLimit } from '$lib/server/rateLimit';
import { readJson, requireString } from '$lib/server/http';
import type { RequestHandler } from './$types';

/**
 * Does an account already exist for this email?
 *
 * This powers the single "Login or Create account" form, which needs to know
 * which fields to ask for next.
 *
 * NOTE: this is an email-enumeration endpoint by construction -- anyone can ask
 * whether a given address has a LetterLoop account. That is inherent to the
 * one-form flow, not an oversight. It is rate limited per IP to make bulk
 * probing tedious, and the answer reveals nothing beyond existence.
 */
const MAX_LOOKUPS = 10;
const WINDOW_MS = 60_000;

export const POST: RequestHandler = async ({ request, getClientAddress }) => {
	rateLimit(`check-email:${getClientAddress()}`, MAX_LOOKUPS, WINDOW_MS);

	const body = await readJson<{ email?: unknown }>(request);
	const email = requireString(body.email, 'email').trim().toLowerCase();

	try {
		await adminAuth().getUserByEmail(email);
		return json({ exists: true });
	} catch (err) {
		// `auth/user-not-found` is the expected answer for a new address.
		if ((err as { code?: string }).code === 'auth/user-not-found') {
			return json({ exists: false });
		}
		// A malformed address is not an error worth surfacing differently --
		// treat it as "no account", the form will validate it anyway.
		if ((err as { code?: string }).code === 'auth/invalid-email') {
			return json({ exists: false });
		}
		throw err;
	}
};
