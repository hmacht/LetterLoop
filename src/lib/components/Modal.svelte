<script lang="ts">
	import Toast from '$lib/components/Toast.svelte';

	export let showModal: boolean;
	export let title = '';
	export let subtitle = '';
	/** Hides the close affordance for modals that must be dismissed deliberately. */
	export let hide_close = false;
	/** Surfaced as `data-modal-type` so styles can target a specific dialog. */
	export let modalType = '';

	let dialog: HTMLDialogElement;

	$: if (dialog) {
		if (showModal) {
			dialog.showModal();
		} else {
			dialog.close();
		}
	}

	/**
	 * `<dialog>` closes itself on Escape. For a modal that must be dismissed
	 * deliberately -- the pause screen, where the clock is stopped and the board
	 * is meant to be hidden -- that would hand the player a peek for free.
	 */
	function handleCancel(event: Event) {
		if (hide_close) event.preventDefault();
	}
</script>

<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-noninteractive-element-interactions -->
<dialog
	bind:this={dialog}
	data-modal-type={modalType}
	on:close={() => (showModal = false)}
	on:cancel={handleCancel}
	on:click|self={() => !hide_close && dialog.close()}
>
	<!-- svelte-ignore a11y-no-static-element-interactions a11y-click-events-have-key-events -->
	<div class="modal-card" on:click|stopPropagation>
		<Toast />

		{#if title || !hide_close}
			<div class="modal-header">
				<div class="modal-heading">
					{#if title}
						<h2 class="modal-title">{title}</h2>
					{/if}
					{#if subtitle}
						<p class="modal-subtitle">{subtitle}</p>
					{/if}
				</div>

				{#if !hide_close}
					<button class="modal-close" on:click={() => dialog.close()} aria-label="Close">
						<i class="fa-solid fa-xmark"></i>
					</button>
				{/if}
			</div>
		{/if}

		<slot />
	</div>
</dialog>

<style>
	/* The dialog itself is just a positioning box -- the visible surface is the
	   card inside, matching the panels on the results page. */
	dialog {
		max-width: 32em;
		min-width: 18em;
		width: 85%;
		border: none;
		padding: 0;
		background: transparent;
		overflow: visible;
	}

	.modal-card {
		border: 1px solid #d7d7d7;
		background-color: #fffbfb;
		border-radius: 30px;
		padding: 25px;
	}

	.modal-header {
		display: flex;
		align-items: flex-start;
		gap: 12px;
		margin-bottom: 1rem;
	}

	.modal-heading {
		flex: 1;
		min-width: 0;
	}

	.modal-title {
		font-family: 'Playfair Display', serif;
		font-size: 24px;
		font-weight: 500;
		color: black;
		margin: 0;
		line-height: 1.2;
	}

	.modal-subtitle {
		font-size: 13px;
		color: #777;
		margin: 6px 0 0 0;
		line-height: 1.4;
	}

	.modal-close {
		background: none;
		border: none;
		cursor: pointer;
		font-size: 20px;
		color: #999;
		padding: 0;
		line-height: 1;
		flex-shrink: 0;
	}

	.modal-close:hover {
		color: #333;
	}

	dialog::backdrop {
		background: rgba(0, 0, 0, 0.3);
	}

	/* Pausing stops the clock, so the board must not be readable while it is
	   stopped -- an opaque backdrop blanks the whole viewport. */
	dialog[data-modal-type='pause']::backdrop {
		background: #ffffff;
	}

	dialog[open] {
		animation: zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
	}

	@keyframes zoom {
		from {
			transform: scale(0.95);
		}
		to {
			transform: scale(1);
		}
	}

	dialog[open]::backdrop {
		animation: fade 0.2s ease-out;
	}

	@keyframes fade {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
</style>
