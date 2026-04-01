import { db } from "./firebase.js";
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-firestore.js";

let questions = [];
let current = 0;
let score = 0;

export async function startExam(subject = "maths") {
  const snap = await getDocs(collection(db, subject));

  questions = snap.docs.map(doc => doc.data());

  render();
}

function render() {
  const q = questions[current];

  document.getElementById("questionBox").innerHTML = `
    <h3>${q.question}</h3>
    ${["A","B","C","D"].map(opt => `
      <button onclick="answer('${q[opt]}')">${opt}. ${q[opt]}</button>
    `).join("")}
  `;
}

window.answer = function(selected) {
  if (selected === questions[current].answer) score++;
  current++;

  if (current < questions.length) render();
  else finish();
};

function finish() {
  document.getElementById("questionBox").innerHTML =
    `<h2>Score: ${score}/${questions.length}</h2>`;
}
