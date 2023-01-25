// variables 
var timerEl = document.getElementById('timer-text');
var startBtn = document.getElementById('start');
var answerDiv = document.getElementById('answers');
var questionContainer = document.getElementById('question-container');
var submitInit = document.getElementById('submitInitials');
var scoreText = document.getElementById('score-text');
var btn1 = document.getElementById('btn-1');
var btn2 = document.getElementById('btn-2');
var btn3 = document.getElementById('btn-3');
var btn4 = document.getElementById('btn-4');
var yourScore = document.getElementById('yourscore')

var timer;
var timerVal;
var isWin = false;
var currentQ;
var score;

var questions = [
    {
        question: 'What primitive element determines true or false?',
        answer: [
            { text: 'String', correct: false },
            { text: 'Number', correct: false },
            { text: 'Boolean', correct: true },
            { text: 'Bigint', correct: false },
        ]
    },
    {
        question: 'Which logical operator means that both conditions must be true?',
        answer: [
            { text: '&&', correct: true },
            { text: '==', correct: false },
            { text: '||', correct: false },
            { text: '!==', correct: false },
        ]
    },
    {
        question: 'Which is not a language we will be learning in this course?',
        answer: [
            { text: 'HTML', correct: false },
            { text: 'CSS', correct: false },
            { text: 'Javascript', correct: false },
            { text: 'Python', correct: true },
        ]
    },

]

// Functions 
init()

function startGame() {
    isWin = false;
    startBtn.classList.add('hidden');
    answerDiv.classList.remove('hidden');
    questionContainer.classList.remove('hidden');
    timerVal = 60;
    startBtn.disabled = true;
    startTimer();
    showQuestion1();

}
// Timer Function *Works as intended.
function startTimer() {
    timer = setInterval(function () {
        timerVal--;
        timerEl.textContent = timerVal;
        if (timerVal >= 0) {
            if (isWin && timerVal > 0) {
                clearInterval(timer);
                winGame();
            }
        }
        if (timerVal <= 0) {
            clearInterval(timer);
            loseGame();
        }
    }, 1000);
}

function loseGame() {
    if (timerVal == 0) {
        answerDiv.classList.add('hidden')
        questionContainer.textContent = "GAME OVER!!!!"
        submitInit.classList.remove('hidden')
        yourScore.textContent = timerVal;
    }
}

function saveName() {
    var name = document.getElementById('initials').value;

    localStorage.setItem('name', name)

    document.getElementById('display-name').innerHTML = "Your name is: " + name;
}

var saveBtn = document.getElementById('save-name')

saveBtn.addEventListener('click', saveName);

function winGame() {
    isWin = true;
    questionContainer.textContent = "YOU WON!!!🏆"
    answerDiv.classList.add('hidden')
    localStorage.setItem('Score', timerVal + 5)
    clearTimeout(timer)
    submitInit.classList.remove('hidden')
    yourScore.textContent = timerVal + 5;
}


function init() {
    score = localStorage.getItem('Score', timerVal)
    scoreText.innerText = score
    timerVal = 0;
    timerEl.textContent = timerVal;
}

function showQuestion1(currentQ) {
    currentQ = questions[0].question;
    questionContainer.innerText = currentQ;
    btn1.innerText = questions[0].answer[0].text;
    btn2.innerText = questions[0].answer[1].text;
    btn3.innerText = questions[0].answer[2].text;
    btn4.innerText = questions[0].answer[3].text;

    btn1.addEventListener('click', subtractTime)
    btn2.addEventListener('click', subtractTime)
    btn3.addEventListener('click', showQuestion2)
    btn4.addEventListener('click', subtractTime)

}

function showQuestion2(currentQ) {
    currentQ = questions[1].question;
    questionContainer.innerText = currentQ;
    btn1.innerText = questions[1].answer[0].text;
    btn2.innerText = questions[1].answer[1].text;
    btn3.innerText = questions[1].answer[2].text;
    btn4.innerText = questions[1].answer[3].text;

    btn1.addEventListener('click', showQuestion3)
    btn2.addEventListener('click', subtractTime)
    btn3.addEventListener('click', subtractTime)
    btn4.addEventListener('click', subtractTime)
}

function showQuestion3(currentQ) {
    currentQ = questions[2].question;
    questionContainer.innerText = currentQ;
    btn1.innerText = questions[2].answer[0].text;
    btn2.innerText = questions[2].answer[1].text;
    btn3.innerText = questions[2].answer[2].text;
    btn4.innerText = questions[2].answer[3].text;

    btn1.addEventListener('click', subtractTime)
    btn2.addEventListener('click', subtractTime)
    btn3.addEventListener('click', subtractTime)
    btn4.addEventListener('click', winGame)
}

function subtractTime() {
    if (timerVal < 6) {
        timerVal === 0
    }
    else {
        timerVal = timerVal - 5
    }
}
// Event Listener 

startBtn.addEventListener('click', startGame);

