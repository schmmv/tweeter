/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
  

/**
 * Function to escape text to prevent cross-site scripting
 * @returns {string} str
 */
const escapeText = function(str) {
  let div = document.createElement("div");
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}

/**
 * Function to generate the DOM structure for a tweet
 * @param {Object} tweet 
 * @returns an <article> element containing the entire HTML structure of the tweet
 */
const createTweetElement = function(tweet) {
  const avatar = tweet.user.avatars;
  const username = tweet.user.name;
  const handle = tweet.user.handle;
  const text = escapeText(tweet.content.text); //to protect against any malicious script input
  const time = timeago.format(tweet.created_at);

  const $tweet = $(`
    <article class="tweet">
      <header class="tweets-header">
        <div class="who-tweeted">
          <img src="${avatar}" alt="mini avatar">
          <h3>${username}</h3>
        </div>
        <div class="handle">
          <span>${handle}</span>
        </div>
      </header>
      <p>${text}</p>
      <footer>
        <div>
          <time>${time}</time>
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
   //reset the form for another tweet
   $('#tweet-text').val('');
   $('.counter').text('140');
   
  for (const tweet of tweets) {
    const $tweet = createTweetElement(tweet);
    $('.tweets-display').prepend($tweet); 
  }
};

//Function to perform get request and render tweets
const loadTweets = function() {
  return $.get('/tweets')
  // .then(function(response) {
  //   renderTweets(response);
  // })
  // .catch(err => console.error(err));
};


$(document).ready(function() {
  
  //AJAX request to send (POST) tweet text to the server
  $(".tweet-form").submit(function(event) {
    $(".tweet-form-error").hide();
    event.preventDefault();
    const tweetText = $(this).find('#tweet-text').val();
    if (tweetText === '') {
      return $(".tweet-form-error").css({display: 'flex', 'align-items': 'center'}).html('<i class="fa-solid fa-triangle-exclamation"></i>Too long. Plz rspct our arbitrary limit of 140 chars. #kthxbye.<i class="fa-solid fa-triangle-exclamation"></i>').slideDown();
    }
    if (tweetText.length > 140) { ///better way than hardcoding this number??
      return $(".tweet-form-error").css({display: 'flex', 'align-items': 'center'}).html('<i class="fa-solid fa-triangle-exclamation"></i>You Exceeded the Maximum Allowable Character Length.<i class="fa-solid fa-triangle-exclamation"></i>').slideDown();
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

});
