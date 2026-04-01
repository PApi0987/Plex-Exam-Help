import { auth, db } from "./firebase.js";
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-firestore.js";

export async function addQuestion(data) {

  const user = auth.currentUser;

  if (!user) return alert("Login first");

  await addDoc(collection(db, data.subject), data);

  alert("Question added ✅");
}
