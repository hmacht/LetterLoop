export interface Profile {
  id: string;
  name: string;
  email: string;
  streak: number;
  gamesPlayed: number;
  averageTime: number;
  admin: boolean;
}