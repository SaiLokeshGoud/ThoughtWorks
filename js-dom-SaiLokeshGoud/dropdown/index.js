'use strict';
window.onload = () => {
  const selectSubject = document.getElementById('selectSubject');
  const togglesubjects = () => {
    subjectNames.classList.toggle('hidden');
  };
  selectSubject.addEventListener('click', togglesubjects);
};
