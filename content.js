$(() => {
  // create button
  let filterButton = $('<button id="filter-button" class="js-global-new-tweet js-tooltip EdgeButton EdgeButton--primary js-dynamic-tooltip">Diversity Boost!</button>')

  filterButton.click(() => {
    let tweetsContainer = $('.stream-container')
    tweetsContainer.empty()
    tweetsContainer.append($(tweetTemplate))
  })

  // add button to nav
  $('.right-actions').append(filterButton)
})