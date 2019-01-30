const imageTweetTemplate = tweet => `<li class="js-stream-item stream-item stream-item
" data-item-id="${tweet.id_str}" id="stream-item-tweet-${tweet.id_str}" data-item-type="tweet" data-suggestion-json="{&quot;suggestion_details&quot;:{},&quot;tweet_ids&quot;:&quot;${tweet.id_str}&quot;,&quot;scribe_component&quot;:&quot;tweet&quot;}">
    


  <div class="tweet js-stream-tweet js-actionable-tweet js-profile-popup-actionable dismissible-content
       original-tweet js-original-tweet
      
      
       has-cards  has-content
" data-tweet-id="${tweet.id_str}" data-item-id="${tweet.id_str}" data-permalink-path="/${tweet.user.screen_name}/status/${tweet.id_str}" data-conversation-id="${tweet.id_str}" data-tweet-nonce="${tweet.id_str}-d5fe0be9-e710-419a-a15f-acedc7bdec63" data-tweet-stat-initialized="true" data-screen-name="${tweet.user.screen_name}" data-name="${tweet.user.name}" data-user-id="${tweet.user.id_str}" data-you-follow="true" data-follows-you="false" data-you-block="false" data-reply-to-users-json="[{&quot;id_str&quot;:&quot;${tweet.user.id_str}&quot;,&quot;screen_name&quot;:&quot;${tweet.user.screen_name}&quot;,&quot;name&quot;:&quot;${tweet.user.name}&quot;,&quot;emojified_name&quot;:{&quot;text&quot;:&quot;${tweet.user.name}&quot;,&quot;emojified_text_as_html&quot;:&quot;${tweet.user.name}&quot;}}]" data-disclosure-type="" data-has-cards="true">

    <div class="context">
      
      
    </div>

    <div class="content">
      

      

      
      <div class="stream-item-header">
          <a class="account-group js-account-group js-action-profile js-user-profile-link js-nav" href="/${tweet.user.screen_name}" data-user-id="${tweet.user.id_str}">
      <img class="avatar js-action-profile-avatar" src="${tweet.user.profile_image_url}" alt="">
    <span class="FullNameGroup">
      <strong class="fullname show-popup-with-id u-textTruncate " data-aria-label-part="">${tweet.user.name}</strong><span>‏</span><span class="UserBadges"><span class="Icon Icon--verified"><span class="u-hiddenVisually">Verified account</span></span></span><span class="UserNameBreak">&nbsp;</span></span><span class="username u-dir u-textTruncate" dir="ltr" data-aria-label-part="">@<b>${tweet.user.screen_name}</b></span></a>

        
        <small class="time">
  <a href="/${tweet.user.screen_name}/status/${tweet.id_str}" class="tweet-timestamp js-permalink js-nav js-tooltip" title="12:09 PM - 29 Jan 2019" data-conversation-id="${tweet.id_str}"><span class="_timestamp js-short-timestamp js-relative-timestamp" data-time="1548792589" data-time-ms="1548792589000" data-long-form="true" aria-hidden="true">2h</span><span class="u-hiddenVisually" data-aria-label-part="last">2 hours ago</span></a>
</small>

          <div class="ProfileTweet-action ProfileTweet-action--more js-more-ProfileTweet-actions">
    <div class="dropdown">
  <button class="ProfileTweet-actionButton u-textUserColorHover dropdown-toggle js-dropdown-toggle" type="button">
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
          <li class="mute-user-item"><button type="button" class="dropdown-link">Mute <span class="username u-dir u-textTruncate" dir="ltr">@<b>${tweet.user.screen_name}</b></span></button></li>
    <li class="unmute-user-item"><button type="button" class="dropdown-link">Unmute <span class="username u-dir u-textTruncate" dir="ltr">@<b>${tweet.user.screen_name}</b></span></button></li>

        <li class="block-link js-actionBlock" data-nav="block">
          <button type="button" class="dropdown-link">Block <span class="username u-dir u-textTruncate" dir="ltr">@<b>${tweet.user.screen_name}</b></span></button>
        </li>
        <li class="unblock-link js-actionUnblock" data-nav="unblock">
          <button type="button" class="dropdown-link">Unblock <span class="username u-dir u-textTruncate" dir="ltr">@<b>${tweet.user.screen_name}</b></span></button>
        </li>
      <li class="report-link js-actionReport" data-nav="report">
        <button type="button" class="dropdown-link">
          
            
            Report Tweet
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
  <p class="TweetTextSize TweetTextSize--normal js-tweet-text tweet-text" lang="en" data-aria-label-part="0">${tweet.text}<a href="${tweet.entities.media[0].url}" class="twitter-timeline-link u-hidden" data-pre-embedded="true" dir="ltr">pic.twitter.com/iKqAqhhEQm</a></p>
</div>


      

      
            <div class="AdaptiveMediaOuterContainer">
    <div class="AdaptiveMedia
                
        
        
        ">
      <div class="AdaptiveMedia-container">
          <div class="AdaptiveMedia-singlePhoto" style="padding-top: calc(1.3333333333333333 * 100% - 0.5px);">
    <div class="AdaptiveMedia-photoContainer js-adaptive-photo " data-image-url="${tweet.entities.media[0].media_url}" data-element-context="platform_photo_card" style="background-color:rgba(64,50,37,1.0);" data-dominant-color="[64,50,37]">
  <img data-aria-label-part="" src="${tweet.entities.media[0].media_url}" alt="" style="width: 100%;">
</div>


</div>
      </div>
    </div>
  </div>




      
      

      
      <div class="stream-item-footer">
  
      <div class="ProfileTweet-actionCountList u-hiddenVisually">
    
    
    <span class="ProfileTweet-action--reply u-hiddenVisually">
      <span class="ProfileTweet-actionCount" aria-hidden="true" data-tweet-stat-count="0">
        <span class="ProfileTweet-actionCountForAria" id="profile-tweet-action-reply-count-aria-${tweet.id_str}">0 replies</span>
      </span>
    </span>
    <span class="ProfileTweet-action--retweet u-hiddenVisually">
      <span class="ProfileTweet-actionCount" aria-hidden="true" data-tweet-stat-count="0">
        <span class="ProfileTweet-actionCountForAria" id="profile-tweet-action-retweet-count-aria-${tweet.id_str}">0 retweets</span>
      </span>
    </span>
    <span class="ProfileTweet-action--favorite u-hiddenVisually">
      <span class="ProfileTweet-actionCount" data-tweet-stat-count="12">
        <span class="ProfileTweet-actionCountForAria" id="profile-tweet-action-favorite-count-aria-${tweet.id_str}" data-aria-label-part="">12 likes</span>
      </span>
    </span>
  </div>

  <div class="ProfileTweet-actionList js-actions" role="group" aria-label="Tweet actions">
    <div class="ProfileTweet-action ProfileTweet-action--reply">
  <button class="ProfileTweet-actionButton js-actionButton js-actionReply" data-modal="ProfileTweet-reply" type="button" aria-describedby="profile-tweet-action-reply-count-aria-${tweet.id_str}">
    <div class="IconContainer js-tooltip" title="Reply">
      <span class="Icon Icon--medium Icon--reply"></span>
      <span class="u-hiddenVisually">Reply</span>
    </div>
      <span class="ProfileTweet-actionCount ProfileTweet-actionCount--isZero ">
        <span class="ProfileTweet-actionCountForPresentation" aria-hidden="true"></span>
      </span>
  </button>
</div>

    <div class="ProfileTweet-action ProfileTweet-action--retweet js-toggleState js-toggleRt">
  <button class="ProfileTweet-actionButton  js-actionButton js-actionRetweet" data-modal="ProfileTweet-retweet" type="button" aria-describedby="profile-tweet-action-retweet-count-aria-${tweet.id_str}">
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
    <div class="IconContainer js-tooltip" title="Like">
      <span role="presentation" class="Icon Icon--heart Icon--medium"></span>
      <div class="HeartAnimation"></div>
      <span class="u-hiddenVisually">Like</span>
    </div>
      <span class="ProfileTweet-actionCount">
    <span class="ProfileTweet-actionCountForPresentation" aria-hidden="true">12</span>
  </span>

  </button><button class="ProfileTweet-actionButtonUndo ProfileTweet-action--unfavorite u-linkClean js-actionButton js-actionFavorite" type="button">
    <div class="IconContainer js-tooltip" title="Undo like">
      <span role="presentation" class="Icon Icon--heart Icon--medium"></span>
      <div class="HeartAnimation"></div>
      <span class="u-hiddenVisually">Liked</span>
    </div>
      <span class="ProfileTweet-actionCount">
    <span class="ProfileTweet-actionCountForPresentation" aria-hidden="true">12</span>
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