'use strict';

(() => {
  const filterButton = document.querySelector('.filter__toggle');
  const filterPopup = document.querySelector('.filter__popup');
  const popupCloseButton = filterPopup.querySelector('.popup__close');
  const filterForm = document.querySelector('.filter__form');

  filterButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    filterPopup.classList.add('filter__popup--opened');
    document.body.style.overflow = 'hidden';
  });

  popupCloseButton.addEventListener('click', () => {
    filterPopup.classList.remove('filter__popup--opened');
    document.body.style.overflow = '';
  });

  filterForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    filterPopup.classList.remove('filter__popup--opened');
    document.body.style.overflow = '';
  });
})();
