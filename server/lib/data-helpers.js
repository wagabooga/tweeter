"use strict";

// Simulates the kind of delay we see with network or filesystem operations
const simulateDelay = require("./util/simulate-delay");

// Defines helper functions for saving and getting tweets, using the database `db`
module.exports = function makeDataHelpers(db) {
  return {

    // Saves a tweet to `db`
    saveTweet: function(newTweet, callback) {
      simulateDelay(() => {
        db.tweets.push(newTweet);
        console.log(db.tweets)
        callback(null, true);
      });
    },

    // Get all tweets in `db`, sorted by newest first
    getTweets: function(callback) {
      simulateDelay(() => {
        const sortNewestFirst = (a, b) => a.created_at - b.created_at;
        callback(null, db.tweets.sort(sortNewestFirst));
      });
    }

  };
}

// How to use DataHelpers

// let mydb = {} (declare database)
// let dataHelpers = makeDataHelpers(mydb) (dataHelpers is created by makeDataHelpers and is stored as one big object)
// dataHelpers.saveTweet(newtweet, cb) (here is how we access a savetweet function)
// dataHelpers.getTweets(cb)