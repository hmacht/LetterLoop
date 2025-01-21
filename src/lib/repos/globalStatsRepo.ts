import { realtimeDb } from '$lib/firebase.client';
import { ref, set, get } from "firebase/database";
import { today } from "$lib/utils/timeFormatter"
import type { GlobalStats } from '$lib/models/globalStats';

// @ts-ignore
export async function logTime(time) {
  const dbRef = ref(realtimeDb, "Stats/" + today());
  const currentStats = await getTodaysStats();

  if (!currentStats) {
    set(dbRef, {
      averageTime: time,
      minTime: time,
      count: 1
    });

    return {
      averageTime: time,
      minTime: time,
      count: 1,
      isUnderAverage: true,
      isHighScore: true
    }
  } else {
    const currAverageTime = currentStats.averageTime
    const currMinTime = currentStats.minTime
    const count = currentStats.count

    const newAverage = calculateNewAverage(currAverageTime, count, time)
    const newMin = minTime(time, currMinTime)
    const newCount = count + 1

    set(dbRef, {
      averageTime: newAverage,
      minTime: newMin,
      count: newCount
    });

    return {
      averageTime: currAverageTime,
      minTime: newMin,
      count: newCount,
      isUnderAverage: isRecord(time, currAverageTime),
      isHighScore: isRecord(time, currMinTime)
    }
  }
}

export async function getTodaysStats(): Promise<GlobalStats | null> {
  try {
    const dbRef = ref(realtimeDb, `Stats/${today()}`);
    const snapshot = await get(dbRef);

    if (snapshot.exists()) {
      return snapshot.val() as GlobalStats;
    } else {
      console.warn('No solutions found for today.');
      return null;
    }
  } catch (error) {
    console.error('Error fetching today\'s solutions:', error);
    return null;
  }
}

// Time calculation Functions

function convertTimeToSeconds(timeString) {
  const [hours, minutes, seconds] = timeString.split(':').map(Number);
  return hours * 3600 + minutes * 60 + seconds;
}

function convertSecondsToTime(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = Math.round(seconds % 60);
  return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
}

function calculateNewAverage(oldAvg, count, newTime) {
  const oldAvgSeconds = convertTimeToSeconds(oldAvg);
  const newTimeSeconds = convertTimeToSeconds(newTime);
  const newAvgSeconds = ((oldAvgSeconds * count) + newTimeSeconds) / (count + 1);
  return convertSecondsToTime(newAvgSeconds);
}

function minTime(time1, time2) {
  const time1Seconds = convertTimeToSeconds(time1);
  const time2Seconds = convertTimeToSeconds(time2);
  return time1Seconds < time2Seconds ? time1 : time2;
}

function isRecord(userTime, currentMinTime) {
  const time1Seconds = convertTimeToSeconds(userTime);
  const time2Seconds = convertTimeToSeconds(currentMinTime);

  return time1Seconds < time2Seconds;
}


