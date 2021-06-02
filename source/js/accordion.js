'use strict';

(() => {
  const filterAccordion = document.querySelectorAll('.filter__heading');
  const filterButton = document.querySelectorAll('.filter__list-toggle');
  const filterLists = document.querySelectorAll('.filter__list');

  if (filterAccordion) {
    filterAccordion.forEach((item, index) => {
      item.addEventListener('click', () => {
        filterLists[index].classList.toggle('filter__list--opened');
        filterButton[index].classList.toggle('filter__list-toggle--opened');
      })
    })
  }
})()
