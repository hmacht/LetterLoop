import { today, yesterday } from "./timeFormatter"

export function getUserStats() {
  return JSON.parse(localStorage.getItem('userStats'));
}

export function updateUserStats(time, gaveUp) {
  let userStats = getUserStats();
  time = timeToSeconds(time)

  if (!userStats) {
    initStats(time);
  } else if (gaveUp) {
    resetStreak();
  } else {
    userStats.streak = calculateStreak(userStats)
    userStats.games_played += 1;
    userStats.average_time = calculateAverageTime(userStats.average_time, time, userStats.games_played);
    userStats.last_played_date = today();
    localStorage.setItem('userStats', JSON.stringify(userStats));
  }
}

// PRIVATE

function timeToSeconds(time) {
  const [hours, minutes, seconds] = time.split(':').map(Number);
  return hours * 3600 + minutes * 60 + seconds;
}

function calculateStreak(userStats) {
  let played_yesterday = userStats.last_played_date === yesterday();

  if (played_yesterday) {
    return userStats.streak + 1;
  } else {
    return 1;
  }
}

function calculateAverageTime(current_average, new_time, games_played) {
  return ((current_average * (games_played - 1)) + new_time) / games_played;
}

function resetStreak() {
  let userStats = getUserStats();
  userStats.streak = 0;
  localStorage.setItem('userStats', JSON.stringify(userStats));
}

function initStats(time) {
  localStorage.setItem('userStats', JSON.stringify({ 
    streak: 1, 
    average_time: time,
    games_played: 1,
    last_played_date: today()
  }));
}
