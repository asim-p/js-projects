let hour = document.querySelector("#hour");
let mins = document.querySelector("#mins");
let sec = document.querySelector("#sec");

let updateTime = () => {
    time = new Date;
    hour.innerText = ((time.getHours()%12)<10?"0":"") + (time.getHours()%12);
    mins.innerText = (time.getMinutes() < 10 ? "0" : "") + time.getMinutes();
    if ((time.getHours())<12)
    {
        sec.innerText = (time.getSeconds() < 10 ? "0" : "") + time.getSeconds() + " AM";
    }
    else
    {
        sec.innerText = (time.getSeconds() < 10 ? "0" : "") + time.getSeconds() + " PM";
    }
}

setInterval(updateTime,1000);
document.addEventListener("load",updateTime());

