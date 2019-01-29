var tweetTemplate = (tweet) => `<li class="js-stream-item stream-item stream-item
" data-item-id="${tweet.id_str}" id="stream-item-tweet-${tweet.id_str}" data-item-type="tweet" data-suggestion-json="{&quot;suggestion_details&quot;:{&quot;suggestion_type&quot;:&quot;RankedTimelineTweet&quot;,&quot;controller_data&quot;:&quot;DAABCgABAAAIRAECAAEAAA==&quot;},&quot;tweet_ids&quot;:&quot;${tweet.id_str}&quot;,&quot;scribe_component&quot;:&quot;tweet&quot;}">
    


  <div class="tweet js-stream-tweet js-actionable-tweet js-profile-popup-actionable dismissible-content
       original-tweet js-original-tweet
      
      
       has-cards dismissible-content
" data-tweet-id="${tweet.id_str}" data-item-id="${tweet.id_str}" data-permalink-path="/${tweet.user.screen_name}/status/${tweet.id_str}" data-conversation-id="${tweet.id_str}" data-tweet-nonce="${tweet.id_str}-c5ba9960-5715-4a66-a17d-3173f43a4dfd" data-tweet-stat-initialized="true" data-screen-name="${tweet.user.screen_name}" data-name="${tweet.user.name}" data-user-id="${tweet.user.id}" data-you-follow="true" data-follows-you="false" data-you-block="false" data-reply-to-users-json="[{&quot;id_str&quot;:&quot;${tweet.id_str}&quot;,&quot;screen_name&quot;:&quot;ASpittel&quot;,&quot;name&quot;:&quot;Ali Spittel \ud83d\udc81&quot;,&quot;emojified_name&quot;:{&quot;text&quot;:&quot;Ali Spittel \ud83d\udc81&quot;,&quot;emojified_text_as_html&quot;:&quot;Ali Spittel \u003cspan class=\&quot;Emoji Emoji--forLinks\&quot; style=\&quot;background-image:url('https:\/\/abs.twimg.com\/emoji\/v2\/72x72\/1f481.png')\&quot; title=\&quot;Information desk person\&quot; aria-label=\&quot;Emoji: Information desk person\&quot;\u003e&amp;nbsp;\u003c\/span\u003e\u003cspan class=\&quot;visuallyhidden\&quot; aria-hidden=\&quot;true\&quot;\u003e\ud83d\udc81\u003c\/span\u003e&quot;}}]" data-disclosure-type="" data-component-context="suggest_ranked_timeline_tweet">

    <div class="context">
      
      
    </div>

    <div class="content">
      

      

      
      <div class="stream-item-header">
          <a class="account-group js-account-group js-action-profile js-user-profile-link js-nav" href="/${tweet.user.screen_name}" data-user-id="${tweet.user.id}">
      <img class="avatar js-action-profile-avatar" src="${tweet.user.profile_image_url}" alt="">
    <span class="FullNameGroup">
      <strong class="fullname show-popup-with-id u-textTruncate " data-aria-label-part="">${tweet.user.name}</strong><span>‏</span><span class="UserBadges"></span><span class="UserNameBreak">&nbsp;</span></span><span class="username u-dir u-textTruncate" dir="ltr" data-aria-label-part="">@<b>${tweet.user.screen_name}</b></span></a>

        
        <small class="time">
  <a href="/${tweet.user.screen_name}/status/${tweet.id_str}" class="tweet-timestamp js-permalink js-nav js-tooltip" title="3:59 PM - 28 Jan 2019" data-conversation-id="${tweet.id_str}"><span class="_timestamp js-short-timestamp js-relative-timestamp" data-time="${Math.floor((new Date(tweet.created_at)).getTime() / 1000)}" data-time-ms="${(new Date(tweet.created_at)).getTime()}" data-long-form="true" aria-hidden="true">...loading time...</span><span class="u-hiddenVisually" data-aria-label-part="last">30 minutes ago</span></a>
</small>

          <div class="ProfileTweet-action ProfileTweet-action--more js-more-ProfileTweet-actions">
    <div class="dropdown">
  <button class="ProfileTweet-actionButton u-textUserColorHover dropdown-toggle js-dropdown-toggle" type="button" aria-haspopup="true">
      <div class="IconContainer js-tooltip" title="More">
        <span class="Icon Icon--caretDownLight Icon--small"></span>
        <span class="u-hiddenVisually">More</span>
      </div>
  </button>
  <div class="dropdown-menu is-autoCentered">
  <div class="dropdown-caret">
    <div class="caret-outer"></div>
    <div class="caret-inner"></div>
  </div>
  <ul>
    
      <li class="copy-link-to-tweet js-actionCopyLinkToTweet">
        <button type="button" class="dropdown-link">Copy link to Tweet</button>
      </li>
      <li class="embed-link js-actionEmbedTweet" data-nav="embed_tweet">
        <button type="button" class="dropdown-link">Embed Tweet</button>
      </li>
          <li class="mute-user-item"><button type="button" class="dropdown-link">Mute <span class="username u-dir u-textTruncate" dir="ltr">@<b>ASpittel</b></span></button></li>
    <li class="unmute-user-item"><button type="button" class="dropdown-link">Unmute <span class="username u-dir u-textTruncate" dir="ltr">@<b>ASpittel</b></span></button></li>

        <li class="block-link js-actionBlock" data-nav="block">
          <button type="button" class="dropdown-link">Block <span class="username u-dir u-textTruncate" dir="ltr">@<b>ASpittel</b></span></button>
        </li>
        <li class="unblock-link js-actionUnblock" data-nav="unblock">
          <button type="button" class="dropdown-link">Unblock <span class="username u-dir u-textTruncate" dir="ltr">@<b>ASpittel</b></span></button>
        </li>
      <li class="report-link js-actionReport" data-nav="report">
        <button type="button" class="dropdown-link">
          
            
            Report Tweet
        </button>
      </li>
          <li>
            <button type="button" class="dropdown-link feedback-action action-prompt" data-feedback-type="DontLike" data-feedback-url="">
              I don't like this Tweet
            </button>
          </li>
      <li class="dropdown-divider"></li>
      <li class="js-actionMomentMakerAddTweetToOtherMoment MomentMakerAddTweetToOtherMoment">
        <button type="button" class="dropdown-link">Add to other Moment</button>
      </li>
      <li class="js-actionMomentMakerCreateMoment">
        <button type="button" class="dropdown-link">Add to new Moment</button>
      </li>
  </ul>
</div>

</div>

  </div>

      </div>

      

      


      
        <div class="js-tweet-text-container">
  <p class="TweetTextSize  js-tweet-text tweet-text" lang="en" data-aria-label-part="0">${tweet.text}</p>
</div>


      

      
        


      
      

      
      <div class="stream-item-footer">
  
      <div class="ProfileTweet-actionCountList u-hiddenVisually">
    
    
    <span class="ProfileTweet-action--reply u-hiddenVisually">
      <span class="ProfileTweet-actionCount" data-tweet-stat-count="2">
        <span class="ProfileTweet-actionCountForAria" id="profile-tweet-action-reply-count-aria-${tweet.id_str}" data-aria-label-part="">2 replies</span>
      </span>
    </span>
    <span class="ProfileTweet-action--retweet u-hiddenVisually">
      <span class="ProfileTweet-actionCount" aria-hidden="true" data-tweet-stat-count="0">
        <span class="ProfileTweet-actionCountForAria" id="profile-tweet-action-retweet-count-aria-${tweet.id_str}">0 retweets</span>
      </span>
    </span>
    <span class="ProfileTweet-action--favorite u-hiddenVisually">
      <span class="ProfileTweet-actionCount" data-tweet-stat-count="15">
        <span class="ProfileTweet-actionCountForAria" id="profile-tweet-action-favorite-count-aria-${tweet.id_str}" data-aria-label-part="">15 likes</span>
      </span>
    </span>
  </div>

  <div class="ProfileTweet-actionList js-actions" role="group" aria-label="Tweet actions">
    <div class="ProfileTweet-action ProfileTweet-action--reply">
  <button class="ProfileTweet-actionButton js-actionButton js-actionReply" data-modal="ProfileTweet-reply" type="button" aria-describedby="profile-tweet-action-reply-count-aria-${tweet.id}">
    <div class="IconContainer js-tooltip" title="Reply">
      <span class="Icon Icon--medium Icon--reply"></span>
      <span class="u-hiddenVisually">Reply</span>
    </div>
      <span class="ProfileTweet-actionCount ">
        <span class="ProfileTweet-actionCountForPresentation" aria-hidden="true">${tweet.retweet_count}</span>
      </span>
  </button>
</div>

    <div class="ProfileTweet-action ProfileTweet-action--retweet js-toggleState js-toggleRt">
  <button class="ProfileTweet-actionButton  js-actionButton js-actionRetweet" data-modal="ProfileTweet-retweet" type="button" aria-describedby="profile-tweet-action-retweet-count-aria-${tweet.id}">
    <div class="IconContainer js-tooltip" title="Retweet">
      <span class="Icon Icon--medium Icon--retweet"></span>
      <span class="u-hiddenVisually">Retweet</span>
    </div>
      <span class="ProfileTweet-actionCount ProfileTweet-actionCount--isZero">
    <span class="ProfileTweet-actionCountForPresentation" aria-hidden="true"></span>
  </span>

  </button><button class="ProfileTweet-actionButtonUndo js-actionButton js-actionRetweet" data-modal="ProfileTweet-retweet" type="button">
    <div class="IconContainer js-tooltip" title="Undo retweet">
      <span class="Icon Icon--medium Icon--retweet"></span>
      <span class="u-hiddenVisually">Retweeted</span>
    </div>
      <span class="ProfileTweet-actionCount ProfileTweet-actionCount--isZero">
    <span class="ProfileTweet-actionCountForPresentation" aria-hidden="true"></span>
  </span>

  </button>
</div>


    <div class="ProfileTweet-action ProfileTweet-action--favorite js-toggleState">
  <button class="ProfileTweet-actionButton js-actionButton js-actionFavorite" type="button" aria-describedby="profile-tweet-action-favorite-count-aria-${tweet.id_str}">
    <div class="IconContainer js-tooltip" data-original-title="Like">
      <span role="presentation" class="Icon Icon--heart Icon--medium"></span>
      <div class="HeartAnimation"></div>
      <span class="u-hiddenVisually">Like</span>
    </div>
      <span class="ProfileTweet-actionCount">
    <span class="ProfileTweet-actionCountForPresentation" aria-hidden="true">${tweet.favorite_count}</span>
  </span>

  </button><button class="ProfileTweet-actionButtonUndo ProfileTweet-action--unfavorite u-linkClean js-actionButton js-actionFavorite" type="button">
    <div class="IconContainer js-tooltip" title="Undo like">
      <span role="presentation" class="Icon Icon--heart Icon--medium"></span>
      <div class="HeartAnimation"></div>
      <span class="u-hiddenVisually">Liked</span>
    </div>
      <span class="ProfileTweet-actionCount">
    <span class="ProfileTweet-actionCountForPresentation" aria-hidden="true">15</span>
  </span>

  </button>
</div>


      <div class="ProfileTweet-action ProfileTweet-action--dm">
    <button class="ProfileTweet-actionButton u-textUserColorHover js-actionButton js-actionShareViaDM" type="button" data-nav="share_tweet_dm">
      <div class="IconContainer js-tooltip" title="Direct message">
        <span class="Icon Icon--medium Icon--dm"></span>
        <span class="u-hiddenVisually">Direct message</span>
      </div>
    </button>
  </div>


    

  </div>

</div>
  



      
      

      

      

    </div>

  </div>



    
<div class="dismiss-module">
  <div class="dismissed-module">
    <div class="feedback-actions">
        <div class="feedback-action" data-feedback-type="DontLike" data-feedback-url="">
          <div class="action-confirmation dismiss-module-item">Thanks. Twitter will use this to make your timeline better.
            <span class="undo-action">Undo</span>
          </div>
        </div>
    </div>
    <div class="child-feedback-confirmation">
      <div class="child-confirmation-item">
        <span class="child-confirmation-text"></span>
        <span class="undo-child-feedback-action">Undo</span>
      </div>
    </div>
  </div>
</div>

</li>`