import { api } from '$lib/services/apiClient';
import type { AllTimeBoard, DailyLeaderboard } from '$lib/models/leaderboard';

/** Today's fastest times, with the caller's placing and neighbours. */
export function today(): Promise<DailyLeaderboard> {
	return api.get<DailyLeaderboard>('/api/leaderboard/today');
}

/** All-time board, ranked by games played. */
export function allTime(count = 10): Promise<AllTimeBoard> {
	return api.get<AllTimeBoard>(`/api/leaderboard/all-time?count=${count}`);
}
