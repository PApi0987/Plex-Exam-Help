// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

// YOUR CONFIG
const firebaseConfig = {
  apiKey: "AIzaSyBZu6gLeNwi0AcrZlmVdGWxjiNW9gPRb1U",
  authDomain: "plexexamhelp.firebaseapp.com",
  projectId: "plexexamhelp",
  storageBucket: "plexexamhelp.firebasestorage.app",
  messagingSenderId: "707616782385",
  appId: "1:707616782385:web:93aecbcc1ec6dace923d10"
};

// INIT
const app = initializeApp(firebaseConfig);

// EXPORT AUTH
export const auth = getAuth(app);
