import { redirect } from '@sveltejs/kit';

/** Login and signup were merged into a single /auth form. */
export function load() {
	redirect(308, '/auth');
}
