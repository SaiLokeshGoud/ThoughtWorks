'use strict';
window.onload = () => {
  const word = document.getElementById('word');
  const totalLetters = document.getElementById('totalLetters');
  word.addEventListener('input', function () {
    const count = word.value.length;
    totalLetters.innerText = 'Count of total letters: ' + count;
  });
};
