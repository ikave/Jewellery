'use strict';

(() => {
  const loginButton = document.querySelector('.login');
  const loginPopup = document.querySelector('.popup-login');
  const loginForm = document.querySelector('.login-form');
  const popupCloseButton = loginPopup.querySelector('.popup__close');

  if (loginButton) {
    loginButton.addEventListener('click', (evt) => {
      evt.preventDefault();
      loginPopup.classList.add('popup--opened');
      document.body.style.overflow = 'hidden';
    });

    popupCloseButton.addEventListener('click', () => {
      loginPopup.classList.remove('popup--opened');
      document.body.style.overflow = '';
    });

    loginForm.addEventListener('submit', (evt) => {
      evt.preventDefault();
      loginPopup.classList.remove('popup--opened');
      document.body.style.overflow = '';
    });
  }
})();
