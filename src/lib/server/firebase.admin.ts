/**
 * Firebase Admin singletons.
 *
 * Anything under `$lib/server` is refused by SvelteKit if a client bundle ever
 * imports it, so these privileged handles cannot leak into the browser.
 *
 * Credentials, in order of preference:
 *   1. FIREBASE_SERVICE_ACCOUNT_JSON -- the whole service-account JSON as one
 *      env var. Use this on Vercel/Netlify or any host without ADC.
 *   2. Application Default Credentials -- automatic on Cloud Functions,
 *      Cloud Run and Firebase App Hosting, and locally via
 *      `gcloud auth application-default login`.
 */
import {
	getApps,
	initializeApp,
	cert,
	applicationDefault,
	type App,
	type ServiceAccount
} from 'firebase-admin/app';
import { getAuth, type Auth } from 'firebase-admin/auth';
import { getFirestore, type Firestore } from 'firebase-admin/firestore';
import { getDatabase, type Database } from 'firebase-admin/database';
import { error } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';
import { PUBLIC_FIREBASE_DATABASE_URL, PUBLIC_FIREBASE_PROJECT_ID } from '$env/static/public';

let cachedApp: App | undefined;

/** True when the Firebase emulator suite is in play. */
function usingEmulators(): boolean {
	return Boolean(
		env.FIRESTORE_EMULATOR_HOST ||
			env.FIREBASE_AUTH_EMULATOR_HOST ||
			env.FIREBASE_DATABASE_EMULATOR_HOST
	);
}

/** `cert()` accepts the key file verbatim, whose fields are snake_case. */
type ServiceAccountKey = ServiceAccount & { project_id?: string };

function serviceAccount(): ServiceAccountKey | null {
	const raw = env.FIREBASE_SERVICE_ACCOUNT_JSON;
	if (!raw) return null;

	try {
		return JSON.parse(raw);
	} catch {
		throw new Error(
			'FIREBASE_SERVICE_ACCOUNT_JSON is set but is not valid JSON. ' +
				'It must contain the entire service-account key file, on one line.'
		);
	}
}

function resolveCredential() {
	const account = serviceAccount();
	return account ? cert(account) : applicationDefault();
}

/**
 * The service-account key already names its project, and Cloud Run / Cloud
 * Functions inject GOOGLE_CLOUD_PROJECT, so an explicit project id is usually
 * redundant. Fall back to it only when nothing else knows.
 */
function resolveProjectId(): string {
	const account = serviceAccount();

	return (
		account?.project_id ??
		account?.projectId ??
		env.GOOGLE_CLOUD_PROJECT ??
		env.GCLOUD_PROJECT ??
		PUBLIC_FIREBASE_PROJECT_ID
	);
}

export function adminApp(): App {
	if (cachedApp) return cachedApp;

	const existing = getApps()[0];
	if (existing) {
		cachedApp = existing;
		return cachedApp;
	}

	cachedApp = initializeApp({
		// The emulators accept any caller, and demanding real credentials would
		// make local development require a service-account key.
		...(usingEmulators() ? {} : { credential: resolveCredential() }),
		projectId: resolveProjectId(),
		databaseURL: PUBLIC_FIREBASE_DATABASE_URL
	});

	return cachedApp;
}

export const adminAuth = (): Auth => getAuth(adminApp());
export const adminFirestore = (): Firestore => getFirestore(adminApp());
export const adminRealtimeDb = (): Database => getDatabase(adminApp());

/**
 * Credential preflight.
 *
 * Without this, missing Application Default Credentials surface as an
 * unhandled rejection inside the gRPC client's background work -- which does
 * not fail the request, it terminates the whole Node process. One misconfigured
 * developer machine takes the dev server down with a stack trace that names
 * google-gax and never mentions LetterLoop.
 *
 * Checking once, up front, turns that into an ordinary 503 with instructions.
 */
type CredentialState = 'unknown' | 'ok' | 'missing';

let credentialState: CredentialState = 'unknown';
let probe: Promise<void> | null = null;

export async function assertAdminCredentials(): Promise<void> {
	if (credentialState === 'unknown') {
		probe ??= probeCredentials();
		await probe;
	}

	if (credentialState === 'missing') throw missingCredentialsError();
}

/**
 * Hard ceiling on the credential check.
 *
 * With no service-account key, `applicationDefault()` falls back to probing the
 * GCP metadata server. On Google infrastructure that answers instantly; on
 * Vercel or Render the address is simply unreachable and the lookup can hang
 * far longer than the platform's function timeout -- which surfaces as an
 * opaque FUNCTION_INVOCATION_FAILED rather than a useful error.
 */
const CREDENTIAL_PROBE_TIMEOUT_MS = 5000;

async function probeCredentials(): Promise<void> {
	// The emulators accept any caller.
	if (usingEmulators()) {
		credentialState = 'ok';
		return;
	}

	try {
		const credential = adminApp().options.credential;
		if (!credential) throw new Error('No credential configured.');

		// Forces the token exchange that would otherwise fail asynchronously
		// somewhere deep inside the first Firestore call. Raced against a
		// deadline so a hanging metadata lookup cannot take the whole instance
		// down with it -- every later request awaits this same promise.
		await Promise.race([
			credential.getAccessToken(),
			new Promise((_, reject) =>
				setTimeout(
					() =>
						reject(
							new Error(
								`Credential check timed out after ${CREDENTIAL_PROBE_TIMEOUT_MS}ms. ` +
									'This usually means no service account is configured and the host ' +
									'has no metadata server to fall back to.'
							)
						),
					CREDENTIAL_PROBE_TIMEOUT_MS
				)
			)
		]);
		credentialState = 'ok';
	} catch (cause) {
		credentialState = 'missing';
		console.error(
			'\n=======================================================================\n' +
				'  LetterLoop server credentials are missing.\n\n' +
				'  The /api routes use the Firebase Admin SDK, which needs credentials\n' +
				'  separate from the PUBLIC_FIREBASE_* browser config.\n\n' +
				'  Pick one:\n\n' +
				'  1. Service account key (no extra tooling required)\n' +
				'     Firebase console -> Project settings -> Service accounts\n' +
				'     -> Generate new private key. Then add to .env, all on one line:\n' +
				'         FIREBASE_SERVICE_ACCOUNT_JSON={"type":"service_account",...}\n\n' +
				'  2. Application Default Credentials (requires the gcloud CLI)\n' +
				'         gcloud auth application-default login\n\n' +
				'  3. Emulators, no credentials at all (requires Java + firebase-tools)\n' +
				'         npm run emulators   then   npm run dev:local\n\n' +
				'  Restart the dev server afterwards -- .env is only read at startup.\n' +
				`  Underlying error: ${(cause as Error).message}\n` +
				'=======================================================================\n'
		);
	}
}

function missingCredentialsError() {
	return error(
		503,
		'The server is missing its Firebase credentials. See the terminal for how to fix it.'
	);
}
