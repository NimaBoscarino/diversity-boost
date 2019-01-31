let tweets = allTweets

function getTweets(cb) {
  // Initialize
  const oauth = OAuth({
    consumer: {
      key: '***REMOVED***',
      secret: '***REMOVED***'
    },
    signature_method: 'HMAC-SHA1',
    hash_function(base_string, key) {
      return CryptoJS.HmacSHA1(base_string, key).toString(CryptoJS.enc.Base64);
    }
  });

  const request_data = {
    url: 'https://api.twitter.com/1.1/statuses/home_timeline.json',
    method: 'GET',
  };

  // Note: The token is optional for some requests
  const token = {
    key: '***REMOVED***',
    secret: '***REMOVED***'
  };

  $.ajax({
    url: request_data.url,
    type: request_data.method,
    data: oauth.authorize(request_data, token)
  }).done(function(data) {
    // Process your data here
    console.log('wooo', data)
  }).done(function(data) {
    // Process your data here
    cb(data)
  }).catch((e) => console.log(e));
}

$(() => {

  // create button
  let filterButton = $('<button id="filter-button" class="js-global-new-tweet js-tooltip EdgeButton EdgeButton--primary js-dynamic-tooltip">Diversity Boost!</button>')

  filterButton.click(() => {
    let tweetsContainer = $('.stream-container')
    tweetsContainer.empty()

    getTweets((tweets) => {
      tweets.forEach(tweet => {  
        let tweetType = identifyTweet(tweet)
        let tweetElement = tweetTemplates[tweetType](tweet)

        tweetsContainer.append($(tweetElement))
      })  
    })
 
  })

  // add button to nav
  $('.right-actions').append(filterButton)
})