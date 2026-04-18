'use strict';
const email = document.getElementById('email');
const invalidEmail = document.getElementById('invalidEmail');
const password = document.getElementById('password');
const passwordLength = document.getElementById('passwordLength');
const confirmPassword = document.getElementById('confirmPassword');
const incorrectPassword = document.getElementById('incorrectPassword');

email.addEventListener('input', function () {
  if (email.validity.valid || email.value === '') {
    invalidEmail.textContent = '';
  } else {
    invalidEmail.textContent = 'Invalid email address';
  }
});

password.addEventListener('input', function () {
  if (password.value === '' || password.value.length >= 6) {
    passwordLength.textContent = '';
  } else {
    passwordLength.textContent = 'Password must be at least 6 letters';
  }
});

confirmPassword.addEventListener('input', function () {
  if (confirmPassword.value === '' || confirmPassword.value === password.value) {
    incorrectPassword.textContent = '';
  } else {
    incorrectPassword.textContent = 'Password does not match';
  }
});
