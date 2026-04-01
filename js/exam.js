let questions = [];
let current = 0;
let score = 0;
let selected = null;

function startExam(subject){
  localStorage.setItem("subject", subject);
  window.location.href = "exam.html";
}

document.addEventListener("DOMContentLoaded", ()=>{
  loadExam();
  startTimer(60 * 60); // 60 mins
});

function loadExam(){
  const subject = localStorage.getItem("subject");

  document.getElementById("subjectTitle").innerText = subject.toUpperCase();

  fetch(`questions/${subject}.json`)
  .then(res => res.json())
  .then(data => {
    questions = data;
    showQ();
  });
}

function showQ(){
  const q = questions[current];
  document.getElementById("question").innerText = q.question;

  const options = document.getElementById("options");
  options.innerHTML = "";

  q.options.forEach(opt=>{
    const div = document.createElement("div");
    div.className = "option";
    div.innerText = opt;

    div.onclick = ()=>{
      selected = opt;
      document.querySelectorAll(".option").forEach(o=>o.classList.remove("selected"));
      div.classList.add("selected");
    };

    options.appendChild(div);
  });
}

function nextQ(){
  if(selected === questions[current].answer){
    score++;
  }
  current++;
  selected = null;

  if(current < questions.length){
    showQ();
  } else {
    submitExam();
  }
}

function prevQ(){
  if(current > 0){
    current--;
    showQ();
  }
}

function submitExam(){
  localStorage.setItem("score", score);
  window.location.href = "result.html";
}

function startTimer(duration){
  let time = duration;

  setInterval(()=>{
    let mins = Math.floor(time/60);
    let secs = time%60;

    document.getElementById("time").innerText =
    `${mins}:${secs < 10 ? "0":""}${secs}`;

    time--;

    if(time <= 0){
      submitExam();
    }
  },1000);
}
