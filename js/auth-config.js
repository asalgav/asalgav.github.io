/**
 * Adrian Salas — Personal Portfolio
 * js/auth-config.js — Firebase configuration & email allowlist
 */

// Firebase project config (from Firebase Console → Project settings → Your apps)
const firebaseConfig = {
  apiKey:            "AIzaSyBTj2SzV_geJ3rm-Kj_t8H2NNICzGy8MiY",
  authDomain:        "asalgav-2e368.firebaseapp.com",
  projectId:         "asalgav-2e368",
  storageBucket:     "asalgav-2e368.firebasestorage.app",
  messagingSenderId: "148763717598",
  appId:             "1:148763717598:web:fedfc5700a288b31e0374f",
  measurementId:     "G-6Y9ZLG1H1Z"
};

// Only these emails may register via the sign-up form.
// Existing users created in Firebase Console can always sign in.
const ALLOWED_EMAILS = [
  "asalgav@gmail.com",
  "adrian.sal.gav@gmail.com",
  "ivalle.ts@gmail.com"
];
