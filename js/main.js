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

const header = document.querySelector('.header');

function showHeader() {
    let scrollPos = 250;

    if(document.body.scrollTop > scrollPos || document.documentElement.scrollTop > scrollPos) {
        header.classList.add('header__scroll');
    }else{
        header.classList.remove('header__scroll');
    };
};

window.onscroll = function() {
    showHeader();
};

const question = document.querySelectorAll('.faq__question');
const answer = document.querySelectorAll('.faq__answer');
const questionClose = document.querySelectorAll('.faq__close');

question.forEach(function(questionItem, index) {
    questionItem.addEventListener('click', () => {
        questionItem.classList.toggle('faq__question-show');
        answer[index].classList.toggle('faq__answer-show');
        questionClose[index].classList.toggle('faq__close-show');
    })
});