let apiLink = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit";
let setup = document.querySelector(".setup");
let delivery = document.querySelector(".delivery");
let errorDiv = document.querySelector(".error");

document.querySelector("button").addEventListener("click", ()=>{
   getJoke();   
})

let getJoke = () => 
    fetch(apiLink)
    .then(response => {
        return response.json();
    })
    .then (data =>{
        console.log(data);
        if (data.type === "twopart"){
            delivery.classList.remove("hidden");
            setup.innerText = data.setup;
            delivery.innerText = "→ " + data.delivery;
        }
        else{
            delivery.classList.add("hidden");
            setup.innerText = data.joke;
        }
    })
window.addEventListener("load",()=>{
    getJoke();
})