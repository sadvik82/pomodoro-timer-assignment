let timer;
let timeLeft = 1500;
let running = false;

const display = document.querySelector(".timer-display");
const heading = document.querySelector("h1");
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");
const shortBreakBtn = document.getElementById("short-break");
const longBreakBtn = document.getElementById("long-break");
const alarm = document.getElementById("alarm");

function updateDisplay() {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    display.textContent = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
}

function startTimer() {
    if (!running) {
        running = true;
        timer = setInterval(() => {
            if (timeLeft > 0) {
                timeLeft--;
                updateDisplay();
            } else {
                clearInterval(timer);
                running = false;
                alarm.play();
                alert("Time's up!");
            }
        }, 1000);
    }
}

function stopTimer() {
    clearInterval(timer);
    running = false;
}

function resetTimer() {
    stopTimer();
    timeLeft = 1500;
    heading.textContent = "Pomodoro Timer";
    updateDisplay();
}

function setShortBreak() {
    stopTimer();
    timeLeft = 300;
    heading.textContent = "Short Break";
    updateDisplay();
}

function setLongBreak() {
    stopTimer();
    timeLeft = 900;
    heading.textContent = "Long Break";
    updateDisplay();
}

startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
resetBtn.addEventListener("click", resetTimer);
shortBreakBtn.addEventListener("click", setShortBreak);
longBreakBtn.addEventListener("click", setLongBreak);

updateDisplay();