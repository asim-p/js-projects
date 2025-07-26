let baseURL = "https://api.openweathermap.org/data/2.5/weather?q="
let temperature = document.querySelector(".temperature");
let city = document.querySelector(".city");
let searchBtn = document.querySelector(".searchButton");
let searchField = document.querySelector(".searchField");
let icon = document.querySelector("#weathericon");
let container = document.getElementById("box");

searchBtn.addEventListener("click",async ()=>{
    try
    {
        let data = await fetch(baseURL+`${searchField.value.toLowerCase()}&appid=1c42e902348cfd6dd114679f49546288&units=metric`);
        let weatherdata = await data.json();
        temperature.innerHTML = `${weatherdata["main"]["temp"]}<sup>o</sup> C`
        city.textContent = `${weatherdata["name"]}`
        updateIcon(weatherdata);
    }
    catch
    {
        notFound();
    }
})

let notFound = ()=>{
    icon.setAttribute("src","images/error.png");
    temperature.textContent="Invalid city name!";
    city.textContent="";
}


let updateIcon = (weatherdata) => {
    let id = weatherdata["weather"]["0"]["id"];
    if (id >= 200 && id <= 232)
    {
        icon.src = "images/thunder.png";
        container.setAttribute("class","");
        container.classList.add("thunder","container");
    }
    else if (id >= 300 && id <= 321)
    {
        icon.src = "images/drizzle.png";
        container.setAttribute("class","");
        container.classList.add("rainy","container");
    }
    else if (id >= 500 && id <= 531)
    {
        icon.src = "images/rain.png";
        container.setAttribute("class","");
        container.classList.add("rainy","container");
    }
    else if (id >= 600 && id <= 622)
    {
        icon.src = "images/snow.png";
        container.setAttribute("class","");
        container.classList.add("snowy","container");
    }
    else if (id==800)
    {
        icon.src="images/sun.png";
        container.setAttribute("class","");
        container.classList.add("sunny","container");
    }
    else if (id>=801 && id<= 804)
    {
        icon.src="images/cloud.png";
        container.setAttribute("class","");
        container.classList.add("cloudy","container");
    }
    else{
        icon.src = "images/fog.png";
        container.setAttribute("class","");
        container.classList.add("foggy","container");
    }
    
}

window.addEventListener("load",async ()=>{
    let data = await fetch(baseURL+`${"kathmandu".toLowerCase()}&appid=1c42e902348cfd6dd114679f49546288&units=metric`);
    let weatherdata = await data.json();
    temperature.innerHTML = `${weatherdata["main"]["temp"]}<sup>o</sup> C`
    city.textContent = `${weatherdata["name"]}`
    updateIcon(weatherdata);
})
