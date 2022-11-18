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
    Animate();
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

const stepsBlock = document.querySelector('.steps');

let stepsBlockPos = stepsBlock.offsetTop;
let stepsBlockHeight = stepsBlock.offsetHeight;

let stepsBlockRes = stepsBlockHeight - stepsBlockPos;
let p = 0;

function Animate() {
    const stepItem = document.querySelectorAll('.step');
    const stepItemHeight = stepItem[0].offsetHeight;
    if(document.body.scrollTop > stepsBlockRes || document.documentElement.scrollTop > stepsBlockRes) {
        stepItem[0].classList.add('step-aminate');
    };
    if(document.body.scrollTop > (stepsBlockRes + stepItemHeight)|| document.documentElement.scrollTop > (stepsBlockRes + stepItemHeight)) {
        stepItem[1].classList.add('step-aminate');
    };
    if(document.body.scrollTop > (stepsBlockRes + stepItemHeight*2)|| document.documentElement.scrollTop > (stepsBlockRes + stepItemHeight*2)) {
        stepItem[2].classList.add('step-aminate');
    };
    let feedback = document.querySelector('.feedback');
    let personPos = feedback.offsetTop;
    if(document.body.scrollTop > (personPos - 300) && p === 0 || document.documentElement.scrollTop > (personPos - 300) && p === 0) {
        personAnimate(1000, '.person');
    };
}

function personAnimate(num, elem) {
    const personTime = 3000;
    const personStep = 50;
    let e = document.querySelector('.person');
    n = 0;
    let t = Math.round(personTime/(num/personStep));
    let interval = setInterval(() => {
        n = n + personStep;
        if(n == num) {
            clearInterval(interval);
        }
        e.innerHTML = n;
    }, 
    t);
    p = 1;
};