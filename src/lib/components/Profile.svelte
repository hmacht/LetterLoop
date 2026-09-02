<script lang="ts">
	import { profileStore, profileLoading, setProfile } from '$lib/stores/profileStore';
	import { signOutUser } from '$lib/services/authService';
	import { setMyAvatar } from '$lib/services/profileService';
	import { formatDuration } from '$lib/utils/time';
	import { calculateEmoji } from '$lib/utils/emojiStreak';
	import { AVATAR_CHOICES, avatarSrc } from '$lib/images/avatars';
	import { notifications } from '$lib/utils/notifications';

	$: profile = $profileStore;
	$: loading = $profileLoading;
	$: streakEmoji = profile ? calculateEmoji(profile.streak) : '';

	/** Applied immediately so the choice feels instant, rolled back on failure. */
	let saving = false;

	async function chooseAvatar(avatar: number) {
		if (!profile || saving || profile.avatar === avatar) return;

		const previous = profile;
		saving = true;
		setProfile({ ...previous, avatar });

		try {
			setProfile(await setMyAvatar(avatar));
		} catch (error) {
			setProfile(previous);
			notifications.default(
				error instanceof Error ? error.message : 'Could not save your avatar',
				2000
			);
		} finally {
			saving = false;
		}
	}

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
		</div>

		<p class="small-header avatar-heading">Choose your avatar</p>
		<div class="avatar-grid" role="radiogroup" aria-label="Choose your avatar">
			{#each AVATAR_CHOICES as choice (choice.id)}
				<button
					class="avatar-option"
					class:selected={profile.avatar === choice.id}
					role="radio"
					aria-checked={profile.avatar === choice.id}
					aria-label={`Avatar ${choice.id}`}
					disabled={saving}
					on:click={() => chooseAvatar(choice.id)}
				>
					<img src={choice.src} alt="" />
				</button>
			{/each}
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
				<i class="fa-solid fa-arrow-right-from-bracket" aria-hidden="true"></i>
				Sign Out
			</button>
			{#if profile.admin}
				<a href="/admin/loops">Admin Portal</a>
			{/if}
		</div>
	{:else}
		<p class="error">Error loading profile</p>
	{/if}
</div>

<style>
	.identity {
		display: flex;
		align-items: center;
		gap: 14px;
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

	.account-actions a:hover,
	.link-button:hover {
		text-decoration: underline;
	}

	.avatar-heading {
		margin: 1.25rem 0 0.6rem 0;
		color: #888;
	}

	.avatar-grid {
		display: grid;
		grid-template-columns: repeat(6, 1fr);
		gap: 8px;
	}

	.avatar-option {
		padding: 0;
		border: 2px solid transparent;
		border-radius: 50%;
		background: none;
		cursor: pointer;
		line-height: 0;
		transition: border-color 0.15s ease-in-out;
	}

	.avatar-option img {
		width: 100%;
		aspect-ratio: 1;
		border-radius: 50%;
		object-fit: cover;
		display: block;
	}

	.avatar-option:hover:not(:disabled) {
		border-color: #f6a7b8;
	}

	.avatar-option.selected {
		border-color: #fc2f4f;
	}

	.avatar-option:disabled {
		cursor: default;
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
