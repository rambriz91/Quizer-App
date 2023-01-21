// variables 
var timerEl = document.querySelector("#timer-text");
var startBtn = document.querySelector('#start');

var timer;
var timerVal;
var isWin = false;


// Functions 

function startGame() {
    isWin = false;
    timerVal = 60;
    startBtn.disabled = true;
    startTimer()
}

function startTimer() {
    timer = setInterval(function () {
        timerVal--;
        timerEl.textContent = timerVal;
        if (timerVal >= 0) {
            // Tests if win condition is met
            if (isWin && timerVal > 0) {
                // Clears interval and stops timer
                clearInterval(timer);
                winGame();
            }
        }
        // Tests if time has run out
        if (timerVal === 0) {
            // Clears interval
            clearInterval(timer);
            loseGame();
        }
    }, 1000);
}



// Event Listener 

startBtn.addEventListener('click',startGame);

