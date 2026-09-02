import { browser } from '$app/environment';
import { onAuthStateChanged, signInAnonymously, type User } from 'firebase/auth';
import { initializeFirebase, auth } from '$lib/firebase.client';
import { isConfigurationError } from '$lib/services/authErrors';

/**
 * Resolves an identity before any page renders.
 *
 * Every visitor needs a uid, signed in or not, because the game clock lives on
 * the server and runs are keyed by uid. Doing this here (rather than in an
 * `onMount`) means components can assume `auth.currentUser` is already set and
 * never have to race the sign-in.
 */
export async function load({ url }) {
	if (!browser) {
		return { user: null, loggedIn: false, url: url.pathname };
	}

	initializeFirebase();

	let user = await firstAuthState();

	if (!user) {
		try {
			user = (await signInAnonymously(auth)).user;
		} catch (error) {
			// A misconfigured project reports itself once, with the fix. Anything
			// else is transient and the API client will retry on the first 401.
			if (!isConfigurationError(error)) {
				console.error('Anonymous sign-in failed:', error);
			}
		}
	}

	return {
		user: user ? { uid: user.uid, email: user.email, displayName: user.displayName } : null,
		loggedIn: !!user && !user.isAnonymous,
		url: url.pathname
	};
}

function firstAuthState(): Promise<User | null> {
	return new Promise((resolve) => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			unsubscribe();
			resolve(user);
		});
	});
}
