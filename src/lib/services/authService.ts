/**
 * Authentication.
 *
 * Sign-in still happens in the browser via the Firebase Auth SDK -- that is
 * what mints the ID token. Everything the account then *owns* (its profile row)
 * is created server-side, so the client never writes profile data directly.
 */
import {
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
	signInAnonymously,
	signOut,
	sendPasswordResetEmail
} from 'firebase/auth';
import { auth } from '$lib/firebase.client';
import { api } from '$lib/services/apiClient';
import { createMyProfile } from '$lib/services/profileService';
import { Event, identifyUser, resetAnalytics, track } from '$lib/services/analytics';
import { refreshProfile } from '$lib/stores/profileStore';

const ERROR_MESSAGES: Record<string, string> = {
	'auth/email-already-in-use': 'This email is already in use. Please use a different one.',
	'auth/invalid-email': 'The email address is not valid. Please enter a valid email.',
	'auth/invalid-credential': 'The email or password is incorrect.',
	'auth/weak-password': 'Your password is too weak. Please use a stronger password.',
	'auth/operation-not-allowed': 'Account creation is currently disabled. Please contact support.',
	'auth/internal-error': 'An internal error occurred. Please try again later.',
	'auth/missing-email': 'Please provide an email.',
	'auth/missing-password': 'Please provide a password.',
	'auth/too-many-requests': 'Too many attempts. Please wait a moment and try again.'
};

/** Whether an account already exists, so the form knows what to ask for next. */
export async function emailHasAccount(email: string): Promise<boolean> {
	const { exists } = await api.post<{ exists: boolean }>('/api/auth/check-email', { email });
	return exists;
}

export function describeAuthError(code: unknown): string {
	return (
		(typeof code === 'string' && ERROR_MESSAGES[code]) ||
		'An unknown error occurred. Please try again.'
	);
}

export async function loginWithEmail(email: string, password: string): Promise<void> {
	try {
		const { user } = await signInWithEmailAndPassword(auth, email, password);
		identifyUser(user.uid);
		track(Event.SignedIn, { method: 'login' });
		await refreshProfile();
	} catch (err) {
		throw new Error(describeAuthError((err as { code?: string }).code));
	}
}

export async function signUpWithEmail(
	name: string,
	email: string,
	password: string
): Promise<void> {
	try {
		const { user } = await createUserWithEmailAndPassword(auth, email, password);
		identifyUser(user.uid);
		track(Event.SignedIn, { method: 'signup' });
	} catch (err) {
		throw new Error(describeAuthError((err as { code?: string }).code));
	}

	// The account exists at this point, so a failure here leaves a usable login
	// with no profile. Surface it plainly rather than pretending signup failed.
	try {
		await createMyProfile(name);
		await refreshProfile();
	} catch {
		throw new Error(
			'Your account was created, but we could not set up your profile. Please contact support.'
		);
	}
}

/** Every visitor gets an identity so the game can be timed server-side. */
export async function signInAsGuest(): Promise<boolean> {
	try {
		await signInAnonymously(auth);
		return true;
	} catch (err) {
		console.error('Anonymous sign-in failed:', err);
		return false;
	}
}

export async function signOutUser(): Promise<void> {
	await signOut(auth);
	// Drop the identity before the next guest session begins, so their activity
	// is not attributed to the account that just left.
	resetAnalytics();
	await signInAsGuest();
}

export async function resetPassword(
	email: string
): Promise<{ success: boolean; errorMessage?: string }> {
	try {
		await sendPasswordResetEmail(auth, email);
		return { success: true };
	} catch (err) {
		return { success: false, errorMessage: describeAuthError((err as { code?: string }).code) };
	}
}
