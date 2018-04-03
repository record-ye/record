'use strict';

if (module.hot) {
  module.hot.accept();
}

import 'babel-polyfill';


// styles
import '../styles/index.scss';


$(function () {
  // jQuery is ready

  const scroll = new SmoothScroll('a[href*="#"]');

  // when the images are loaded
  $(window).on('load', function () {
    $('div#loader').removeClass('loading');
  });


  $(document).on('scroll', function () {
    if (window.pageYOffset >= ($('#home').offset().top + $('#home').height() + 10)) {
      $('#main-nav-bar').addClass('active');
    } else {
      $('#main-nav-bar').removeClass('active');
    }

    // big logo paralax 
    $('.front-text-holder').css('top', -(window.pageYOffset / 3.4));

  });


  // grid view for the port
  const $grid = $('#portfolio-grid').isotope({
    // options
    itemSelector: '.grid-item',
    layoutMode: 'fitRows'
  });

  $('#selector li').on('click', function () {
    $grid.isotope({
      filter: '.' + $(this).text().toLowerCase()
    });
    $(this).addClass('active').siblings().removeClass('active');
  });

  // when click on the nav click the button

  $('ul.navbar-nav').on('click', function () {
    if ($('.navbar-toggler').is(':visible')) {
      $('.navbar-toggler').click();
    }
  });

});