import { auth, db } from "./firebase.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.11.0/firebase-auth.js";

import { doc, setDoc } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-firestore.js";

export async function signup(email, password) {
  const userCred = await createUserWithEmailAndPassword(auth, email, password);

  await setDoc(doc(db, "users", userCred.user.uid), {
    premium: false,
    role: "user"
  });
}

export async function login(email, password) {
  await signInWithEmailAndPassword(auth, email, password);
}

export function logout() {
  return signOut(auth);
}

export function requireAuth(callback) {
  onAuthStateChanged(auth, (user) => {
    if (!user) {
      window.location.href = "login.html";
    } else {
      callback(user);
    }
  });
}
