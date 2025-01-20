import { today, yesterday } from "./timeFormatter"
import { getCurrentUserProfile, updateProfile } from "$lib/repos/profileRepo";
import type { Profile } from "$lib/models/profile";

export async function updateUserStats(time: string, gaveUp: boolean) {
  const profile = await getCurrentUserProfile();
  const timeSec: number = timeToSeconds(time)

  if (profile != null) {
    var updatedProfile: Profile;

    if (gaveUp) {
      updatedProfile = {
        id: profile.id,
        name: profile.name,
        email: profile.email,
        streak: 0,
        gamesPlayed: profile.gamesPlayed,
        averageTime: profile.averageTime,
        admin: profile.admin,
        lastPlayedDate: profile.lastPlayedDate
      };
    } else {
      const updatedGamesPlayed: number = profile.gamesPlayed + 1;
      updatedProfile = {
        id: profile.id,
        name: profile.name,
        email: profile.email,
        streak: calculateStreak(profile.lastPlayedDate, profile.gamesPlayed),
        gamesPlayed:updatedGamesPlayed,
        averageTime: calculateAverageTime(profile.averageTime, timeSec, updatedGamesPlayed),
        admin: profile.admin,
        lastPlayedDate: today()
      };
    }

    updateProfile(updatedProfile);
  }
}

// Private Helpers

function timeToSeconds(time: string) {
  const [hours, minutes, seconds] = time.split(':').map(Number);
  return hours * 3600 + minutes * 60 + seconds;
}

function calculateStreak(lastPlayedDate: string | null, currentStreak: number): number {
  if (!lastPlayedDate || lastPlayedDate !== yesterday()) {
    return 1;
  }
  return currentStreak + 1;
}

function calculateAverageTime(currentAverage: number, newTime: number, gamesPlayed: number) {
  return ((currentAverage * (gamesPlayed - 1)) + newTime) / gamesPlayed;
}
