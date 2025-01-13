export interface Profile {
  id: string;
  name: string;
  email: string;
  streak: number; // Number of consecutive days or achievements
  gamesPlayed: number; // Total number of games played
  averageTime: number; // Average time in seconds
  admin: boolean; // Whether the user is an admin
}