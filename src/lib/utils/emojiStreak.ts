export function calculateEmoji(streak: number): string {
  const conditions = [
    { threshold: 500, emoji: "🦄🦄🦄" },
    { threshold: 400, emoji: "🦄🦄" },
    { threshold: 365, emoji: "🦄" },
    { threshold: 300, emoji: "🍄🍄" },
    { threshold: 250, emoji: "🍄" },
    { threshold: 200, emoji: "🦔" },
    { threshold: 150, emoji: "🌌" },
    { threshold: 100, emoji: "🍾🍾" },
    { threshold: 90, emoji: "❤️‍🔥" },
    { threshold: 80, emoji: "💖" },
    { threshold: 70, emoji: "🤩" },
    { threshold: 60, emoji: "⭐️⭐️" },
    { threshold: 50, emoji: "⭐️" },
    { threshold: 40, emoji: "🕺" },
    { threshold: 30, emoji: "🌈🌈🌈" },
    { threshold: 25, emoji: "🌈🌈" },
    { threshold: 20, emoji: "🌈" },
    { threshold: 15, emoji: "👑" },
    { threshold: 14, emoji: "🦾" },
    { threshold: 10, emoji: "💪" },
    { threshold: 7, emoji: "🔥🔥" },
    { threshold: 5, emoji: "🔥" },
    { threshold: 3, emoji: "😸" },
    { threshold: 1, emoji: "🤗" },
  ];

  for (const condition of conditions) {
    if (streak >= condition.threshold) {
      return condition.emoji;
    }
  }

  // Sad day when streak is 0
  return "🥺";
}