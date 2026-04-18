'use strict';
window.onload = () => {
  const body = document.getElementById('body');
  const toggleTheme = document.getElementById('toggleTheme');
  toggleTheme.addEventListener('click', function () {
    if (body.classList.contains('backGround')) {
      toggleTheme.innerText = ' Dark ';
      body.classList.remove('backGround');
    } else {
      toggleTheme.innerText = ' White ';
      body.classList.add('backGround');
    }
  });
};
