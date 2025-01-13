import { db} from '$lib/firebase.client';
import { doc, setDoc, getDoc, serverTimestamp} from 'firebase/firestore';
import type { Profile } from '$lib/models/profile';


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