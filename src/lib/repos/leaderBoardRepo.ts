import { db } from '$lib/firebase.client';
import { collection, query, orderBy, limit, getDocs, where, getCountFromServer } from 'firebase/firestore';

import type { Profile } from '$lib/models/profile';


export async function getTopProfiles(numberOfProfiles: number): Promise<Profile[]> {
  try {
    const profilesRef = collection(db, 'profiles');
    const q = query(profilesRef, orderBy('gamesPlayed', 'desc'), limit(numberOfProfiles));

    const snapshot = await getDocs(q);
    
    if (snapshot.empty) {
      return [];
    }

    const profiles: Profile[] = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as Profile[];

    return profiles;
  } catch (error) {
    console.error('Error fetching top profiles:', error);
    return [];
  }
}

export async function getRank(gamesPlayed: number): Promise<number | null> {
  try {
    const profilesRef = collection(db, 'profiles');
    const countQuery = query(profilesRef, where('gamesPlayed', '>', gamesPlayed));
    const countSnapshot = await getCountFromServer(countQuery);
    const count = countSnapshot.data().count;

    return count + 1; // rank is count of people ahead + 1
  } catch (error) {
    console.error('Error fetching user rank:', error);
    return null;
  }
}