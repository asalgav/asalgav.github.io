/**
 * Adrian Salas — Personal Portfolio
 * js/auth-config.js — Firebase configuration & email allowlist
 *
 * SETUP:
 *  1. Go to https://console.firebase.google.com
 *  2. Create a project → enable Email/Password under Authentication → Sign-in method
 *  3. Under Project settings → Your apps, copy the firebaseConfig object
 *  4. Paste the values below (replace each placeholder string)
 *  5. Add allowed emails to ALLOWED_EMAILS
 */

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBTj2SzV_geJ3rm-Kj_t8H2NNICzGy8MiY",
  authDomain: "asalgav-2e368.firebaseapp.com",
  projectId: "asalgav-2e368",
  storageBucket: "asalgav-2e368.firebasestorage.app",
  messagingSenderId: "148763717598",
  appId: "1:148763717598:web:fedfc5700a288b31e0374f",
  measurementId: "G-6Y9ZLG1H1Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Only these emails may create a new account via the sign-up form.
// Existing users (created in Firebase Console) can always sign in.
const ALLOWED_EMAILS = [
  // "friend@example.com",
  // "colleague@example.com"
  asalgav@gmail.com
  adrian.sal.gav@gmail.com
  ivalle.ts@gmail.com
];
