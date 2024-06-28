<script>
	import './styles.css';
	import '@fortawesome/fontawesome-free/css/all.min.css'		

	// This is for Vercel analytics. Currently Using GA4
	// import { dev } from '$app/environment';
	// import { inject } from '@vercel/analytics';
	// import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';
	// inject({ mode: dev ? 'development' : 'production' });
	// injectSpeedInsights();
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
