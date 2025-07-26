let scoreboard = 0;
let score = document.querySelector(".score");
let question = document.querySelector(".question");
let submitBtn = document.querySelector(".submit");
let resetBtn = document.querySelector(".reset");
let answer = document.querySelector("#answer");
let num1, num2;

let GenerateQuestion = () =>{
    answer.value="";
    num1 = Math.ceil(Math.random()*10);
    num2 = Math.ceil(Math.random()*10);
    question.innerText = `What is ${num1} multiplied by ${num2} ?`
}

let checkAnswer = () => {
    if (answer.value == (num1*num2))
        {
            scoreboard++;
        }
        else
        {   
            scoreboard--;
        }
    updateScore();
}

let updateScore = () =>{
    score.innerText = `Score = ${scoreboard}`;
}

submitBtn.addEventListener("click",()=>{
    checkAnswer();
    GenerateQuestion();
})

window.addEventListener("load",()=>{
    GenerateQuestion();
    updateScore();
})

resetBtn.addEventListener("click",()=>{
    scoreboard = 0;
    updateScore();
    GenerateQuestion();
})

answer.addEventListener("keydown",(evt)=>{
    if (evt.key=="Enter")
    {
        checkAnswer();
        GenerateQuestion();
    }
})