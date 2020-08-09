import React, { useState } from "react";
import "./TweetBox.css";
import { Button, Avatar } from "@material-ui/core";
import db from "./firebase";

/**
 * @author
 * @function TweetBox
 **/

const TweetBox = (props) => {
  const [tweetText, setTweetText] = useState("");
  const [tweetImage, setTweetImage] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      displayName: "saaap ",
      userName: "saap@123",
      verified: false,
      text: tweetText,
      image: tweetImage,
      avatar:
        "https://images.pexels.com/photos/4552176/pexels-photo-4552176.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    });
    setTweetImage("");
    setTweetText(" ");
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />

          <input
            value={tweetText}
            onChange={(e) => setTweetText(e.target.value)}
            placeholder="what is happing ?"
            type="text"
          />
        </div>
        <input
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
          className="tweetBox__inputImage"
          placeholder=" OptionsS:::Enter Image URl !!"
          type="text"
        />

        <Button type="submit" onClick={submitHandler} className="tweetButton">
          Tweet
        </Button>
      </form>
    </div>
  );
};

export default TweetBox;
