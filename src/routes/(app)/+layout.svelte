<script lang="ts">
	import { hideNav } from '$lib/stores/layoutUIStore';

	import Footer from '$lib/components/Footer.svelte';
	import PromoBanner from '$lib/components/PromoBanner.svelte';
	import NavBar from '$lib/components/NavBar.svelte';
</script>

<main>
		<PromoBanner />
		{#if !$hideNav}
			<NavBar />
		{/if}
		<slot />
		<Footer />
	</main>
