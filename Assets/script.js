// variables 
var timerEl = document.getElementById('timer-text');
var startBtn = document.getElementById('start');
var answerBtn = document.querySelectorAll('btn');
var answerDiv = document.getElementById('answers');
var questionContainer = document.getElementById('question-container');

var timer;
var timerVal;
var isWin = false;
let shuffleQ, currentQ

var questions = [
    {
        question: 'What primitive element determines true or false?',
        answers: [
            { text: 'String', correct: false },
            { text: 'Number', correct: false },
            { text: 'Boolean', correct: true },
            { text: 'Bigint', correct: false },
        ],

        question: 'Which logical operator means that both conditions must be true?',
        answers: [
            { text: '&&', correct: true },
            { text: '==', correct: false },
            { text: '||', correct: false },
            { text: '!==', correct: false },
        ],

        question: 'Which is not a language we will be learning in this course?',
        answers: [
            { text: 'HTML', correct: false },
            { text: 'CSS', correct: false },
            { text: 'Javascript', correct: false },
            { text: 'Python', correct: true },
        ],
    }
]
// Functions 

function startGame() {
    isWin = false;
    startBtn.classList.add('hidden');
    answerDiv.classList.remove('hidden');
    questionContainer.classList.remove('hidden');
    shuffleQ = questions.sort(() => Math.random() - .5)
    currentQ = 0
    timerVal = 60;
    startBtn.disabled = true;
    startTimer();
    setQuestion();

}

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
        if (timerVal === 0) {
            clearInterval(timer);
            loseGame();
        }
    }, 1000);
}

function loseGame() {
    if (timerVal === 0) {
        alert("GAME OVER!")
    }
}

function setQuestion() {
    resetState()
    showQuestion(shuffleQ[currentQ]);
}


function showQuestion(question) {
    questionContainer.innerText = question.question
    questions.answers.forEach(answer => {
        var button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', answerQuestion)
        answerBtn.appendchild(button)
    })
}


function answerQuestion(e) {
    var selectedAnswer = e.target
    var correct = selectedAnswer.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerBtn.children).forEach(button => {
        setStatusClass(button, button.dataset.correct);
    })
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
        currentQ++
    }
    else {
        element.classlist.add('wrong');
        x = 5;
        timerVal - x
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

function resetState() {
    while (answerBtn.firstChild) {
        answerBtn.removeChild(answerBtn.firstChild)
    }

}

// Event Listener 

startBtn.addEventListener('click', startGame);