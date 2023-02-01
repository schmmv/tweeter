/**
 * Display Scroll-to-top button when user scrolls down
 * Scroll back to top when button is clicked
 */
$(document).ready(function() {

  const btn = $('#scroll-btn');

  $(window).on('scroll', function() {

    if ($(window).scrollTop() > 300) {
      btn.css({ display: 'block' });
    
    } else {
      btn.css({ display: 'none' });
    }
  });

  btn.click(function() {

    $(window).scrollTop(0);
  });
});