'use strict';
window.onload = () => {
  const enter = document.getElementById('enter');
  const add = document.getElementById('add');
  const notes = document.getElementById('notes');
  add.addEventListener('click', function () {
    const addContent = document.createElement('p');
    const input = enter.value;
    addContent.innerText = input;
    notes.appendChild(addContent);
    enter.value = ' ';
  });
};
