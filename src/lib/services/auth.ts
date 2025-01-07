import { session } from '$lib/session';
import { auth } from '$lib/firebase.client';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInAnonymously,
  type UserCredential
} from 'firebase/auth';
import { goto } from '$app/navigation';

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
      goto('/');
    })
    .catch((error) => {
      console.log(error.code)
      throw getHumanReadableError(error.code);
    });
}

export async function signUpWithMail(email: string, password: string) {
  await createUserWithEmailAndPassword(auth, email, password)
    .then((result) => {
      const { user } = result;
      session.update((cur: any) => {
        return {
        ...cur,
        user,
        loggedIn: true,
        loading: false
        };
      });
      goto('/');
    })
    .catch((error) => {
      throw getHumanReadableError(error.code);
    });
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

// Helpers
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