import { writable, derived, type Readable } from 'svelte/store';

export type NotificationType = 'default' | 'danger' | 'warning' | 'info' | 'success';

export interface Notification {
	id: string;
	type: NotificationType;
	message: string;
	timeout: number;
}

const DEFAULT_TIMEOUT = 3000;

function createNotificationStore() {
	const queue = writable<Notification[]>([]);

	/**
	 * Shows a message, replacing whatever was on screen.
	 *
	 * Deliberately not a queue: mashing Enter on a wrong answer used to pile up
	 * a column of identical toasts. One at a time, newest wins.
	 */
	function send(message: string, type: NotificationType = 'default', timeout = DEFAULT_TIMEOUT) {
		queue.set([{ id: nextId(), type, message, timeout }]);
	}

	// Drops the head of the queue once its timeout expires.
	const notifications: Readable<Notification[]> = derived(queue, ($queue, set) => {
		set($queue);
		if ($queue.length === 0) return;

		const shown = $queue[0];
		const timer = setTimeout(() => {
			// Only clear if it is still the same toast -- a newer one resets the clock.
			queue.update((state) => (state[0]?.id === shown.id ? [] : state));
		}, shown.timeout);

		return () => clearTimeout(timer);
	});

	const byType = (type: NotificationType) => (message: string, timeout?: number) =>
		send(message, type, timeout);

	return {
		subscribe: notifications.subscribe,
		send,
		default: byType('default'),
		danger: byType('danger'),
		warning: byType('warning'),
		info: byType('info'),
		success: byType('success')
	};
}

function nextId(): string {
	return '_' + Math.random().toString(36).slice(2, 11);
}

export const notifications = createNotificationStore();
