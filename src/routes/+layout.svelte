<script lang="ts">
	import './styles.css';
	import '@fortawesome/fontawesome-free/css/all.min.css'		

	import { onMount } from 'svelte';
	import { session } from '$lib/session';
	import { anonymousSignIn } from '$lib/repos/authRepo';
	import { goto } from '$app/navigation';
	import type { LayoutData } from './$types';

	export let data: LayoutData;

	onMount(async () => {
		const user: any = await data.getAuthUser();
		const loggedIn = !!user && !user.isAnonymous;

		session.update((cur: any) => {
			return {
				...cur,
				user,
				loggedIn,
				loading: false
			};
		});
 
		if (!loggedIn) {
			anonymousSignIn();
		}
	});
 </script>

<div class="app">
	<main>
		<slot />
	</main>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 0rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
