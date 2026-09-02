// See https://kit.svelte.dev/docs/types#app
import type { AuthUser } from '$lib/server/auth';

declare global {
	namespace App {
		interface Locals {
			/** Verified caller for /api requests; null when signed out. */
			user: AuthUser | null;
		}
		// interface Error {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}

	/** adinplay ad tag, loaded from app.html. */
	interface Window {
		aiptag?: {
			cmd: {
				display: Array<() => void>;
			};
		};
		aipDisplayTag?: {
			display: (slotId: string) => void;
		};
	}
}

export {};
