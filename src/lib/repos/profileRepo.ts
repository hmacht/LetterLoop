import { db } from '$lib/firebase.client';
import { doc, setDoc, getDoc, serverTimestamp, updateDoc, collection } from 'firebase/firestore';
import { get } from 'svelte/store';
import { today, yesterday } from "$lib/utils/timeFormatter"

import type { Profile } from '$lib/models/profile';
import type { GameData } from '$lib/models/gameData';
import { profileStore, refreshProfileStore } from '$lib/stores/profileStore';
import { session } from '$lib/session';

export async function createProfile(profile: Profile): Promise<void> {
  try {
    const ref = doc(db, 'profiles', profile.id);
    const data = {
      ...profile,
      createdAt: serverTimestamp(),
    };
    await setDoc(ref, data);
  } catch (error) {
    console.error('Error creating profile:', error);
    throw new Error('Could not create profile');
  }
}

export async function updateProfile(profile: Profile): Promise<void> {
  try {
    const ref = doc(db, 'profiles', profile.id);
    
    const docSnap = await getDoc(ref);
    if (!docSnap.exists()) {
      throw new Error('Profile does not exist');
    }
    
    const data = {
      ...profile,
      updatedAt: serverTimestamp(),
    };
    
    await updateDoc(ref, data);
    refreshProfileStore();
  } catch (error) {
    console.error('Error updating profile:', error);
    throw new Error('Could not update profile');
  }
}

export async function getProfile(userId: string | null | undefined): Promise<Profile | null> {
  try {
    if (!userId) return null;

    const userDocRef = doc(db, 'profiles', userId);
    const userDoc = await getDoc(userDocRef);

    if (userDoc.exists()) {
      return userDoc.data() as Profile;
    } else {
      return null;
    }
  } catch (error) {
    console.error('Error retrieving profile:', error);
    throw new Error('Could not retrieve profile');
  }
}

export async function updateProfileStats(time: string, gaveUp: boolean) {
  const profile = get(profileStore);
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
        streak: calculateStreak(profile.lastPlayedDate, profile.streak),
        gamesPlayed:updatedGamesPlayed,
        averageTime: calculateAverageTime(profile.averageTime, timeSec, updatedGamesPlayed),
        admin: profile.admin,
        lastPlayedDate: today()
      };
    }

    updateProfile(updatedProfile);
  }
}

export async function createTodaysGameData(gameData: GameData) {
  try {
    let s = get(session);
	  let userId = s.user?.uid ?? null;
    if (!userId) return;

    const profileRef = doc(db, 'profiles', userId);
    const gameDataDocRef = doc(collection(profileRef, "gameData"), today());
    await setDoc(gameDataDocRef, gameData);
  } catch (error) {
    console.error('Error creating profile:', error);
    throw new Error('Could not create profile');
  }
}

export async function getTodaysGameData(userId: string | null): Promise<GameData | null> {
  try {
    if (!userId) return null;

    const profileRef = doc(db, 'profiles', userId);
    const gameDataDocRef = doc(collection(profileRef, "gameData"), today());
    const gameDataDoc = await getDoc(gameDataDocRef);

    if (gameDataDoc.exists()) {
      return gameDataDoc.data() as GameData;
    }
  } catch (error) {
    throw error;
  }

  return null;
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
