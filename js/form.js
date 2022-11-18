let now = new Date();
const dateItem = document.querySelector('.today');
const options = {
    month: 'long',
    day: 'numeric',
  };

dateItem.innerHTML = now.toLocaleString("ru", options);

const timer = document.querySelector('.timer');
const timerMin = document.querySelector('.timer-min');
const timerSec = document.querySelector('.timer-sec');
let time = 900;

setInterval(updateTimer, 1000);

function updateTimer() {
    let min = Math.floor(time / 60);
    let sec = time % 60;

    sec = sec < 10 ? '0' + sec:
    sec;
    timerMin.innerHTML = min;
    timerSec.innerHTML = sec;
    time--;
};