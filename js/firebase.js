<script type="module">
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBZu6gLeNwi0AcrZlmVdGWxjiNW9gPRb1U",
  authDomain: "plexexamhelp.firebaseapp.com",
  projectId: "plexexamhelp",
  storageBucket: "plexexamhelp.appspot.com",
  messagingSenderId: "707616782385",
  appId: "1:707616782385:web:93aecbcc1ec6dace923d10"
};

// INIT
const app = initializeApp(firebaseConfig);

// SERVICES
export const auth = getAuth(app);
export const db = getFirestore(app);
</script>
