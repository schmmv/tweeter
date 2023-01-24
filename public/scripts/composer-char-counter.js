$(document).ready(function() {
  
  const clickHandler = function() {
    const maxLength = 140;

    let remainingChar = maxLength - $(this).val().length;
    let counter = $(this).parents().find('.counter');
    counter.text(remainingChar);
    if (counter.text() < 0) {
      counter.addClass('counter-err');
    } else {
      counter.removeClass('counter-err');
    }
  }

  $('#tweet-text').on('input', clickHandler);//counts delete and space
});


// const clickHandler1 = function(event) {
  //   console.log(event.type);
  // }
  // $('#tweet-text').keydown(clickHandler1);//counts shift, space, delete
  // $('#tweet-text').keyup(clickHandler1);//counts shift, space, delete
  // $('#tweet-text').keypress(clickHandler1); //counts the space bar
    // $('#tweet-text').change(clickHandler1);
    // $('#tweet-text').blur(clickHandler1);