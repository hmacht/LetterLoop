// +layout.ts
import { initializeFirebase, auth } from '$lib/firebase.client';
import { browser } from '$app/environment';
import { onAuthStateChanged, type User } from 'firebase/auth';

export async function load({ url }) {
	if (browser) {
		try {
			initializeFirebase();
		} catch (ex) {
			console.error(ex);
		}

		// Wait for auth user here
		const user = await new Promise<User | null>((resolve) => {
			onAuthStateChanged(auth, (user) => resolve(user));
		});

		return {
			user,
			url: url.pathname
		};
	}

	// For server
	return {
		user: null,
		url: url.pathname
	};
}
