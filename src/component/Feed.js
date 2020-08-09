import React, { useState, useEffect } from "react";
import flipmove from "react-flip-move";
import "./Feed.css";
import TweetBox from "./TweetBox";
import Post from "./Post";
import db from "./firebase";

/**
 * @author
 * @function Feed
 **/

const Feed = (props) => {
  const [post, setPost] = useState([]);

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) =>
      setPost(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          post: doc.data(),
        }))
      )
    );
  }, []);

  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>
      {/** twtBox*/}
      <TweetBox />
      {/**Posts */}
      <flipmove>
        {post.map(({ id, post }) => (
          <Post
            key={post.id} //use id but its ok
            displayName={post.displayName}
            username={post.userName}
            avatar={post.avatar}
            verified={post.avatar}
            text={post.text}
            image={post.image}
          />
        ))}
      </flipmove>
    </div>
  );
};

export default Feed;
