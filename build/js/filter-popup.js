'use strict';

(() => {
  const filterPopup = document.querySelector('.filter__popup');

  const closePopup = () => {
    filterPopup.classList.remove('filter__popup--opened');
    document.body.style.overflow = '';
  };

  if (filterPopup) {
    const filterButton = document.querySelector('.filter__toggle');
    const popupCloseButton = filterPopup.querySelector('.popup__close');
    const filterForm = document.querySelector('.filter__form');

    filterButton.addEventListener('click', (evt) => {
      evt.preventDefault();
      filterPopup.classList.add('filter__popup--opened');
      document.body.style.overflow = 'hidden';

      filterPopup.addEventListener('click', (evt) => {
        if (evt.target === filterPopup) {
          closePopup();
        }
      });
    });

    popupCloseButton.addEventListener('click', () => {
      closePopup();
    });

    filterForm.addEventListener('submit', (evt) => {
      evt.preventDefault();
      closePopup();
    });

    window.addEventListener('keydown', (evt) => {
      if (evt.key === 'Escape') {
        closePopup();
      }
    });
  }
})();
