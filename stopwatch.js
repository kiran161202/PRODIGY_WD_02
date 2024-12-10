let result=document.getElementById("result");
let hours=0;
let minutes=0;
let seconds=0;
let isRunning=false;
function updateTime() {
    seconds++;
    if(seconds==60){
        seconds=0;
        minutes++;
    }
    else if(minutes==60){
           minutes=0;
           hours++;
    }
    result.innerText=ft(hours)+":"+ft(minutes)+":"+ft(seconds);
}
function ft(num) {
 if(num<10){
    return "0"+num;
 }
 else{
    return num;
 }
}
function start(){
    if(!isRunning){
        isRunning=true;
       intervalID= setInterval(updateTime,1000);
    }
}
function stop(){
    console.log("stopped");
    clearInterval(intervalID);
}
function reset(){
    isRunning=false;
    hours=0;
    minutes=0;
    seconds=0;
    clearInterval(intervalID);
    result.innerHTML="00:00:00";
}