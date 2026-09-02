import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [vitePreprocess()],
	kit: {
		// Pinned rather than adapter-auto, which resolves (and installs) the
		// adapter mid-build and pinned a v4 that cannot target Node 22/24.
		adapter: adapter({
			// firebase-admin requires Node >= 22 at runtime, not just at build.
			runtime: 'nodejs24.x'
		})
	}
};

export default config;
