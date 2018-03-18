'use strict';

if (module.hot) {
  module.hot.accept();
}

import 'babel-polyfill';

// styles
import '../styles/index.scss';


$(function () {
  // jQuery is ready

  // when the images are loaded
  $(window).on('load', function () {
    $('#loader').remove();
  });


  $(document).on('scroll', function () {
    console.log(window.pageYOffset);
    if (window.pageYOffset >= ($('#main-header').offset().top + $('#main-header').height() + 35)) {
      $('#main-nav-bar').addClass('active');
    } else {
      $('#main-nav-bar').removeClass('active');
    }
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


});