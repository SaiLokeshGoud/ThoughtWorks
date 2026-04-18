'use strict';
const searchBar = document.getElementById('searchBar');
const items = document.querySelectorAll('.item');
const startSearch = () => {
  const searchItem = searchBar.value.toLowerCase();
  for (let item = 0; item < items.length; item++) {
    const lowerCaseText = items[item].textContent.toLowerCase();
    const toShow = lowerCaseText.includes(searchItem);
    items[item].classList.toggle('hidden', !toShow);
  }
};
searchBar.addEventListener('input', startSearch);
