<script lang="ts">
	import { onMount } from 'svelte';

	import Profile from '$lib/components/Profile.svelte';
	import Modal from '$lib/components/Modal.svelte';
	import Help from '$lib/components/Help.svelte';
	import Toast from '$lib/components/Toast.svelte';
	import PromotionLink from '$lib/components/PromotionLink.svelte';

	import { session } from '$lib/session';
	import { loopNumber, todayKey, formatDayKey } from '$lib/utils/gameDate';
	import { preloadTodaysPuzzle } from '$lib/services/puzzleService';
	import { Event, track } from '$lib/services/analytics';

	import logo_src from '$lib/images/logo.png';

	export let showGameBoard;

	let showHelpModal = false;
	let showProfileModal = false;
	let today = formatDayKey(todayKey());
	let puzzleNumber = loopNumber();
	// Reactive rather than read once on mount, so signing out updates the button
	// without a reload. Undefined during SSR -> renders the placeholder, so a
	// signed-in player never sees "Login" flash before it corrects itself.
	$: loggedIn = $session?.loggedIn ?? false;
	$: loadingUser = $session?.loading ?? true;

	onMount(() => {
		loadAd();

		// Fetch the puzzle while the player is still on the menu, so pressing Play
		// paints the board immediately. This does NOT start the clock -- that only
		// happens on /api/game/start, when Play is actually pressed.
		preloadTodaysPuzzle();
	});

	function loadAd() {
		// The ad script is third-party and is routinely blocked; never let it
		// take the menu down with it.
		window.aiptag?.cmd.display.push(() => {
			window.aipDisplayTag?.display('theletterloop-com_300x50');
		});
	}

	function startButtonClick() {
		track(Event.GameStarted);
		showGameBoard = true;
		hideKofiButton();
	}

	function hideKofiButton() {
		document
			.querySelectorAll<HTMLElement>('[id^="kofi-widget-overlay-"]')
			.forEach((widget) => (widget.style.display = 'none'));
	}
</script>

<main>
	<div class="page">
		<div class="content">
			<Toast />

			<div id="theletterloop-com_300x50">
				<!-- JS Ad Injection -->
			</div>

			<img
				class="mx-auto my-5 h-12 w-12 object-contain"
				src={logo_src}
				alt="Our Little Loop Logo"
			/>

			<p class="menu-header">LetterLoop</p>
			<p class="menu-sub-header">Two 5-letter words, two shared letters, one loop</p>

			<div><button class="menu-btn" on:click={startButtonClick}>Play</button></div>

			<div>
				{#if loadingUser}
					<button class="menu-btn no-fill" disabled>&nbsp;</button>
				{:else if loggedIn}
					<button class="menu-btn no-fill" on:click={() => (showProfileModal = true)}>
						Profile
					</button>
				{:else}
					<a class="menu-btn no-fill" href="/auth">Login</a>
				{/if}
			</div>

			<div>
				<button class="menu-btn no-fill" on:click={() => (showHelpModal = true)}>How To Play</button
				>
			</div>

			<div class="details-container">
				<p class="menu-date">{today}</p>
				<p class="menu-number">Loop #{puzzleNumber}</p>
				<i class="menu-small-text">For the love of morning games</i>
			</div>

			<PromotionLink />

			<p class="version-tag">version 2.0</p>
		</div>
	</div>
</main>

<Modal
	bind:showModal={showHelpModal}
	modalType="help"
	title="How To Play"
	subtitle="Two 5-letter words, two shared letters, one loop."
>
	<Help />
</Modal>

<Modal
	bind:showModal={showProfileModal}
	modalType="profile"
	title="Your Profile"
	subtitle="Your streak, average time and games played."
>
	<Profile />
</Modal>

<style>
	main {
		background-color: #ffe9e9 !important;
	}

	.page {
		display: flex;
		flex-direction: column; /* Stack items vertically */
		justify-content: center;
		align-items: center;
		margin: 0;
		width: 100%;
		background-color: #ffe9e9;
		height: min-content;
	}

	.content {
		text-align: center;
		padding: 20px;
		color: #d8cfd2;
	}

	.menu-header {
		font-size: 28px;
		margin: 3px;
		color: black;
		font-weight: 500;
		font-family: 'Playfair Display', serif;
	}

	.menu-sub-header {
		font-size: 18px;
		margin: 3px;
		color: black;
		margin-bottom: 2rem;
		padding-left: 15px;
		padding-right: 15px;
	}

	.menu-small-text {
		font-size: 12px;
		margin: 3px;
		color: black;
	}

	.menu-date {
		font-size: 15px;
		color: black;
		font-weight: 800;
		margin-bottom: 0;
	}

	.menu-number {
		font-size: 15px;
		margin: 0px;
		color: black;
		margin-bottom: 5px;
	}

	.details-container {
		margin-top: 2rem;
		margin-bottom: 2rem;
	}

	/* `Login` is an anchor so it behaves like a link; these keep it visually
     identical to the sibling buttons. */
	a.menu-btn {
		display: flex;
		align-items: center;
		justify-content: center;
		text-decoration: none;
	}

	.menu-btn:disabled {
		opacity: 0;
		cursor: default;
	}

	.menu-btn {
		padding: 10px 20px;
		font-size: 16px;
		background-image: -webkit-linear-gradient(top, #ff4f87, #fc2f4f);
		background-image: linear-gradient(to bottom, #ff4f87, #fc2f4f);
		border-radius: 50px;
		color: #fff;
		border: none;
		cursor: pointer;
		width: 150px;
		height: 50px;
		margin: 0 auto 10px auto;
	}

	.no-fill {
		background-image: none !important;
		background-color: transparent;
		color: #fc2f4f !important;
		border: 1px solid #fc2f4f;
	}

	.version-tag {
		font-size: 9px;
		color: black;
	}
</style>
