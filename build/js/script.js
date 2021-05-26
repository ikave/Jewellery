'use strict';
var pageHeader = document.querySelector('.page-header');
var headerToggle = document.querySelector('.page-header__toggle');

pageHeader.classList.remove('page-header--nojs');

headerToggle.addEventListener('click', function () {
  if (pageHeader.classList.contains('page-header--closed')) {
    pageHeader.classList.remove('page-header--closed');
    pageHeader.classList.add('page-header--opened');
  } else {
    pageHeader.classList.add('page-header--closed');
    pageHeader.classList.remove('page-header--opened');
  }
});

const swiper = new Swiper('.swiper-container', {
  slidesPerGroup: 2,
  slidesPerView: 2,
  centeredSlides: false,
  spaceBetween: 30,
  centeredSlidesBounds: true,

  breakpoints: {
    1024: {
      slidesPerView: 4,
      slidesPerGroup: 4,
    },
  },


});
