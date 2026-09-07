<script lang="ts">
	/**
	 * Holding state for the content area.
	 *
	 * Shown while the page works out whether today's loop is already finished.
	 * Without it the menu paints first and is then replaced by the results page
	 * a moment later, which reads as a glitch.
	 *
	 * Sits inside the layout rather than over it, so the promo bar and nav stay
	 * put and only the area below them waits.
	 */
</script>

<div class="loading" role="status" aria-live="polite">
	<span class="visually-hidden">Loading</span>
</div>

<style>
	.loading {
		flex: 1 0 auto;
		width: 100%;
		min-height: 60vh;
		background-color: #ffe9e9;
	}
</style>
