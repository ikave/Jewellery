'use strict';

(() => {
  const addButton = document.querySelector('.product__buy-button');
  const popupAdd = document.querySelector('.popup-add');

  const closePopup = () => {
    popupAdd.classList.remove('popup--opened');
    document.body.style.overflow = '';
  };

  if (popupAdd) {
    const popupCloseButton = popupAdd.querySelector('.popup__close');

    addButton.addEventListener('click', (evt) => {
      evt.preventDefault();
      document.body.style.overflow = 'hidden';
      popupAdd.classList.add('popup--opened');
      popupAdd.addEventListener('click', (evt) => {
        if (evt.target === popupAdd) {
          closePopup();
        }
      });
    });

    popupCloseButton.addEventListener('click', () => {
      closePopup();
    });

    window.addEventListener('keydown', (evt) => {
      if (evt.key === 'Escape') {
        closePopup();
      }
    });
  }
})();
