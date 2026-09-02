import { api } from '$lib/services/apiClient';
import type { GlobalStats } from '$lib/models/globalStats';

export function getTodaysStats(): Promise<GlobalStats> {
	return api.get<GlobalStats>('/api/stats/today');
}
