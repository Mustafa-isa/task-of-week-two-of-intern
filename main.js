 
/*create containers*/
let count=document.querySelector(".countside")
let boll=document.querySelector(".spans")
let parent_title=document.querySelector('.ask-area')
let submitButton= document.querySelector(".btn")
let answers=document.querySelector(".answers")
let resultsContainer=document.querySelector(".result")
let   rightAnswers= 0







let current= 0

/*get data from json by ajax*/
function getQuestions() {
    let myRequest = new XMLHttpRequest();
  
    myRequest.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        let questionsObject = JSON.parse(this.responseText);
        let questaionlength = questionsObject.length;
countspan(questaionlength);
getask(questionsObject[current],questaionlength);
submitButton.addEventListener('click',function(){

       let right= questionsObject[current].right_answer

    

    current = current +1
    checkAnswer(right ,questaionlength)
    parent_title.innerHTML=""
    answers.innerHTML=""
getask(questionsObject[current],questaionlength);
showResults(questaionlength)

handleBullets();

})



}   

 };
 myRequest.open("GET", "quoistaion.json", true);
 myRequest.send();
};
getQuestions();
function countspan(num){
    count.innerHTML=num
for(let i=0 ;i <num; i++){
let bullets= document.createElement('span')
boll.appendChild(bullets)
if(i===0){
    bullets.classList="mm"
}
}
};
function getask(obj ,count){
if(current<count){
    let title= document.createElement("h2")
let content= document.createTextNode(obj["title"])
title.appendChild(content)
parent_title.appendChild(title)
/* create chooces*/
for(let i=1;i<=4;i++){
let answer= document.createElement('div')
answer.classList="answer"
let inp= document.createElement("input")
inp.type='radio'
inp.name="answer"
inp.id= `answer${i}`
inp.dataset.answer=obj[`answer_${i}`]
let thelabel =document.createElement("label")
thelabel.htmlFor=`answer_${i}`
let label_content= document.createTextNode(obj[`answer_${i}`])
thelabel.appendChild(label_content)
answer.appendChild(inp)
answer.appendChild(thelabel)
answers.appendChild(answer)
}
}

}
function checkAnswer(rAnswer, count) {
    let answers = document.getElementsByName("answer");
    let theChoosenAnswer;
  
    for (let i = 0; i < answers.length; i++) {
      if (answers[i].checked) {
        theChoosenAnswer = answers[i].dataset.answer;
      }
    }
  
    if (rAnswer === theChoosenAnswer) {
      rightAnswers++;
    }
}

function handleBullets() {
    let bulletsSpans = document.querySelectorAll(".spans span");
    let arrayOfSpans = Array.from(bulletsSpans);
    arrayOfSpans.forEach((span, index) => {
      if (current === index) {
        span.className = "mm";
      }
    });
  }
  function showResults(count) {
    let theResults;
    if (current=== count) {
        parent_title.remove();
        answers.remove();
      submitButton.remove();
    
  
      if (rightAnswers > count / 2 && rightAnswers < count) {
        theResults = `<span class="good">Good</span>, ${rightAnswers} From ${count}`;
      } else if (rightAnswers === count) {
        theResults = `<span class="perfect">Perfect</span>, All Answers Is Good`;
      } else {
        theResults = `<span class="bad">Bad</span>, ${rightAnswers} From ${count}`;
      }
  
      resultsContainer.innerHTML = theResults;
      resultsContainer.style.padding = "10px";
      resultsContainer.style.backgroundColor = "white";
      resultsContainer.style.marginTop = "10px";
    }
  }