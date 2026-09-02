/**
 * Firebase in the browser -- Auth only.
 *
 * The client's single job is to hold an identity and mint ID tokens. All data
 * access goes through `/api`, so Firestore and the Realtime Database are
 * deliberately not initialised here: the browser holds no database handle it
 * could be talked into misusing, and the SDK stays out of the bundle.
 */
import { initializeApp, getApps, type FirebaseApp } from 'firebase/app';
import { getAuth, connectAuthEmulator, type Auth } from 'firebase/auth';
import { browser } from '$app/environment';
import { reportConfigurationProblem } from '$lib/services/authErrors';
import {
	PUBLIC_FIREBASE_API_KEY,
	PUBLIC_FIREBASE_AUTH_DOMAIN,
	PUBLIC_FIREBASE_PROJECT_ID
} from '$env/static/public';

export let app: FirebaseApp;
export let auth: Auth;

// Auth is the only Firebase product the browser initialises, so this is the
// whole config it needs. `storageBucket`, `messagingSenderId` and `appId`
// configure Storage, Cloud Messaging and Analytics -- none of which we load.
const firebaseConfig = {
	apiKey: PUBLIC_FIREBASE_API_KEY,
	authDomain: PUBLIC_FIREBASE_AUTH_DOMAIN,
	projectId: PUBLIC_FIREBASE_PROJECT_ID
};

/**
 * Catches an unfilled `.env` before the first network call.
 *
 * Without this, a placeholder API key surfaces as `auth/api-key-not-valid`
 * followed by a cascade of 401s -- which reads like a session bug rather than
 * the two-minute fix it actually is.
 */
function checkConfiguration(): void {
	const missing = Object.entries(firebaseConfig)
		.filter(([, value]) => !value || /^(your-|placeholder)/i.test(String(value)))
		.map(([key]) => key);

	if (missing.length === 0) return;

	reportConfigurationProblem(
		`These Firebase settings are still placeholders: ${missing.join(', ')}.\n` +
			'Fill in the PUBLIC_FIREBASE_* values in .env from ' +
			'Firebase console -> Project settings -> Your apps -> SDK setup and config, ' +
			'then restart the dev server (Vite only reads .env at startup).'
	);
}

export const initializeFirebase = (): void => {
	if (!browser) {
		throw new Error("Can't use the Firebase client on the server.");
	}
	if (app) return;

	checkConfiguration();

	app = getApps()[0] ?? initializeApp(firebaseConfig);
	auth = getAuth(app);

	// Set VITE_FIREBASE_EMULATORS=true to point local dev at the emulator suite
	// instead of the production project.
	if (import.meta.env.VITE_FIREBASE_EMULATORS === 'true') {
		connectAuthEmulator(auth, 'http://127.0.0.1:9099', { disableWarnings: true });
	}
};
