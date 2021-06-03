'use strict';

(() => {
  const loginButton = document.querySelectorAll('.login');
  const loginPopup = document.querySelector('.popup-login');
  const loginForm = document.querySelector('.login-form');
  const popupCloseButton = loginPopup.querySelector('.popup__close');

  const closePopup = () => {
    loginPopup.classList.remove('popup--opened');
    document.body.style.overflow = '';
  };

  if (loginButton) {
    loginButton.forEach((item) => {
      item.addEventListener('click', (evt) => {
        evt.preventDefault();
        loginPopup.classList.add('popup--opened');
        document.body.style.overflow = 'hidden';
        loginPopup.addEventListener('click', (evt) => {
          if (evt.target === loginPopup) {
            closePopup();
          }
        });
      });
    })

    popupCloseButton.addEventListener('click', () => {
      closePopup();
    });

    loginForm.addEventListener('submit', (evt) => {
      evt.preventDefault();
      closePopup();
    });

    window.addEventListener('keydown', (evt) => {
      if (evt.key === 'Escape') {
        closePopup();
      }
    })
  }
})();
