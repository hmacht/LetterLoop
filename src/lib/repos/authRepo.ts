import { session } from '$lib/session';
import { auth } from '$lib/firebase.client';
import { createProfile } from '$lib/repos/profileRepo'
import type { Profile } from '$lib/models/profile';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInAnonymously,
  getAuth, 
  signOut,
  sendPasswordResetEmail,
  type UserCredential
} from 'firebase/auth';

export async function loginWithMail(email: string, password: string) {
  await signInWithEmailAndPassword(auth, email, password)
    .then((result) => {
      const { user }: UserCredential = result;
      session.set({
        loggedIn: true,
        user: {
        displayName: user?.displayName,
        email: user?.email,
        photoURL: user?.photoURL,
        uid: user?.uid
        }
      });
      window.location.href = '/';
    })
    .catch((error) => {
      console.log(error.code)
      throw getHumanReadableError(error.code);
    });
}

export async function signUpWithMail(name: string, email: string, password: string) {
  try {
    const result = await createUserWithEmailAndPassword(auth, email, password);
    const { user } = result;

    session.update((cur: any) => ({
      ...cur,
      user,
      loggedIn: true,
      loading: false,
    }));

    await initDbProfile(name, user.email, user.uid);

    window.location.href = '/';
  } catch (error) {
    console.error(error);
    throw getHumanReadableError(error.code);
  }
};

export async function anonymousSignIn() {
  return new Promise((resolve, reject) => {
    signInAnonymously(auth)
      .then(() => {
        // Signed in successfully
        resolve(true);
      })
      .catch((error) => {
        console.error("Failed to sign in anonymously:", error.message);
        resolve(false);
      });
  });
}

export async function signOutUser(): Promise<void> {
  const auth = getAuth();
  
  try {
    await signOut(auth);
    console.log('User signed out successfully');
    window.location.href = '/';
  } catch (error) {
    console.error('Error signing out:', error);
    throw new Error('Could not sign out');
  }
}

export async function currentUserId(): Promise<number | null> {
  return new Promise<number | null>((resolve) => { 
    session.subscribe(async (cur: any) => {
      const user = cur?.user;
      if (user && user.uid) {
        resolve(user.uid);
      }
    });
  });
};

export async function resetPassword(email: string) {
  try {
    await sendPasswordResetEmail(auth, email);
    return { success: true };
  } catch (error: any) {
    console.error('Password reset error:', error);
    return { 
      success: false, 
      errorMessage: getHumanReadableError(error.code) || 'Password reset failed' 
    };
  }
}

// Helpers

async function initDbProfile(name: string, email: string, uid: string) {
  const profile: Profile = {
    id: uid,
    name: name,
    email: email,
    streak: 0,
    gamesPlayed: 0,
    averageTime: 0,
    admin: false,
    lastPlayedDate: null
  };

  await createProfile(profile);
}

export async function withCurrentUser<T>(callback: (userId: string) => Promise<T>): Promise<T | null> {
  return new Promise<T | null>((resolve) => {
    const unsubscribe = session.subscribe((cur: any) => {
      const user = cur?.user;
      if (user && user.uid) {
        callback(user.uid).then(resolve).catch(() => resolve(null));
        // unsubscribe();
      }
    });
  });
}

function getHumanReadableError(errorCode: any) {
  const errorMessages = {
    'auth/email-already-in-use': 'This email is already in use. Please use a different one.',
    'auth/invalid-email': 'The email address is not valid. Please enter a valid email.',
    'auth/invalid-credential': 'The email or password is incorrect',
    'auth/weak-password': 'Your password is too weak. Please use a stronger password.',
    'auth/operation-not-allowed': 'Account creation is currently disabled. Please contact support.',
    'auth/internal-error': 'An internal error occurred. Please try again later.',
    'auth/missing-email': 'Please provide an email',
    'auth/missing-password': 'Please provide a password'
  };

  return errorMessages[errorCode] || 'An unknown error occurred. Please try again.';
}