import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import type { FirebaseApp } from 'firebase/app';
import type { Firestore } from 'firebase/firestore';
import type { Auth } from 'firebase/auth';
import { browser } from '$app/environment';

export let db: Firestore;
export let app: FirebaseApp;
export let auth: Auth;

const firebaseConfig = {
  apiKey: "AIzaSyD4qZNCNnlVihIZbdgtBB82R48AIC0bqG4",
  authDomain: "circlepuzzlegame-1738d.firebaseapp.com",
  projectId: "circlepuzzlegame-1738d",
  storageBucket: "circlepuzzlegame-1738d.appspot.com",
  messagingSenderId: "62490740969",
  appId: "1:62490740969:web:719c6ea78f8148089f4878",
  measurementId: "G-EEEKPPSEN9"
};

export const initializeFirebase = () => {
 if (!browser) {
  throw new Error("Can't use the Firebase client on the server.");
 }
 if (!app) {
  app = initializeApp(firebaseConfig);
  auth = getAuth(app);
 }
};