'use strict';

function doThing(event) {
  event.preventDefault();
  let {
    consumerKey,
    consumerSecret,
    tokenKey,
    tokenSecret
  } = event.target.elements

  consumerKey = consumerKey.value
  consumerSecret = consumerSecret.value
  tokenKey = tokenKey.value
  tokenSecret = tokenSecret.value

  let vals = {
    consumerKey,
    consumerSecret,
    tokenKey,
    tokenSecret
  }

  // Save it using the Chrome extension storage API.
  chrome.storage.sync.set(vals, function() {
    console.log('Settings saved');
  });
}

document.querySelector('form').addEventListener('submit', doThing);

// Read it using the storage API
chrome.storage.sync.get(
  ['consumerKey', 'consumerSecret', 'tokenKey', 'tokenSecret'], 
  function({ consumerKey, consumerSecret, tokenKey, tokenSecret}) {
    document.querySelector('input[name="consumerKey"]').defaultValue = consumerKey
    document.querySelector('input[name="consumerSecret"]').defaultValue = consumerSecret
    document.querySelector('input[name="tokenKey"]').defaultValue = tokenKey
    document.querySelector('input[name="tokenSecret"]').defaultValue = tokenSecret
  }
);