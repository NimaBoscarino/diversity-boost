const identifyTweet = (tweet) => {
  // some crazy code needed in here to parse the tweet text, look at type of stuff embedded in the tweet object, etc.

  if (tweet.retweeted_status && !tweet.retweeted_status.entities.media) {
    return 'retweet'
  } else if (tweet.entities.media) {
    return 'image'
  } else {
    return 'flat' // hardcoded for flat tweets haha
  }
}