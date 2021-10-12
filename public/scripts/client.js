/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
// helper validation function



$(document).ready(function () {

  $("#tweet-form").submit(function (event) {
    event.preventDefault()
    let tweetData = $(this).serialize()

    if (tweetData === null || tweetData.slice(5).length === 0 || tweetData.length > 140 ){
      alert("ERROR")
      return 
    }

    $.ajax('/tweets', { method: 'POST', data: $(this).serialize() })
      .then((res) => { loadTweets() })
  })

  const loadTweets = function () {
    $.ajax('/tweets', { method: 'GET', dataType: "json" }).then((res) => {
      renderTweets(res)
    }
    )

  }
  loadTweets()
  // hard coded data

  // section boiler-plate
  const createTweetElement = function (tweetOBJ) {
    const $tweet = $(`
    <section class="tweet-container hovernow">
      <article class="article-container">
        <header class="article-tweet-header">
          <div class="header-icon-container">
          <img class="user-icon" src="${tweetOBJ.user.avatars}"></img>
            <p class="user-realname">${tweetOBJ.user.name}</p>
          </div>
          <p class="username">${tweetOBJ.user.handle}</p>
        </header>
        <div class="tweet-content-container">
          <p class="tweet-content">${escape(tweetOBJ.content.text)}</p>
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
  const escape = function (str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };
  // render all tweets by looping through data
  const renderTweets = function (tweets) {
    for (let tweet of tweets) {
      let $tweet = createTweetElement(tweet)
      $('.container').prepend($tweet)
    }
  }
})