'use strict';
import Swiper from './vendors/swiper-bundle';

(() => {
  const slider = document.querySelector('.slider');

  if (slider) {
    slider.classList.remove('slider--nojs');

    const swiper = new Swiper('.slider__container', {
      slidesPerGroup: 2,
      slidesPerView: 2,
      centeredSlides: false,
      spaceBetween: 30,
      centeredSlidesBounds: true,
      loop: true,
      wrapperClass: 'slider__wrapper',

      breakpoints: {
        320: {
          pagination: {
            type: 'fraction',
            clickable: false,
            renderFraction: function (currentClass, totalClass) {
              return '<span class="' + currentClass + '"></span>' +
                      ' of ' +
                      '<span class="' + totalClass + '"></span>';
            }
          },
        },
        768: {
          pagination: {
            renderBullet: function (index, className) {
              return '<button class="' + className + '">' + (index + 1) + '</button>';
            }
          },
        },
        1024: {
          slidesPerView: 4,
          slidesPerGroup: 4,
          allowTouchMove: false,
        },
      },

      pagination: {
        el: '.slider__pagination',
        type: 'bullets',
        clickable: true,
        renderBullet: function (index, className) {
          return '<button class="' + className + '">' + (index + 1) + '</button>';
        }
      },

      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }

})();
