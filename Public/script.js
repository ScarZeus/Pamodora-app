let timer;
let isRunning = false;
let minutes = 25;
let seconds = 0;

const startButton = document.getElementById('start');
const resetButton = document.getElementById('reset');
const minutesDisplay = document.getElementById('minutes');
const secondsDisplay = document.getElementById('seconds');

startButton.addEventListener('click', () => {
    if (!isRunning) {
        isRunning = true;
        timer = setInterval(startTimer, 1000);
        startButton.textContent = 'Pause';
    } else {
        isRunning = false;
        clearInterval(timer);
        startButton.textContent = 'Start';
    }
});

resetButton.addEventListener('click', () => {
    isRunning = false;
    clearInterval(timer);
    minutes = 25;
    seconds = 0;
    updateDisplay();
    startButton.textContent = 'Start';
});

function startTimer() {
    if (seconds === 0 && minutes === 0) {
        clearInterval(timer);
        alert('Pomodoro session complete!');
        resetTimer();
        return;
    }

    if (seconds === 0) {
        minutes--;
        seconds = 59;
    } else {
        seconds--;
    }

    updateDisplay();
}

function updateDisplay() {
    minutesDisplay.textContent = minutes < 10 ? `0${minutes}` : minutes;
    secondsDisplay.textContent = seconds < 10 ? `0${seconds}` : seconds;
}

function resetTimer() {
    minutes = 25;
    seconds = 0;
    updateDisplay();
}
