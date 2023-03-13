// bring data
const arr = [
  {
    question: "calclaute 2+2 !",
    facke1: "2+2 = 3",
    facke2: "2+2 = 0",
    facke3: "2+2 = 2",
    real: "2+2 =4",
  },
  {
    question: "calclaute 4+2 !",
    facke1: "4+2 = 3",
    facke2: "4+2 = 0",
    facke3: "4+2 = 2",
    real: "4+2 =6",
  },
];
const spans = document.querySelectorAll(".spans");
const quizContainer = document.querySelector(".quiz-container");
let score = document.getElementById("score");
let score_points =0
score.innerText =score_points
let initIndex = 0;
console.log(arr[initIndex]);
//loop data from array
//index(0)
function loopData(initIndex) {
  let arrIndex = arr[initIndex];

  quizContainer.innerHTML = `
<h2 id="question-title"> ${arrIndex.question}</h2>
<div class="question-answer">
  <p>${arrIndex.facke1}</p>
</div>
<div class="question-answer">
  <p>${arrIndex.facke2}</p>
</div>
<div class="question-answer">
  <p>${arrIndex.facke3}</p>
</div>
<div class="question-answer">
  <p>${arrIndex.real}</p>
</div>
`;
  changeQueation();
}
loopData(initIndex);
function changeQueation() {
  const answers = document.querySelectorAll(".question-answer");
  answers.forEach((answer) => {
    answer.addEventListener("click", function () {
      const p_content = answer.querySelector("p").innerText;
      if (p_content === arr[initIndex].real) {
        console.log("ok");
        correctAnswer()
      } else {
        console.log("note ok");
      }
    });
  });
}

function correctAnswer(){
  initIndex++
  loopData(initIndex)
  score_points+=100
  score.innerText =score_points

}
