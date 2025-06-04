import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { type Database, getDatabase } from 'firebase/database';
import { browser } from '$app/environment';

import type { FirebaseApp } from 'firebase/app';
import type { Firestore } from 'firebase/firestore';
import type { Auth } from 'firebase/auth';
import {
  PUBLIC_FIREBASE_API_KEY,
  PUBLIC_FIREBASE_AUTH_DOMAIN,
  PUBLIC_FIREBASE_DATABASE_URL,
  PUBLIC_FIREBASE_PROJECT_ID,
  PUBLIC_FIREBASE_STORAGE_BUCKET,
  PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  PUBLIC_FIREBASE_APP_ID
} from '$env/static/public';

export let db: Firestore;
export let app: FirebaseApp;
export let auth: Auth;
export let realtimeDb: Database;

// TODO: Stop being lazy and put these away in ENV

const firebaseConfig = {
  apiKey: "AIzaSyD4qZNCNnlVihIZbdgtBB82R48AIC0bqG4",
  authDomain: "circlepuzzlegame-1738d.firebaseapp.com",
  databaseURL: "https://circlepuzzlegame-1738d-default-rtdb.firebaseio.com",
  projectId: "circlepuzzlegame-1738d",
  storageBucket: "circlepuzzlegame-1738d.firebasestorage.app",
  messagingSenderId: "62490740969",
  appId: "1:62490740969:web:719c6ea78f8148089f4878"
};

export const initializeFirebase = () => {
 if (!browser) {
  throw new Error("Can't use the Firebase client on the server.");
 }
 if (!app) {
  app = initializeApp(firebaseConfig);
  auth = getAuth(app);
  db = getFirestore(app);
  realtimeDb = getDatabase(app);
 }
};