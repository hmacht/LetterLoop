/**
 * The browser's single door to the server.
 *
 * Every call carries the caller's Firebase ID token, which the server verifies
 * before trusting the uid. Nothing else in the client talks to `/api` directly.
 *
 * Playing does NOT require an account. Every visitor is signed in anonymously,
 * which gives them a uid so their run can be timed server-side -- but they never
 * see a login screen and never create a profile. Only stats, streaks and the
 * leaderboard need a real account.
 */
import { signInAnonymously } from 'firebase/auth';
import { auth } from '$lib/firebase.client';
import { isConfigurationError } from '$lib/services/authErrors';

export class ApiError extends Error {
	constructor(
		readonly status: number,
		message: string
	) {
		super(message);
		this.name = 'ApiError';
	}
}

async function headers(hasBody: boolean): Promise<Record<string, string>> {
	const result: Record<string, string> = {};
	if (hasBody) result['content-type'] = 'application/json';

	const user = auth?.currentUser;
	if (user) {
		try {
			result.authorization = `Bearer ${await user.getIdToken()}`;
		} catch {
			// Token refresh failed -- let the request go out unauthenticated and
			// take the 401, which triggers the guest recovery below.
		}
	}

	return result;
}

async function send(method: string, path: string, body?: unknown): Promise<Response> {
	return fetch(path, {
		method,
		headers: await headers(body !== undefined),
		body: body === undefined ? undefined : JSON.stringify(body)
	});
}

async function request<T>(method: string, path: string, body?: unknown): Promise<T> {
	let response = await send(method, path, body);

	// A 401 here almost never means "please log in" -- the player never asked to
	// be signed in. It means the anonymous identity is missing or its token
	// expired. Re-establish it once and retry before bothering the user.
	if (response.status === 401 && (await recoverGuestSession())) {
		response = await send(method, path, body);
	}

	if (!response.ok) {
		if (response.status === 401 && configurationBroken) {
			throw new ApiError(
				response.status,
				'The game is not configured correctly. See the browser console for details.'
			);
		}
		throw new ApiError(response.status, await errorMessage(response));
	}

	return response.status === 204 ? (undefined as T) : ((await response.json()) as T);
}

/** Set once we know the failure is environmental, so we stop retrying. */
let configurationBroken = false;

async function recoverGuestSession(): Promise<boolean> {
	if (!auth || configurationBroken) return false;

	try {
		if (auth.currentUser) {
			// Force a fresh token in case the cached one had simply expired.
			await auth.currentUser.getIdToken(true);
		} else {
			await signInAnonymously(auth);
		}
		return true;
	} catch (error) {
		// A bad API key or disabled provider fails identically every time --
		// retrying just multiplies the noise in the console.
		if (isConfigurationError(error)) {
			configurationBroken = true;
		} else {
			console.error('Could not establish a guest session:', error);
		}
		return false;
	}
}

async function errorMessage(response: Response): Promise<string> {
	try {
		const body = await response.json();
		if (body && typeof body.message === 'string') return body.message;
	} catch {
		// Non-JSON error body (proxy timeout, HTML error page).
	}
	return `Request failed with status ${response.status}.`;
}

export const api = {
	get: <T>(path: string) => request<T>('GET', path),
	post: <T>(path: string, body?: unknown) => request<T>('POST', path, body ?? {}),
	patch: <T>(path: string, body: unknown) => request<T>('PATCH', path, body)
};
