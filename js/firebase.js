import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBZu6gLeNwi0AcrZlmVdGWxjiNW9gPRb1U",
  authDomain: "plexexamhelp.firebaseapp.com",
  databaseURL: "https://plexexamhelp-default-rtdb.firebaseio.com",
  projectId: "plexexamhelp",
  storageBucket: "plexexamhelp.firebasestorage.app",
  messagingSenderId: "707616782385",
  appId: "1:707616782385:web:93aecbcc1ec6dace923d10"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// EXPORT SERVICES (THIS IS IMPORTANT)
export const auth = getAuth(app);
export const db = getFirestore(app);
