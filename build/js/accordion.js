'use strict';

(() => {
  const filter = document.querySelector('.filter');
  const faqAccordion = document.querySelector('.faq');

  if (faqAccordion) {
    const faqAccordionItems = document.querySelectorAll('.faq__item dt');
    const faqToggles = document.querySelectorAll('.faq__toggle');

    faqAccordion.classList.remove('faq--nojs');
    faqAccordionItems.forEach((item, index) => {
      item.addEventListener('click', () => {
        item.parentElement.classList.toggle('faq__item--opened');
        faqToggles[index].classList.toggle('faq__toggle--opened');
      });
    });

  }

  if (filter) {
    const filterAccordion = document.querySelectorAll('.filter__heading');
    const filterButton = document.querySelectorAll('.filter__list-toggle');
    const filterLists = document.querySelectorAll('.filter__list');

    filter.classList.remove('filter--nojs');
    filterAccordion.forEach((item, index) => {
      item.addEventListener('click', () => {
        filterLists[index].classList.toggle('filter__list--opened');
        filterButton[index].classList.toggle('filter__list-toggle--opened');
      })
    })
  }
})()
