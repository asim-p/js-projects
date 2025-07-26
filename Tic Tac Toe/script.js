let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;
let win = false;
let click = 0;

const winPatterns = [
     [0, 1, 2],  
     [3, 4, 5],  
     [6, 7, 8],  
     [0, 3, 6],  
     [1, 4, 7],  
     [2, 5, 8],  
     [0, 4, 8],  
     [2, 4, 6]
]

boxes.forEach((box)=>{
    box.addEventListener("mouseenter",()=>{
        box.style.backgroundColor = "#0F89DB";
    })
    box.addEventListener("mouseleave",()=>{
        box.style.backgroundColor = "";
    })
})

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        click++;
        if (turnO == true){
            box.innerHTML = "O";
            box.style.color = "black";
            turnO = false;
        }
        else{
            box.innerHTML = "X";
            box.style.color = "white";
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    })
})

const checkWinner = () => {
    for (pattern of winPatterns){
        let value1 = boxes[pattern[0]].innerText;
        let value2 = boxes[pattern[1]].innerText;
        let value3 = boxes[pattern[2]].innerText;
       if (value1 != "" && value2 != "" && value3 != "")
       {
        if (value1 === value2 && value2 === value3 ) 
        {
            win = true;
            disableBoxes();
            showWinner(value1);
        }
       }
       checkDraw();
    }
}

const checkDraw = () =>{
        if (click==9 && win==false)
        {
            msg.innerText = `This game is a draw`;
            msgContainer.classList.remove("hide");
        }
}

const showWinner = (winnerVal) => {
    msg.innerText = `Congratulations, Winner is ${winnerVal}`;
    msgContainer.classList.remove("hide");
}

const resetGame = () => {
    turnO = true;
    msgContainer.classList.add("hide");
    enableBoxes();
    click = 0;
    win = false;
}

const disableBoxes = () => {
    for (box of boxes)
    {
        box.disabled = true;
    }
}

const enableBoxes = () => {
    for (box of boxes)
    {
        box.disabled = false;
        box.innerText="";
    }
}

newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);