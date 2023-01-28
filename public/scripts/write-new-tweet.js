/**
 * Make new tweet form visible upon clicking on Write a new tweet arrow icon
 * Also scroll down to the form
 * Also Enable textarea automatically
 */

$(document).ready(function() {

  $('.nav-right-btn').click(function() {
    $('#tweet-form').slideToggle(500);
    $('#tweet-text').focus();
    $('html, body').animate({
      scrollTop: $('#tweet-form').offset().top
    }, 1000);
  })
});