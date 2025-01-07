import { initializeApp } from "firebase/app";
import { getAuth, signInAnonymously } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4qZNCNnlVihIZbdgtBB82R48AIC0bqG4",
  authDomain: "circlepuzzlegame-1738d.firebaseapp.com",
  projectId: "circlepuzzlegame-1738d",
  storageBucket: "circlepuzzlegame-1738d.appspot.com",
  messagingSenderId: "62490740969",
  appId: "1:62490740969:web:719c6ea78f8148089f4878",
  measurementId: "G-EEEKPPSEN9"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

export async function anonymousSignIn() {
  return new Promise((resolve, reject) => {
    signInAnonymously(auth)
      .then(() => {
        // Signed in successfully
        resolve(true);
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.error("Failed to sign in anonymously:", errorMessage);
        resolve(false);
      });
  });
}


// Initialize and export Firebase app
export { firebaseApp };
		
