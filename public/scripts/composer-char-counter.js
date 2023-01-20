$(document).ready(function() {
  console.log('DOM is ready');
});


const clickHandler = function() {
  const maxLength = 140;
  let remainingChar = maxLength - $(this).val().length;
  let counter = $(this).parents().find('.counter');
  counter.text(remainingChar);
  counter.css('color', counter.text() < 0 ? 'red': '#545149');

}
// $('#tweet-text').keydown(clickHandler);//counts shift, space, delete
// $('#tweet-text').keyup(clickHandler);//counts shift, space, delete
// $('#tweet-text').keypress(clickHandler); //counts the space bar
$('#tweet-text').on('input', clickHandler);//counts delete and space
// $('#tweet-text').change(clickHandler);
// $('#tweet-text').blur(clickHandler);