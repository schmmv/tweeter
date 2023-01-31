/**
 * Make new tweet form visible upon clicking on Write a new tweet arrow icon,
 * scroll down to the form, and enable textarea automatically
 */

$(document).ready(function() {

  $('.nav-right-btn').click(function() {
   
    $('#tweet-form').slideToggle(500);
    $('.container')[0].scrollIntoView();
    $('#tweet-text').focus();
  })

});