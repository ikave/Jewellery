'use strict';

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
