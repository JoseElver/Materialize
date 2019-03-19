$('.button-collapse').sideNav({
    menuWidth: 300, // Default is 240
    edge: 'left', // Choose the horizontal origin
    closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
  }
);;

$('.carousel.carousel-slider').carousel({full_width: true});

$(document).ready(function(){
    $('.carousel').carousel();
  });


