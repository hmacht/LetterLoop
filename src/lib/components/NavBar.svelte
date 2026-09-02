<script lang="ts">
	import Modal from '$lib/components/Modal.svelte';
	import ProfileComponent from '$lib/components/Profile.svelte';

	import { profileStore } from '$lib/stores/profileStore';

	let showProfileModal = false;
	$: profile = $profileStore;
</script>

<nav>
	<div class="nav-flex-container-filled">
		<div class="title-container">
			<div>
				<a href="/" class="title nav-logo">LetterLoop</a>
			</div>
		</div>
		<div class="spacer"></div>
		<a class="help-container" href="https://www.reddit.com/r/letterloop/" target="_blank">
			<i class="fa-brands fa-reddit"></i>
			<p class="how-to-play">Comments</p>
		</a>

		{#if profile}
			<button class="help-container nav-action" on:click={() => (showProfileModal = true)}>
				<i class="fa-regular fa-user"></i>
				<p class="how-to-play">Profile</p>
			</button>
		{/if}
	</div>
	<div class="divider"></div>
</nav>

<Modal
	bind:showModal={showProfileModal}
	modalType="profile"
	title="Your Profile"
	subtitle="Your streak, average time and games played."
>
	<ProfileComponent />
</Modal>

<style>
	/*
	  The Profile control used `.menu-btn no-fill`, which is scoped to
	  Menu.svelte -- so in the nav it resolved to nothing and rendered as a raw
	  browser button containing a block <p>, breaking the alignment of the whole
	  bar. It now shares `.help-container` with the Comments link and only needs
	  the button element reset.
	*/
	.nav-action {
		background: none;
		border: none;
		font: inherit;
		cursor: pointer;
		gap: 4px;
	}

	.nav-action p {
		margin: 0;
	}
</style>
