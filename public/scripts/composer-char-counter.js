/**
 * Upon page DOM is ready, calculate number of characters in tweet textarea, and live-update the counter
 * Counter turns red when < 0
 */
$(document).ready(function() {
 
  $('#tweet-text').on('input', function() {
    
    const maxLength = 140;
    let remainingChar = maxLength - $(this).val().length;
    let counter = $(this).parents().find('.counter');

    counter.text(remainingChar);

    if (counter.text() < 0) {
      counter.addClass('counter-err');
    } else {
      counter.removeClass('counter-err');
    }
  });
});

