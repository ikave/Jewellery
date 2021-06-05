'use strict';
import Swiper from './vendors/swiper-bundle';

(function() {
  const breakpoint = window.matchMedia( '(min-width:768px)' );

  let mySwiper;

  const breakpointChecker = function() {

    if ( breakpoint.matches === true ) {

    if ( mySwiper !== undefined ) mySwiper.destroy( true, true );

    return;

      } else if ( breakpoint.matches === false ) {
        return enableSwiper();
      }
  };


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

  breakpoint.addListener(breakpointChecker);

  // kickstart
  breakpointChecker();

})();
