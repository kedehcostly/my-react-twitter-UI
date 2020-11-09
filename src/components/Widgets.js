import React from 'react'
import  './Widgets.css';
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';

import SearchIcon from '@material-ui/icons/Search';

export default function Widgets() {
  return (
    <div className="widgets">
      <div className="Widgets__input">
      <SearchIcon className="widgets__searchIcon"/>
      <input placeholder="search Twitter" type="text" />
      </div>


      <div className="widgets__widgetContainer">
        <h2>What's happening</h2>
        <TwitterTweetEmbed tweetId={"1325553496301645825"} />
        <TwitterTimelineEmbed sourceType="profile" screenName="docaustyne" options={{height:400}} />
        <TwitterShareButton url={"https://facebook.com/theboycostly"} options={{text: "#reactjs is awesome", via:"Theboycostly"}}/>
      </div> 




    </div>
  )
}
