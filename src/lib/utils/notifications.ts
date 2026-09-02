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

	function send(message: string, type: NotificationType = 'default', timeout = DEFAULT_TIMEOUT) {
		queue.update((state) => [...state, { id: nextId(), type, message, timeout }]);
	}

	// Drops the head of the queue once its timeout expires.
	const notifications: Readable<Notification[]> = derived(queue, ($queue, set) => {
		set($queue);
		if ($queue.length === 0) return;

		const timer = setTimeout(() => {
			queue.update((state) => state.slice(1));
		}, $queue[0].timeout);

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
