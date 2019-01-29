# Diversity Boost, a Chrome extension

A Chrome extension that adds a "Diversity Boost!" button to your twitter home feed.

## Installation instructions:

In Chrome, go to "More Tools" -> Extensions. Then, in the top-right corner toggle on the "Developer Mode". This will reveal a bar of buttons, including one that says "Load unpacked". Click that button, and in the resulting popup navigate to the folder for this project. Select the folder! Congratulations, you have installed the extension!

## Usage:

After installing the extension, navigate to Twitter.com. On the home page you'll see a "Diversity Boost!" button at the top right. Click this button.

## Developer instructions + notes:

The plugin currently displays around 200 hard-coded tweets (for my timeline), the data for which that can be found in `tweets.js`. This is to get around making API requests for now. Every time that code is changed, to actually see the changes you'll have to go back to "More Tools" -> Extensions, and click the little refresh icon on the card for the extension.

## Structure

One of the goals for the extension is to make the reorganized tweets look just like regular tweets. To do this, we have to structure the tweets using the HTML that Twitter expects. There are different "types" of tweets.

1. Flat Tweets
2. Picture tweets
3. Video tweets
4. Retweets
5. Replies
6. Favourites

I've listed these in order of importance. By looking at the tweet data that we receive (look at `tweets.js` for examples) we decide what *kind* of tweet it is, and render the tweet appropriately by selecting the proper template.

To do this, we need two things:

1. A function to identify the type of tweet: `identifyTweet.js`
2. A suite of functions used for generating different types of tweet elements: `tweetTemplates.js`


## The story so far!

Flat tweet rendering is *almost* complete. The process was to copy over the HTML for a flat tweet from the actual Twitter timeline, and then I made a function that returns a string of that actual tweet's HTML. That function uses a template literal to embed the tweet data in the HTML. Basially, we have to go and replace all of the tweet text, user avatar URLS, and tweet ID's in the HTML attributes to make all of the functionality work (e.g. liking a tweet, hovering over the username, etc.)

What we need for now is:

1. More tweet templates - Rosy, Nima
2. Logic for figuring out tweet types - Rosy, Nima
3. OAuth-ed requests to Twitter API to fetch live tweets - Nima (for now)