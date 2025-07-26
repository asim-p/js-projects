const display = document.querySelector("#display");

let del = () => {
    display.value = display.value.slice(0,-1);
}

let displayVal = (value) => {
    display.value = display.value + value;
}

let calculate = () => {
    try{
        display.value = eval(display.value);
    }
    catch {
        display.value = "Error";
    }
}

let erase = () => {
    display.value = "";
}