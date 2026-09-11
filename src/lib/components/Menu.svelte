<script lang="ts">
	import { onMount } from 'svelte';

	import Button from '$lib/components/ui/Button.svelte';
	import Profile from '$lib/components/Profile.svelte';
	import Modal from '$lib/components/Modal.svelte';
	import Help from '$lib/components/Help.svelte';
	import Toast from '$lib/components/Toast.svelte';
	import PromotionLink from '$lib/components/PromotionLink.svelte';
	import SocialLinks from '$lib/components/SocialLinks.svelte';

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

			<p class="menu-the">The</p>
			<p class="menu-header">LetterLoop</p>
			<p class="menu-sub-header">Two 5-letter words, two shared letters, one loop</p>

			<div><Button class="menu-btn" on:click={startButtonClick}>Play</Button></div>

			<div>
				{#if loadingUser}
					<Button class="menu-btn" variant="ghost" disabled>&nbsp;</Button>
				{:else if loggedIn}
					<Button class="menu-btn" variant="ghost" on:click={() => (showProfileModal = true)}>
						Profile
					</Button>
				{:else}
					<Button class="menu-btn" variant="ghost" href="/auth">Login</Button>
				{/if}
			</div>

			<div>
				<Button class="menu-btn" variant="ghost" on:click={() => (showHelpModal = true)}>
					How To Play
				</Button>
			</div>

			<div class="details-container">
				<p class="menu-date">{today}</p>
				<p class="menu-number">Loop #{puzzleNumber}</p>
				<i class="menu-small-text">For the love of morning games</i>
				<SocialLinks />
			</div>

			<PromotionLink />
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

	/* Sits on the title rather than above it as its own line: same serif, small
	   and italic, so the two read as one wordmark. */
	.menu-the {
		font-family: 'Playfair Display', serif;
		font-style: italic;
		font-weight: 500;
		font-size: 17px;
		color: var(--ink);
		margin: 0 0 -6px 0;
	}

	.menu-header {
		font-size: 28px;
		margin: 3px;
		color: var(--ink);
		font-weight: 500;
		font-family: 'Playfair Display', serif;
	}

	.menu-sub-header {
		font-size: 18px;
		margin: 3px;
		color: var(--ink);
		margin-bottom: 2rem;
		padding-left: 15px;
		padding-right: 15px;
	}

	.menu-small-text {
		font-size: 12px;
		margin: 3px;
		color: var(--ink);
	}

	.menu-date {
		font-size: 15px;
		color: var(--ink);
		font-weight: 800;
		margin-bottom: 0;
	}

	.menu-number {
		font-size: 15px;
		margin: 0px;
		color: var(--ink);
		margin-bottom: 5px;
	}

	.details-container {
		margin-top: 2rem;
		margin-bottom: 2rem;
	}

	/* Layout only -- the look comes from the shared button. The menu's buttons
	   are a fixed stack, all the same size. */
	:global(.menu-btn) {
		width: 150px;
		height: 50px;
		padding: 0;
		margin: 0 auto 14px auto;
	}

	/* Holds the row's height while we work out whether anyone is signed in. */
	:global(.menu-btn:disabled) {
		opacity: 0;
		box-shadow: none;
	}
</style>
