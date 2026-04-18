'use strict';
let interval;
let seconds = 300;
let istimerOn = false;
const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');
const resetButton = document.getElementById('resetButton');

const displaytimer = () => {
  const minutes = Math.floor(seconds / 60);
  const secondsLeft = seconds % 60;
  const sec = (secondsLeft < 10 ? '0' : '') + secondsLeft;
  document.getElementById('timer').textContent = '0' + minutes + ':' + sec;
};

const startTimer = () => {
  istimerOn = true;
  displaytimer();
  interval = setInterval(function () {
    if (seconds <= 0) {
      clearInterval(interval);
      stopButton.disabled = true;
      resetButton.disabled = false;
    } else {
      seconds--;
      displaytimer();
    }
  }, 1000);
};

const stopTimer = () => {
  istimerOn = false;
  clearInterval(interval);
};

const resetTimer = () => {
  stopTimer();
  seconds = 300;
  document.getElementById('timer').textContent = '05:00';
};
window.onload = () => {
  startButton.addEventListener('click', function () {
    if (!istimerOn) {
      startTimer();
      startButton.disabled = true;
      stopButton.disabled = false;
      resetButton.disabled = false;
    }
  });
};

stopButton.addEventListener('click', function () {
  stopTimer();
  startButton.disabled = false;
  stopButton.disabled = true;
});

resetButton.addEventListener('click', function () {
  resetTimer();
  startButton.disabled = false;
  stopButton.disabled = true;
  resetButton.disabled = true;
});
