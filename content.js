$(() => {
  // create button
  let filterButton = $('<button id="filter-button" class="js-global-new-tweet js-tooltip EdgeButton EdgeButton--primary js-dynamic-tooltip">Diversity Boost!</button>')

  filterButton.click(() => {
    let tweetsContainer = $('.stream-container')
    tweetsContainer.empty()

    // get tweets from server
    $.get('https://diversity-filter.herokuapp.com', (tweets) => {
      console.log('TWEETS!', tweets)

      tweets.forEach(tweet => {      
        tweetsContainer.append($(tweetTemplate(tweet)))
      })
    })
 
  })

  // add button to nav
  $('.right-actions').append(filterButton)
})