<script lang="ts">
	import '../app.css';
	import './styles.css';
	import '@fortawesome/fontawesome-free/css/all.min.css';

	import { session } from '$lib/session';
	import type { LayoutData } from './$types';

	export let data: LayoutData;

	// Sign-in already resolved in +layout.ts, so this is never in a loading state.
	$: session.set({ user: data.user, loggedIn: data.loggedIn, loading: false });
</script>

<div class="app">
	<main>
		<slot />
	</main>
</div>
