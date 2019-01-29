const identifyTweet = (tweet) => {
  // some crazy code needed in here to parse the tweet text, look at type of stuff embedded in the tweet object, etc.

  if (tweet.entities.media) {
    return 'image'
  }

  return 'flat' // hardcoded for flat tweets haha
}