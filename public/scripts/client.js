/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function () {

  $("#tweet-form").submit(function(event) {
    event.preventDefault()
    $.ajax('/tweets', { method: 'POST', data: $(this).serialize()} )
    console.log("data:", $(this).serialize(), "event:", event)
  })



  const data = [
    {
      "user": {
        "name": "matt",
        "avatars": "https://i.imgur.com/73hZDYK.png"
        ,
        "handle": "@wagabooga"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png"
        ,
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@rd" },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    }
  ]
  const createTweetElement = function(tweetOBJ) {
    const $tweet = $(`
    <section class="tweet-container">
      <article class="article-container">
        <header class="article-tweet-header">
          <div class="header-icon-container">
          <img class="user-icon" src="${tweetOBJ.user.avatars}"></img>
            <p class="user-realname">${tweetOBJ.user.name}</p>
          </div>
          <p class="username">${tweetOBJ.user.handle}</p>
        </header>
        <div class="tweet-content-container">
          <p class="tweet-content">${tweetOBJ.content.text}</p>
        </div>
        <footer class="article-tweet-footer">
          <p class="footer-date">${timeago.format(new Date(tweetOBJ.created_at))}</p>
          <div class="footer-icon-container">
            <i class="fas fa-flag flag-icon hover-icon"></i>
            <i class="fas fa-retweet retweet-icon hover-icon"></i>
            <i class="far fa-heart heart-icon hover-icon"></i>
          </div>
        </footer>
      </article>
    </section>
    `)
    return $tweet
  };

  const renderTweets = function(tweets) {
    for (let tweet of tweets){
      let $tweet = createTweetElement(tweet)
      $('.container').append($tweet)
    }
  }

  renderTweets(data);
})