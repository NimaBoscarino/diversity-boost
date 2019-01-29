let tweets = allTweets


function getTweets2(cb) {
  // Initialize
  const oauth = OAuth({
    consumer: {
      key: '***REMOVED***',
      secret: '***REMOVED***'
    },
    signature_method: 'HMAC-SHA1',
    hash_function(base_string, key) {
      return CryptoJS.HmacSHA1(base_string, key).toString(CryptoJS.enc.Base64).toString(CryptoJS.enc.Hex);
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

  let oauth_object = oauth.authorize(request_data, token)

  function score(key) {
    if (key === "oauth_consumer_key") {
      return 7
    } else if (key === "oauth_token") {
      return 6
    } else if (key === "oauth_signature_method") {
      return 5
    } else if (key === "oauth_timestamp") {
      return 3
    } else if (key === "oauth_nonce") {
      return 2
    } else if (key === "oauth_version") {
      return 1
    } else if (key === "oauth_signature") {
      return 0
    }
  }

  let oauth_array = Object.keys(oauth_object)
  .sort((a, b) => {
    return score(b) - score(a)
  })
  .map(key => `${key}="${oauth_object[key]}"`)

  let oauth_string = oauth_array.join(',')
  const oauth_headers = oauth.toHeader(oauth.authorize(request_data, token))


  console.log(oauth_headers)

  $.ajax({
    url: request_data.url,
    type: request_data.method,
    headers: {
      'Content-Type': 'application/json'
    },
    beforeSend: function (jqXHR, settings) {
      jqXHR.setRequestHeader('Authorization', "OAuth " + oauth_string);
    }

  }).done(function(data) {
    // Process your data here
    cb(data)
  }).catch((e) => console.log(e));

}


function getTweets(cb) {

  var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://api.twitter.com/1.1/statuses/home_timeline.json?count",
    "method": "GET",
    "headers": {
      "Content-Type": "application/json",
      "Authorization": "OAuth oauth_consumer_key=\"***REMOVED***\",oauth_token=\"***REMOVED***\",oauth_signature_method=\"HMAC-SHA1\",oauth_timestamp=\"1548741113\",oauth_nonce=\"sSDiw478vWy\",oauth_version=\"1.0\",oauth_signature=\"DpIThnu5iSHogKw%2FR9v4v6OGj0k%3D\"",
      "cache-control": "no-cache",
    },
    "processData": false,
    "data": ""
  }
  
  $.ajax(settings).done(function (response) {
    cb(response);
  });  

}



$(() => {

  // create button
  let filterButton = $('<button id="filter-button" class="js-global-new-tweet js-tooltip EdgeButton EdgeButton--primary js-dynamic-tooltip">Diversity Boost!</button>')

  filterButton.click(() => {
    let tweetsContainer = $('.stream-container')
    tweetsContainer.empty()

    // getTweets2((tweets) => {
    //   tweets.forEach(tweet => {      
    //     tweetsContainer.append($(tweetTemplate(tweet)))
    //   })  
    // })

      tweets.forEach(tweet => {  
        let tweetType = identifyTweet(tweet)
        let tweetElement = tweetTemplates[tweetType](tweet)

        tweetsContainer.append($(tweetElement))
      })  

    /* FOR LATER, don't kill heroku now
    // get tweets from server
    $.get('https://diversity-filter.herokuapp.com', (tweets) => {
      console.log('TWEETS!', tweets)

      tweets.forEach(tweet => {      
        tweetsContainer.append($(tweetTemplate(tweet)))
      })
    })
    */
 
  })

  // add button to nav
  $('.right-actions').append(filterButton)
})