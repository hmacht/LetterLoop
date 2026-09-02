import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [vitePreprocess()],
	kit: {
		// Pinned to the Vercel adapter rather than adapter-auto: auto resolves the
		// adapter at build time (installing it mid-build) and pinned to a v4 that
		// cannot map a Node 24 build to a runtime.
		adapter: adapter({
			// firebase-admin requires Node >= 22, so the serverless functions must
			// run on 22 or newer. Stated explicitly so the deployed runtime never
			// silently follows whatever Node the build machine happens to use.
			runtime: 'nodejs24.x'
		})
	}
};

export default config;
