/**
 * Tells apart "this browser session went stale" from "this app is misconfigured".
 *
 * They surface identically -- sign-in throws and every API call 401s -- but the
 * remedies could not be more different. Retrying a stale session works; retrying
 * a bad API key just produces the same failure again, and telling the player to
 * refresh sends them in circles while the real problem sits in `.env`.
 */

/** Auth failures no amount of retrying will fix. */
const CONFIGURATION_ERRORS: Record<string, string> = {
	'auth/api-key-not-valid.-please-pass-a-valid-api-key.':
		'PUBLIC_FIREBASE_API_KEY in your .env is missing or wrong. Copy the real values from ' +
		'Firebase console -> Project settings -> Your apps -> SDK setup and config.',
	'auth/api-key-not-valid':
		'PUBLIC_FIREBASE_API_KEY in your .env is missing or wrong. Copy the real values from ' +
		'Firebase console -> Project settings -> Your apps -> SDK setup and config.',
	'auth/invalid-api-key':
		'PUBLIC_FIREBASE_API_KEY in your .env is missing or wrong. Copy the real values from ' +
		'Firebase console -> Project settings -> Your apps -> SDK setup and config.',
	'auth/operation-not-allowed':
		'Anonymous sign-in is disabled for this Firebase project. Enable it under ' +
		'Firebase console -> Authentication -> Sign-in method -> Anonymous.',
	'auth/unauthorized-domain':
		'This domain is not authorised for Firebase Auth. Add it under ' +
		'Firebase console -> Authentication -> Settings -> Authorized domains.',
	'auth/configuration-not-found':
		'Firebase Authentication has not been set up for this project yet. Enable it in the ' +
		'Firebase console.'
};

export function configurationProblem(error: unknown): string | null {
	const code = (error as { code?: string })?.code;
	return (code && CONFIGURATION_ERRORS[code]) ?? null;
}

/**
 * Logs a misconfiguration once, loudly and with the fix, instead of letting it
 * surface as a cascade of anonymous 401s.
 */
let reported = false;

export function reportConfigurationProblem(explanation: string): void {
	if (reported) return;
	reported = true;

	console.error(
		`%cLetterLoop is not configured.%c\n\n${explanation}\n\n` +
			'Until this is fixed, the game cannot start. See README.md ("Getting set up").',
		'font-weight:bold;font-size:13px',
		'font-weight:normal'
	);
}

/** True when the failure is environmental rather than a stale session. */
export function isConfigurationError(error: unknown): boolean {
	const explanation = configurationProblem(error);
	if (!explanation) return false;

	reportConfigurationProblem(explanation);
	return true;
}
