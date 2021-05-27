'use strict';

(() => {
  const pageHeader = document.querySelector('.page-header');
  const headerToggle = document.querySelector('.page-header__toggle');

  if (pageHeader) {
    pageHeader.classList.remove('page-header--nojs');
  }

  if (headerToggle) {
    headerToggle.addEventListener('click', function () {
      if (pageHeader.classList.contains('page-header--closed')) {
        pageHeader.classList.remove('page-header--closed');
        pageHeader.classList.add('page-header--opened');
        document.body.classList.add('hidden');
      } else {
        pageHeader.classList.add('page-header--closed');
        pageHeader.classList.remove('page-header--opened');
        document.body.classList.remove('hidden');
      }
    });
  }
})();

(() => {
  const swiper = new Swiper('.swiper-container', {
    slidesPerGroup: 2,
    slidesPerView: 2,
    centeredSlides: false,
    spaceBetween: 30,
    centeredSlidesBounds: true,
    loop: true,

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
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
})();

(() => {
  const faqAccordion = document.querySelectorAll('.faq__item');
  const faqButtons = document.querySelectorAll('.faq__toggle');

  // if (faqAccordion) {
    faqAccordion.forEach((item, index) => {
      item.addEventListener('click', () => {
        item.classList.toggle('faq__item--opened');
        faqButtons[index].classList.toggle('faq__toggle--opened');
      })
    })
  // }

})();
