
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
const oauth_headers = "OAuth " + oauth_string

console.log(oauth_headers)

$.ajax({
  url: request_data.url,
  type: request_data.method,
  headers: {
    'Content-Type': 'application/json'
  },
  beforeSend: function (jqXHR, settings) {
    jqXHR.setRequestHeader('Authorization', oauth_headers);
  }

}).done(function(data) {
  // Process your data here
  console.log(data)
}).catch((e) => console.log(e));