const prompt = document.getElementById("text-field");
const qr = document.getElementById("qr");
const divQR = document.getElementById("qr-div")
const reset = document.getElementById("reset");
const submit = document.getElementById("create");
const formVal = document.getElementById("form-data");
const BaseURL = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";

submit.addEventListener("click",()=>{
    generateQR();
})

let generateQR = async () =>{
    let userInput = prompt.value;
    let response = await fetch(`${BaseURL}+${userInput}`);
    qr.setAttribute("src",response.url);
    divQR.classList.remove("hidden");
}

formVal.addEventListener("submit",(evt)=>{
    evt.preventDefault();
    generateQR();
})

reset.addEventListener("click",()=>{
    prompt.value="";
    divQR.classList.add("hidden");
})