<script lang="ts">
	import { hideNav } from '$lib/stores/layoutUIStore';

	import Footer from '$lib/components/Footer.svelte';
	import PromoBanner from '$lib/components/PromoBanner.svelte';
	import NavBar from '$lib/components/NavBar.svelte';
</script>

<!--
	Column shell so the footer sits at the bottom of the viewport on short pages
	and below the content on long ones, rather than floating mid-screen.
-->
<div class="app-shell">
	<PromoBanner />
	{#if !$hideNav}
		<NavBar />
	{/if}

	<div class="app-content">
		<slot />
	</div>

	<Footer />
</div>

<style>
	.app-shell {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	/* Takes the slack so the footer is pushed down, but never shrinks the
	   content on pages that are genuinely taller than the viewport. */
	.app-content {
		flex: 1 0 auto;
		display: flex;
		flex-direction: column;
	}

	.app-shell :global(footer) {
		flex-shrink: 0;
	}
</style>
