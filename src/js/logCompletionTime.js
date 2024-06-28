import { getDatabase, ref, push, set } from "firebase/database";
import { fetchTodaysStats } from './firebaseFetchData.js';
import { today } from "./timeFormatter"

// @ts-ignore
export async function logTime(time) {
  const db = getDatabase();
  const dbRef = ref(db, "Stats/" + today());
  const currentStats = await fetchTodaysStats();

  if (currentStats === "NOREF") {
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


