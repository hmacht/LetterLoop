<script lang="ts">
	import { fly } from 'svelte/transition';
	import { notifications, type NotificationType } from '$lib/utils/notifications';

	/** Only `danger` carries an icon -- a tick on every "Incorrect" would be noise. */
	const ICONS: Partial<Record<NotificationType, string>> = {
		danger: 'fa-solid fa-circle-xmark',
		warning: 'fa-solid fa-triangle-exclamation',
		success: 'fa-solid fa-circle-check'
	};
</script>

<div class="notifications">
	{#each $notifications as notification (notification.id)}
		<div class="toast" transition:fly={{ y: 30 }}>
			{#if ICONS[notification.type]}
				<i class={`toast-icon ${notification.type} ${ICONS[notification.type]}`} aria-hidden="true"
				></i>
			{/if}
			<span class="content">{notification.message}</span>
		</div>
	{/each}
</div>

<style>
	.notifications {
		position: fixed;
		top: 130px;
		left: 0;
		right: 0;
		margin: 0 auto;
		padding: 0;
		z-index: 9999;
		display: flex;
		flex-direction: column;
		align-items: center;
		pointer-events: none;
	}

	.toast {
		display: flex;
		align-items: center;
		gap: 8px;
		flex: 0 0 auto;
		padding: 10px 14px;
		border-radius: 10px;
		background: #ebebeb;
	}

	.content {
		color: rgb(17, 17, 17);
		font-weight: 500;
	}

	.toast-icon {
		font-size: 14px;
		flex-shrink: 0;
	}

	.toast-icon.danger {
		color: #d92038;
	}

	.toast-icon.warning {
		color: #e09029;
	}

	.toast-icon.success {
		color: #2e9e5b;
	}
</style>
