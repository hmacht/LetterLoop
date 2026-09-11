/**
 * Work that should happen because of a request, but that the caller must not
 * wait for.
 *
 * On Vercel a function instance is frozen the moment it responds, so a promise
 * left running is a promise that may never finish -- unless it is handed to the
 * request context's `waitUntil`, which keeps the instance alive until it
 * settles. That is the same hook `@vercel/functions` exposes; reading it here
 * directly is three lines and keeps the fallback honest.
 *
 * Anywhere without that context -- `vite dev`, another host -- the work is
 * awaited instead. A leaderboard row is not worth losing to save a round trip.
 */
const REQUEST_CONTEXT = Symbol.for('@vercel/request-context');

type RequestContext = { waitUntil?: (promise: Promise<unknown>) => void };

/**
 * Settles `work` after the response where the platform supports it, otherwise
 * before it. Failures are logged rather than thrown: by the time this runs the
 * caller has usually already been told the request succeeded.
 */
export async function afterResponse(work: Promise<unknown>, description: string): Promise<void> {
	const tracked = work.catch((error) => {
		console.error(`${description} failed:`, error);
	});

	const defer = platformWaitUntil();
	if (defer) {
		defer(tracked);
		return;
	}

	await tracked;
}

function platformWaitUntil(): RequestContext['waitUntil'] {
	const holder = (globalThis as unknown as Record<symbol, { get?: () => RequestContext }>)[
		REQUEST_CONTEXT
	];

	return holder?.get?.()?.waitUntil;
}
