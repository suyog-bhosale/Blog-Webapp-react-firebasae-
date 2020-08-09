import React from "react";
import "./Widegets.css";
import SearchIcon from "@material-ui/icons/Search";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";

/**
 * @author
 * @function Widegets
 **/

const Widegets = (props) => {
  return (
    <div className="Widegets">
      <div className="Widegets_input">
        <SearchIcon className="Widegets_icon" />

        <input placeholder="seach twiter" type="text" />
      </div>
      <div className="Widegets_container">
        <h2>whats happing?</h2>

        <TwitterTweetEmbed tweetId={"933354946111705097"} />

        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="saurabhnemade"
          options={{ height: 400 }}
        />

        <TwitterShareButton
          url={"https://www.facebook.com/profile.php?id=100008227329102"} //facebook profile
          options={{ text: "#reactjs is awesome Man !!", via: "suyog " }}
        />
      </div>
    </div>
  );
};

export default Widegets;
