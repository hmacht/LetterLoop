<script lang="ts">
	import { LogOut, Pen, WandSparkles } from 'lucide-svelte';

	import Modal from '$lib/components/Modal.svelte';
	import EditProfile from '$lib/components/EditProfile.svelte';

	import { profileStore, profileLoading } from '$lib/stores/profileStore';
	import { signOutUser } from '$lib/services/authService';
	import { formatDuration } from '$lib/utils/time';
	import { calculateEmoji } from '$lib/utils/emojiStreak';
	import { avatarSrc } from '$lib/images/avatars';

	let showEdit = false;

	$: profile = $profileStore;
	$: loading = $profileLoading;
	$: streakEmoji = profile ? calculateEmoji(profile.streak) : '';

	async function handleSignOut() {
		try {
			await signOutUser();
			window.location.href = '/';
		} catch (error) {
			console.error('Sign out failed:', error);
		}
	}
</script>

<div>
	{#if loading}
		<p>Loading your profile...</p>
	{:else if profile}
		<div class="identity">
			<img class="current-avatar" src={avatarSrc(profile.avatar)} alt="" />
			<div class="identity-text">
				<p class="display-name">{profile.name}</p>
				{#if profile.email}
					<p class="email">{profile.email}</p>
				{/if}
			</div>

			<button
				class="edit-profile"
				on:click={() => (showEdit = true)}
				aria-label="Edit your display name and colour"
				title="Edit your display name and colour"
			>
				<Pen size={19} aria-hidden="true" />
			</button>
		</div>

		<div class="stat-grid">
			<div class="stat">
				<p class="stat-value">{formatDuration(profile.averageTime)}</p>
				<p class="stat-label">Average Time</p>
			</div>
			<div class="stat">
				<p class="stat-value">{streakEmoji} {profile.streak}</p>
				<p class="stat-label">Streak</p>
			</div>
			<div class="stat">
				<p class="stat-value">{profile.gamesPlayed}</p>
				<p class="stat-label">Played</p>
			</div>
		</div>

		<div class="account-actions">
			<button class="link-button sign-out" on:click={handleSignOut}>
				<LogOut size={14} aria-hidden="true" />
				Sign Out
			</button>
			{#if profile.admin}
				<a class="link-button" href="/admin">
					<WandSparkles size={14} aria-hidden="true" />
					Admin Portal
				</a>
			{/if}
		</div>
	{:else}
		<p class="error">Error loading profile</p>
	{/if}
</div>

<Modal
	bind:showModal={showEdit}
	modalType="edit-profile"
	title="Edit your profile"
	subtitle="How you appear on the leaderboard."
>
	<EditProfile close={() => (showEdit = false)} />
</Modal>

<style>
	.identity {
		display: flex;
		align-items: center;
		gap: 14px;
	}

	.edit-profile {
		flex-shrink: 0;
		margin-left: auto;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 34px;
		height: 34px;
		padding: 0;
		border: none;
		border-radius: 50%;
		background: none;
		cursor: pointer;
		color: #b09a9d;
		font-size: 15px;
	}

	.edit-profile:hover {
		color: #fc365a;
	}

	.current-avatar {
		width: 56px;
		height: 56px;
		border-radius: 50%;
		object-fit: cover;
		border: 2px solid #f0dcdc;
		flex-shrink: 0;
	}

	.identity-text {
		min-width: 0;
	}

	.display-name {
		font-family: 'Playfair Display', serif;
		font-size: 20px;
		font-weight: 600;
		margin: 0;
		line-height: 1.2;
	}

	.email {
		font-size: 13px;
		color: #888;
		margin: 2px 0 0 0;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	/* Account controls live at the foot of the card: they are the least-used
	   thing here and were crowding the name. */
	.account-actions {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 12px;
		margin-top: 1.25rem;
		padding-top: 0.9rem;
		border-top: 1px solid #eee;
		font-size: 14px;
	}

	.account-actions a,
	.link-button {
		color: #888;
		background: none;
		border: none;
		padding: 0;
		font: inherit;
		cursor: pointer;
		text-decoration: none;
	}

	.sign-out {
		display: inline-flex;
		align-items: center;
		gap: 6px;
		color: #d92038;
	}

	/* Matches the sign-out control opposite it, so the row reads as a pair. */
	.account-actions a.link-button {
		display: inline-flex;
		align-items: center;
		gap: 6px;
	}

	.account-actions a:hover,
	.link-button:hover {
		text-decoration: underline;
	}

	.stat-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 10px;
		margin-top: 1.25rem;
	}

	.stat {
		background-color: #fefafa;
		border: 1px solid #e6dede;
		border-radius: 16px;
		padding: 12px 6px;
		text-align: center;
	}

	.stat-value {
		font-size: 18px;
		font-weight: 700;
		margin: 0;
	}

	.stat-label {
		font-size: 10px;
		color: #888;
		text-transform: uppercase;
		letter-spacing: 0.5px;
		font-weight: 600;
		margin: 2px 0 0 0;
	}

	.error {
		color: #d33;
	}
</style>
