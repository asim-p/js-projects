const textArea = document.querySelector(".text");
const totalChar = document.querySelector(".total-char");
const remainChar = document.querySelector(".remain-char");

textArea.addEventListener("input",()=>{
    updateText();
})

let updateText = () => {
    let len = textArea.value.length;
    totalChar.innerText = `Total Characters: ${len}`
    remainChar.innerText = `Remaining: ${textArea.maxLength-len}`
}

updateText();