/** Admin-only calls. The server re-checks the admin flag on every one. */
import { api } from '$lib/services/apiClient';

export interface ScheduledLoop {
	dayKey: string;
	date: string;
	author: string;
	primary: string;
	secondary: string;
}

export function upcomingLoops(): Promise<ScheduledLoop[]> {
	return api.get<ScheduledLoop[]>('/api/admin/loops');
}

export function scheduleLoop(primary: string, secondary: string): Promise<ScheduledLoop> {
	return api.post<ScheduledLoop>('/api/admin/loops', { primary, secondary });
}

export async function primaryOptions(count = 5, includeSWords = false): Promise<string[]> {
	const { words } = await api.get<{ words: string[] }>(
		`/api/admin/words?mode=primary&count=${count}&includeS=${includeSWords}`
	);
	return words;
}

export async function secondaryOptions(primary: string): Promise<string[]> {
	const { words } = await api.get<{ words: string[] }>(
		`/api/admin/words?mode=secondary&primary=${encodeURIComponent(primary)}`
	);
	return words;
}

export async function wordUsage(word: string): Promise<number> {
	const { count } = await api.get<{ count: number }>(
		`/api/admin/words?mode=usage&word=${encodeURIComponent(word)}`
	);
	return count;
}
