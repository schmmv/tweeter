/**
 * Scroll to top button to display when user starts to scroll down
 */
$(document).ready(function() {

  const btn = $('#scroll-btn');
  $(window).on('scroll', function() {
    if($(window).scrollTop() > 300) {
      btn.css({ display: 'block' });
    
  } else {
    btn.css({ display: 'none' });
  }});

  btn.click(function() {
    $(window).scrollTop(0);
  });

})