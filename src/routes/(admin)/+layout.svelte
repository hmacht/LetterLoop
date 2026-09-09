<script lang="ts">
	/**
	 * Admin shell: the gate, and the column everything sits in.
	 *
	 * The portal is a single page now, so there is no navigation to hold -- this
	 * only decides whether you are allowed to see it.
	 */
	import { profileStore, profileLoading } from '$lib/stores/profileStore';
	import { formatDayKey, todayKey } from '$lib/utils/gameDate';

	// The same mark the menu uses, so the portal is plainly the same product.
	import logo from '$lib/images/logo.png';
	import loadingLogo from '$lib/images/loading_logo.svg';

	$: profile = $profileStore;
	$: loading = $profileLoading;
</script>

<div class="admin">
	<a class="mark" href="/" aria-label="LetterLoop home">
		<img src={logo} alt="" />
	</a>

	<p class="stamp">{formatDayKey(todayKey())}</p>

	{#if loading}
		<p class="gate">Checking your credentials...</p>
	{:else if profile && profile.admin}
		<div class="column">
			<slot />

			<footer class="sign-off">
				<a class="home" href="/">&larr; Back to the game</a>
				<img class="wordmark" src={loadingLogo} alt="" />
			</footer>
		</div>
	{:else}
		<div class="gate">
			<p class="denied">401 &mdash; Permission Denied</p>
			<a class="home" href="/">&larr; Back to the game</a>
		</div>
	{/if}
</div>

<style>
	.admin {
		position: relative;
		min-height: 100vh;
		width: 100%;
		background-color: #ffe9e9;
		display: flex;
		justify-content: center;
	}

	/* Corner of the page rather than the column, so it reads as the product mark
	   and not as part of the portal's own header. */
	.mark {
		position: absolute;
		top: 18px;
		left: 18px;
	}

	.mark img {
		width: 32px;
		height: 32px;
		object-fit: contain;
		display: block;
	}

	/* Balances the mark in the opposite corner. Quiet on purpose -- it is a date
	   stamp, not a heading. */
	.stamp {
		position: absolute;
		top: 22px;
		right: 18px;
		font-size: 12px;
		color: #c7a4aa;
		margin: 0;
	}

	.column {
		width: 90%;
		max-width: 560px;
		padding: 9rem 0 4rem 0;
	}

	.gate {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 14px;
		min-height: 60vh;
		font-size: 15px;
		color: #8a7477;
	}

	.denied {
		font-family: 'Playfair Display', serif;
		font-size: 24px;
		font-weight: 700;
		color: #fc365a;
		margin: 0;
	}

	.home {
		display: inline-block;
		margin-top: 0.5rem;
		font-size: 14px;
		font-weight: 600;
		color: #b0868c;
		text-decoration: underline;
	}

	/* Closes the column the way the game closes its pages: a link out, then the
	   wordmark sitting under it. */
	.sign-off {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top: 3rem;
	}

	.wordmark {
		width: 38%;
		max-width: 130px;
		height: auto;
		margin-top: 1.5rem;
		opacity: 0.55;
		display: block;
	}
</style>
