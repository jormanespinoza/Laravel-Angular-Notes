'use strict';

$(document).ready(function() {
  $('.button-collapse').sideNav({
    menuWidth: 280, // Default is 300
    edge: 'left', // Choose the horizontal origin
    closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
    draggable: true // Choose whether you can drag to open on touch screens
  });
  $('select').material_select();
  $(".dropdown-button").dropdown();
});

document.addEventListener("DOMContentLoaded", function() {
  $('.preloader-background').delay(1700).fadeOut('slow');

  $('.preloader-wrapper')
    .delay(1700)
    .fadeOut();
});
