// filter plugin activation
$(function () {
  $('.circlechart').circlechart();
});

// mobile menu toggler
$('.mobile-menu-icon, .nav-menu .nav-link').click(function () {
  $('.mobile-menu-icon i').toggleClass('fa-bars fa-times');
  $('.nav-bar ul').toggleClass('active');
});
