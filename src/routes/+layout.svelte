<script lang="ts">
	import '../app.css';
	import './styles.css';
	import '@fortawesome/fontawesome-free/css/all.min.css';

	import { onMount } from 'svelte';
	import { session } from '$lib/session';
	import { hideNav } from '$lib/stores/layoutUIStore';
	import { anonymousSignIn } from '$lib/repos/authRepo';
	import type { LayoutData } from './$types';

	import Footer from '$lib/components/Footer.svelte';
	import PromoBanner from '$lib/components/PromoBanner.svelte';
	import NavBar from '$lib/components/NavBar.svelte';

	export let data: LayoutData;

	const user = data.user;
	const loggedIn = !!user && !user.isAnonymous;

	session.update((cur: any) => ({
		...cur,
		user,
		loggedIn,
		loading: false
	}));

	onMount(() => {
		if (!loggedIn) {
			anonymousSignIn();
		}
	});
</script>

<div class="app">
	<main>
		<PromoBanner />
		{#if !$hideNav}
			<NavBar />
		{/if}
		<slot />
		<Footer />
	</main>
</div>
