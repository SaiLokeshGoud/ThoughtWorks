'use strict';
const toggleColor = (box) => {
  const colors = {
    box1: '#C6F4D6',
    box2: '#87CEEB',
    box3: '#FFD7BE',
    box4: '#B2FFFC',
    box5: '#FFB6C1'
  };
  const normalColor = box.style.backgroundColor;
  box.style.backgroundColor = normalColor === '' ? colors[box.id] : '';
};
window.onload = () => {
  const boxes = document.getElementsByClassName('box');
  for (let boxNumber = 0; boxNumber < boxes.length; boxNumber++) {
    boxes[boxNumber].addEventListener('click', function () {
      toggleColor(boxes[boxNumber]);
    });
  }
};
