<script lang="ts">
	import { fly } from 'svelte/transition';
	import { backOut, cubicIn } from 'svelte/easing';
	import { CircleCheck, CircleX, TriangleAlert, type Icon } from 'lucide-svelte';
	import { notifications, type NotificationType } from '$lib/utils/notifications';

	/** Only `danger` carries an icon -- a tick on every "Incorrect" would be noise. */
	const ICONS: Partial<Record<NotificationType, typeof Icon>> = {
		danger: CircleX,
		warning: TriangleAlert,
		success: CircleCheck
	};
</script>

<div class="notifications">
	{#each $notifications as notification (notification.id)}
		<!-- Drops in from above the strip and leaves the same way, both quick
		     enough to keep up with someone hammering Enter. -->
		<div
			class="toast"
			in:fly={{ y: -26, duration: 170, easing: backOut }}
			out:fly={{ y: -14, duration: 110, easing: cubicIn }}
		>
			{#if ICONS[notification.type]}
				<svelte:component
					this={ICONS[notification.type]}
					class={`toast-icon ${notification.type}`}
					size={17}
					aria-hidden="true"
				/>
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
		border: 1px solid #dcdcdc;
		border-radius: 10px;
		background: white;
	}

	.content {
		color: rgb(17, 17, 17);
		font-weight: 500;
	}

	/* The icon is a component, so its class lands on an element this file does
	   not own -- scoped selectors would never match it. */
	.toast :global(.toast-icon) {
		flex-shrink: 0;
	}

	.toast :global(.toast-icon.danger) {
		color: #d92038;
	}

	.toast :global(.toast-icon.warning) {
		color: #e09029;
	}

	.toast :global(.toast-icon.success) {
		color: #2e9e5b;
	}
</style>
