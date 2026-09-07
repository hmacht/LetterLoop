/**
 * Request authentication.
 *
 * The browser sends a Firebase ID token as `Authorization: Bearer <token>`;
 * we verify its signature with the Admin SDK. A uid that arrives any other way
 * (request body, query string, cookie we did not sign) is just a string the
 * caller typed and must never be trusted.
 */
import { adminAuth } from '$lib/server/firebase.admin';
import { error } from '@sveltejs/kit';

export interface AuthUser {
	uid: string;
	email: string | null;
	/** Every visitor is signed in; most are anonymous. Anonymous users are
	 *  real enough to play, but not to appear on a leaderboard. */
	isAnonymous: boolean;
}

const BEARER = /^Bearer (.+)$/i;

/** Returns the verified caller, or null when there is no valid token. */
export async function authenticate(request: Request): Promise<AuthUser | null> {
	const match = BEARER.exec(request.headers.get('authorization') ?? '');
	if (!match) return null;

	try {
		const token = await adminAuth().verifyIdToken(match[1]);
		return {
			uid: token.uid,
			email: token.email ?? null,
			// `sign_in_provider` records how this session began, and it keeps saying
			// "anonymous" after a guest upgrades their account in place -- right up
			// until they next sign in. An email on the token means the upgrade
			// happened, so the caller is a real account whatever the claim says.
			isAnonymous: token.firebase?.sign_in_provider === 'anonymous' && !token.email
		};
	} catch {
		// Expired or forged token -- indistinguishable from being signed out.
		return null;
	}
}

/**
 * Throws 401 unless we can identify the caller at all.
 *
 * Anonymous counts: playing never requires an account. This failing means the
 * guest identity is missing or its token expired, not that the player needs to
 * log in -- so the message says so.
 */
export function requireUser(user: AuthUser | null): AuthUser {
	if (!user) throw error(401, 'We lost track of your session. Please refresh the page.');
	return user;
}

/** Throws 401/403 unless the caller holds a real, non-anonymous account. */
export function requireAccount(user: AuthUser | null): AuthUser {
	const authenticated = requireUser(user);
	if (authenticated.isAnonymous) {
		throw error(403, 'This action requires a registered account.');
	}
	return authenticated;
}
