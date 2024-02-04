let hours = document.querySelector(".hour");
let minutes = document.querySelector(".minute");
let seconds = document.querySelector(".second");


let start = document.querySelector(".start");
let stop = document.querySelector(".stop");
let reset = document.querySelector(".reset");
let millisecond_Count = 0;
let second_Count = 0;
let minute_count = 0;
let hour_count = 0;
let interval;
let semicolon ;
let millisecond;
let start_1 = true;
stop.disabled = true;
reset.disabled = true;
let startfunc = () => {
    
    if(start_1){
        semicolon = document.createElement("h1");
        millisecond = document.createElement("h1");
        semicolon.innerText = ":";
        millisecond.innerText = "00";
        document.querySelector(".display").append(semicolon , millisecond);
        start_1 = false;
    }

    interval = setInterval(()=>{
        millisecond_Count++;
        millisecond_Count<10 ? millisecond.innerText = "0" + millisecond_Count : millisecond.innerText = millisecond_Count;

        if(millisecond.innerText === "99"){
            millisecond_Count = 0;
            millisecond.innerText = "00";
            second_Count++;
            second_Count < 10 ? seconds.innerText = "0" + second_Count : seconds.innerText = second_Count;
        }

        if(seconds.innerText === "60"){
            second_Count = 0;
            seconds.innerText = "00";
            minute_count++;
            minute_count < 10 ? minutes.innerText = "0" + minute_count : minutes.innerText = minute_count;
        }

        if(minutes.innerText === "60"){
            minute_count = 0;
            minutes.innerText = "00";
            hour_count++;
            hour_count < 10 ? hours.innerText = "0" + hour_count : hours.innerText = hour_count;
        }
    } , 10);

    start.disabled = true;
    stop.disabled  = false;
    reset.disabled = false;
    
};


let stopfunc = () => {
    clearInterval(interval);
    start.disabled = false;
    stop.disabled = true;
    reset.disabled = false;
}

let resetfunc = () => {
    for(let i = 0; i<=1;i++){
        let display = document.querySelector(".display");
        display.removeChild(display.lastChild);
    }
    clearInterval(interval);
    millisecond_Count = 0;
    hour_count = 0;
    minute_count = 0;
    second_Count = 0;
    seconds.innerText = "00";
    minutes.innerText = "00";
    hours.innerText = "00";
    start_1 = true;
    start.disabled = false;
    stop.disabled = true;
    reset.disabled = true;
}

start.addEventListener("click" , startfunc);
stop.addEventListener("click" , stopfunc);
reset.addEventListener("click" , resetfunc);
