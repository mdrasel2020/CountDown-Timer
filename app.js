// countdown 15 Minutes
let start = 15;
let time = start * 60;
let showTen = document.querySelector('#ten');
setInterval(function countdown() {
    if (time >=0) {
        const minutes = Math.floor(time / 60);
        let seconds = time % 60;
        seconds = seconds < 10 ? '0' + seconds : seconds;
        showTen.innerHTML = `${minutes} Minutes ${seconds} Seconds`; 
     }
       time--;
  //console.log(minutes, seconds)
}, 1000)

// Vocation Countdown
let vocation = "14 dec 2021";
let voc = document.getElementById('voc');
setInterval(function vacationNow() {
     
    let vocationDay = new Date(vocation);
    let currentDay = new Date();
    let totalTime = (vocationDay-currentDay) / 1000;
    let  days = Math.floor(totalTime / 86400);
    let hour = Math.floor(totalTime / 3600) % 24;
    let mins = Math.floor(totalTime / 60)  % 60;
    let sces = Math.floor(totalTime)%60 ;
    voc.innerHTML = `${days}Days  ${hour}h ${mins}m ${sces}sec`;
//console.log(days,hour,mins,sces)
 },1000)