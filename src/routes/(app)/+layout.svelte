<script lang="ts">
	import PromoBanner from '$lib/components/PromoBanner.svelte';
</script>

<!-- Column shell so short pages still fill the viewport. -->
<div class="app-shell">
	<PromoBanner />

	<div class="app-content">
		<slot />
	</div>
</div>

<style>
	.app-shell {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	.app-content {
		flex: 1 0 auto;
		display: flex;
		flex-direction: column;
	}
</style>
