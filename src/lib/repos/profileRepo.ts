import { db } from '$lib/firebase.client';
import { doc, setDoc, getDoc, serverTimestamp, updateDoc } from 'firebase/firestore';
import type { Profile } from '$lib/models/profile';
import { session, type User } from '$lib/session';
import { today, yesterday } from "$lib/utils/timeFormatter"

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
  } catch (error) {
    console.error('Error updating profile:', error);
    throw new Error('Could not update profile');
  }
}

export async function getProfile(userId: string): Promise<Profile | null> {
  try {
    const userDocRef = doc(db, 'profiles', userId);
    const userDoc = await getDoc(userDocRef);

    if (userDoc.exists()) {
      return userDoc.data() as Profile;
    } else {
      console.log('Profile not found');
      return null;
    }
  } catch (error) {
    console.error('Error retrieving profile:', error);
    throw new Error('Could not retrieve profile');
  }
}

export async function getCurrentUserProfile(): Promise<Profile | null> {
  return new Promise<Profile | null>((resolve) => { 
    const unsubscribe = session.subscribe(async (cur: any) => {
      const user = cur?.user;
      if (user && user.uid) {
        const fetchedProfile = await getProfile(user.uid);
        unsubscribe();
        resolve(fetchedProfile);
      }
    });
  });
};

export async function updateProfileStats(time: string, gaveUp: boolean) {
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
