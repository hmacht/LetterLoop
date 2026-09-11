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
	import loadingLogo from '$lib/images/loading_logo.svg';

	/** The board sits on the app's own background rather than the pink pages. */
	export let plain = false;
</script>

<div class="loading" class:plain role="status" aria-live="polite">
	<img class="mark" src={loadingLogo} alt="" />
	<span class="visually-hidden">Loading</span>
</div>

<style>
	.loading {
		flex: 1 0 auto;
		width: 100%;
		min-height: 60vh;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: #ffe9e9;
	}

	.loading.plain {
		background-color: transparent;
	}

	/* Breathes rather than spins: the mark is a wordmark, so rotation would read
	   as broken. Sized off the viewport so it holds the middle of the page on a
	   phone without dominating a desktop window. */
	.mark {
		width: 40%;
		max-width: 165px;
		height: auto;
		display: block;
		animation: breathe 1.6s ease-in-out infinite;
	}

	@keyframes breathe {
		0%,
		100% {
			opacity: 0.45;
			transform: scale(0.97);
		}
		50% {
			opacity: 1;
			transform: scale(1);
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.mark {
			animation: none;
			opacity: 0.8;
		}
	}
</style>
