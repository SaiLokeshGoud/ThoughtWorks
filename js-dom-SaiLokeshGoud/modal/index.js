'use strict';
const openModalButton = document.getElementById('openModalButton');
const modal = document.getElementById('modal');
const close = document.getElementById('close');
const submit = document.getElementById('form');
const openModal = () => {
  modal.style.display = 'block';
  openModalButton.style.display = 'none';
};
const closeModal = () => {
  modal.style.display = 'none';
  openModalButton.style.display = 'block';
};
openModalButton.addEventListener('click', openModal);
close.addEventListener('click', closeModal);
