/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {
/**
 * Function to generate the DOM structure for a tweet
 * @param {Object} tweet 
 * @returns an <article> element containing the entire HTML structure of the tweet
 */
  const createTweetElement = function(tweet) {
    const $tweet = $(`
      <article class="tweet">
        <header class="tweets-header">
          <div class="who-tweeted">
            <img src="${tweet.user.avatars}" alt="mini avatar">
            <h3>${tweet.user.name}</h3>
          </div>
          <div class="handle">
            <span>${tweet.user.handle}</span>
          </div>
        </header>
        <p>${tweet.content.text}</p>
        <footer>
          <div>
            <time>${timeago.format(tweet.created_at)}</time>
          </div>
        <div class="article-icons">
          <i class="fa-solid fa-flag"></i>
          <i class="fa-solid fa-retweet"></i>
          <i class="fa-solid fa-heart"></i>
        </div>
        </footer>
    </article>`)
  return $tweet;
  };

  /**
   * Function that appends each <article> tweet element to the end of (but within) the <main class="container">
   * @param {Array of tweet Objects} tweets 
   */
  const renderTweets = function(tweets) {
    for (const tweet of tweets) {
      const $tweet = createTweetElement(tweet);
      $('.container').append($tweet); 
    }
  };



//AJAX request to send (POST) tweet text to the server
$(".tweet-form").submit(function(event) {
  event.preventDefault();
  const tweetText = $(this).find('#tweet-text').val();
  if (tweetText === '') {
    return alert('you submitted nothing');
  }
  if (tweetText.length > 140) { ///better way than hardcoding this number??
    return alert('You Exceeded the Maximum Allowable Character Length');
  }
  const formData = $(this).serialize();
 
  $.post('/tweets', formData)
  .then(function(response) {
    return loadTweets();
  })
  .then(function(response) {
      renderTweets(response);
    })
  .catch(err => console.error(err));
});

//Function to perform get request and render tweets
const loadTweets = function() {
  return $.get('/tweets')
  // .then(function(response) {
  //   renderTweets(response);
  // })
  // .catch(err => console.error(err));
}


});
