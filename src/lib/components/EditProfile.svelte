<script lang="ts">
	/**
	 * The two things a player owns about themselves: what they are called on the
	 * board, and which colour they wear there.
	 *
	 * Both save in one PATCH, so the modal closes on one round trip rather than
	 * saving the name and the colour separately.
	 */
	import { profileStore, setProfile } from '$lib/stores/profileStore';
	import { updateMyProfile } from '$lib/services/profileService';
	import { AVATAR_CHOICES } from '$lib/images/avatars';

	/** Called once the changes are saved, so the host can close the modal. */
	export let close: () => void = () => {};

	const profile = $profileStore;

	let name = profile?.name ?? '';
	let avatar = profile?.avatar ?? 1;
	let saving = false;
	let errorMessage = '';

	$: trimmed = name.trim();
	$: changed = !!profile && (trimmed !== profile.name || avatar !== profile.avatar);
	$: canSave = !saving && changed && trimmed.length > 0 && trimmed.length <= 24;

	async function save() {
		if (!canSave || !profile) return;

		saving = true;
		errorMessage = '';

		try {
			// Only what actually moved: sending an unchanged name would still cost
			// the server a write.
			setProfile(
				await updateMyProfile({
					...(trimmed === profile.name ? {} : { name: trimmed }),
					...(avatar === profile.avatar ? {} : { avatar })
				})
			);
			close();
		} catch (error) {
			errorMessage = error instanceof Error ? error.message : 'Could not save your changes.';
		} finally {
			saving = false;
		}
	}
</script>

{#if profile}
	<form on:submit|preventDefault={save}>
		<label class="field" for="display-name">Display Name</label>
		<input
			id="display-name"
			class="input"
			type="text"
			maxlength="24"
			autocomplete="off"
			bind:value={name}
			placeholder="Looper"
		/>
		<p class="hint">This is the name that appears on the leaderboard.</p>

		<p class="field">Avatar Color</p>
		<div class="swatches" role="radiogroup" aria-label="Avatar colour">
			{#each AVATAR_CHOICES as choice (choice.id)}
				<button
					type="button"
					class="swatch"
					class:selected={avatar === choice.id}
					role="radio"
					aria-checked={avatar === choice.id}
					aria-label={`Colour ${choice.id}`}
					on:click={() => (avatar = choice.id)}
				>
					<img src={choice.src} alt="" />
				</button>
			{/each}
		</div>

		{#if errorMessage}
			<p class="error">{errorMessage}</p>
		{/if}

		<button class="save" type="submit" disabled={!canSave}>
			{saving ? 'Saving...' : 'Save changes'}
		</button>
	</form>
{:else}
	<p class="hint">Your profile could not be loaded.</p>
{/if}

<style>
	.field {
		display: block;
		font-size: 11px;
		font-weight: 700;
		letter-spacing: 0.5px;
		text-transform: uppercase;
		color: #9a8386;
		margin: 0 0 7px 0;
	}

	.input {
		width: 100%;
		padding: 12px 14px;
		border: 1px solid #ddd;
		border-radius: 12px;
		background-color: white;
		font: inherit;
		font-size: 16px;
		color: black;
	}

	.input:focus {
		outline: none;
		border-color: #fc365a;
	}

	.hint {
		font-size: 13px;
		color: #8a7477;
		margin: 8px 0 1.5rem 0;
	}

	.swatches {
		display: flex;
		flex-wrap: wrap;
		gap: 10px;
	}

	/* The ring is always there, just transparent until picked -- colouring it in
	   must not resize the swatch. `padding` is the gap it stands off by. */
	.swatch {
		box-sizing: border-box;
		width: 54px;
		height: 54px;
		padding: 4px;
		border: 3px solid transparent;
		border-radius: 50%;
		background: none;
		cursor: pointer;
		line-height: 0;
	}

	.swatch img {
		width: 100%;
		height: 100%;
		border-radius: 50%;
		object-fit: cover;
		display: block;
	}

	/* A ring rather than a tick, so the colour itself stays readable. */
	.swatch.selected {
		border-color: #fc365a;
	}

	.error {
		font-size: 14px;
		color: #b3213b;
		margin: 1.1rem 0 0 0;
	}

	.save {
		display: block;
		width: 100%;
		margin-top: 1.75rem;
		padding: 14px 16px;
		border: none;
		border-radius: 999px;
		background-image: linear-gradient(to bottom, #ff4f87, #fc2f4f);
		color: white;
		font: inherit;
		font-size: 16px;
		font-weight: 600;
		cursor: pointer;
	}

	.save:disabled {
		background-image: none;
		background-color: #e8d5d8;
		color: #a9979a;
		cursor: default;
	}
</style>
