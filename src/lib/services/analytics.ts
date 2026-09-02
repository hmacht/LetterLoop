/**
 * PostHog: standard web analytics, error tracking, and a short list of
 * deliberate product events.
 *
 * Web tracking runs on PostHog's defaults -- pageviews, sessions, referrers,
 * device and autocapture. Two things are deliberately off: session replay
 * (not wanted) and surveys (a UI feature, not tracking, and we don't want one
 * appearing over the game unannounced).
 *
 * Custom events are limited to the `Event` map below.
 */
import posthog from 'posthog-js';
import { browser } from '$app/environment';
import { PUBLIC_POSTHOG_PROJECT_TOKEN, PUBLIC_POSTHOG_HOST } from '$env/static/public';

/** The complete set of events this app sends. */
export const Event = {
	SignedIn: 'signed_in',
	GameStarted: 'game_started',
	GaveUp: 'gave_up',
	ShareClicked: 'share_clicked'
} as const;

export type EventName = (typeof Event)[keyof typeof Event];

let started = false;

export function initAnalytics(): void {
	if (!browser || started) return;

	// Missing config is not an error -- local dev and previews simply run without
	// analytics rather than throwing or spamming a dead endpoint.
	if (!PUBLIC_POSTHOG_PROJECT_TOKEN) return;

	posthog.init(PUBLIC_POSTHOG_PROJECT_TOKEN, {
		api_host: PUBLIC_POSTHOG_HOST,

		capture_exceptions: true,

		// The app is a single page, so a load-time-only pageview would record one
		// hit per session. 'history_change' also fires on client-side navigation.
		capture_pageview: 'history_change',

		disable_session_recording: true,
		disable_surveys: true,

		// Only create a person profile once someone actually signs in; guests are
		// still tracked, they just don't consume a profile.
		person_profiles: 'identified_only'

		// Everything else -- autocapture, pageleave, heatmaps, web vitals,
		// referrers, device data -- is left on PostHog's defaults.
	});

	started = true;
}

export function track(event: EventName, properties?: Record<string, unknown>): void {
	if (!browser || !started) return;
	posthog.capture(event, properties);
}

/** Ties later events and errors to a known account. */
export function identifyUser(uid: string, properties?: Record<string, unknown>): void {
	if (!browser || !started) return;
	posthog.identify(uid, properties);
}

/** Clears the identity on sign-out so the next session is not attributed to them. */
export function resetAnalytics(): void {
	if (!browser || !started) return;
	posthog.reset();
}
