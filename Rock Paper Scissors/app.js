let draw = 0;
let user = 0;
let comp = 0;
let compChoice;
let userChoice;

let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");

const playGame = (userChoice) => {
    compChoice = genCompChoices();
    if (userChoice== compChoice) {
        drawGame();
    }
    else {
        let userWin = true;
        if (userChoice==="rock"){
            userWin = compChoice === "scissors" ? true : false;
        }
        else if (userChoice === "scissors"){
            userWin = compChoice === "paper" ? true : false;
        }
        else{
            userWin = compChoice === "rock" ? true : false;
        }
        showWinner(userWin);
    }
    
}

const drawGame = () => {
    draw++;
    msg.innerHTML = "It's a draw";
    document.querySelector("#draw-score").innerHTML = draw;
    msg.style.backgroundColor = "#302E29";
    msg.style.color = "#fff";
}

const genCompChoices = () => {
    const options = ["rock","paper","scissors"];
    return options[Math.floor(Math.random()*3)];
} 


choices.forEach( (choice) => {
    choice.addEventListener("click",()=>{
        userChoice = choice.getAttribute("id");
        playGame (userChoice);
    })
});

const showWinner = (userWin) => {
    if (userWin === true){
        user++;
        msg.innerHTML = `You win! ${userChoice.toUpperCase()} beats ${compChoice.toUpperCase()}!`;
        document.querySelector("#user-score").innerHTML = user;
        msg.style.backgroundColor = "#22B736";
        msg.style.color = "#fff";
    }
    else{
        comp++;
        msg.innerHTML = `You lose! ${compChoice.toUpperCase()} beats ${userChoice.toUpperCase()}!`;
        document.querySelector("#comp-score").innerHTML = comp;
        msg.style.backgroundColor = "#BE1D1D";
        msg.style.color = "#fff";
    }
}