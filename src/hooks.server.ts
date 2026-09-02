import type { Handle } from '@sveltejs/kit';
import { authenticate } from '$lib/server/auth';
import { assertAdminCredentials } from '$lib/server/firebase.admin';

/**
 * Resolves the caller once per request and hangs it off `locals`, so route
 * handlers never re-verify the token themselves.
 */
export const handle: Handle = async ({ event, resolve }) => {
	// Chrome DevTools probes this on every page load; a 404 stack trace in the
	// terminal for it is pure noise.
	if (event.url.pathname === '/.well-known/appspecific/com.chrome.devtools.json') {
		return new Response(null, { status: 204 });
	}

	if (event.url.pathname.startsWith('/api/')) {
		// Fails fast and loudly rather than letting the Admin SDK take the whole
		// process down on its first background token refresh.
		await assertAdminCredentials();
		event.locals.user = await authenticate(event.request);
	} else {
		event.locals.user = null;
	}

	return resolve(event);
};
