/******/ "use strict";
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
!function() {
/*!********************************!*\
  !*** ./source/js/accordion.js ***!
  \********************************/


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

}();
// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
!function() {
/*!*************************************!*\
  !*** ./source/js/add-cart-popup.js ***!
  \*************************************/


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

}();
// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
!function() {
/*!***************************!*\
  !*** ./source/js/menu.js ***!
  \***************************/


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

}();
// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
!function() {
/*!***********************************!*\
  !*** ./source/js/filter-popup.js ***!
  \***********************************/


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

}();
// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
!function() {
/*!**********************************!*\
  !*** ./source/js/login-popup.js ***!
  \**********************************/


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

}();
// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
!function() {
/*!*************************************!*\
  !*** ./source/js/slider-product.js ***!
  \*************************************/


(function() {

  // breakpoint where swiper will be destroyed
  // and switches to a dual-column layout
  const breakpoint = window.matchMedia( '(min-width:768px)' );

  // keep track of swiper instances to destroy later
  let mySwiper;

  //////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////

  const breakpointChecker = function() {

    // if larger viewport and multi-row layout needed
    if ( breakpoint.matches === true ) {

      // clean up old instances and inline styles when available
    if ( mySwiper !== undefined ) mySwiper.destroy( true, true );

    // or/and do nothing
    return;

      // else if a small viewport and single column layout needed
      } else if ( breakpoint.matches === false ) {

        // fire small viewport version of swiper
        return enableSwiper();

      }

  };

  //////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////

  const enableSwiper = function() {

    mySwiper = new Swiper('.product__slider', {
      slidesPerGroup: 1,
      slidesPerView: 1,
      centeredSlides: false,
      spaceBetween: 30,
      centeredSlidesBounds: true,
      loop: true,
      slideClass: 'product__slide',
      wrapperClass: 'product__slider-wrapper',

      breakpoints: {
        320: {
          pagination: {
            type: 'fraction',
            clickable: false,
          },
        },
      },

      pagination: {
        el: '.product__pagination',
        type: 'fraction',
        clickable: false,
        renderFraction: function (currentClass, totalClass) {
          return '<span class="' + currentClass + '"></span>' +
                  ' of ' +
                  '<span class="' + totalClass + '"></span>';
        }
      },
    });

  };

  //////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////

  // keep an eye on viewport size changes
  breakpoint.addListener(breakpointChecker);

  // kickstart
  breakpointChecker();



})(); /* IIFE end */

}();
// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
!function() {
/*!*************************************!*\
  !*** ./source/js/slider-popular.js ***!
  \*************************************/


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

}();
