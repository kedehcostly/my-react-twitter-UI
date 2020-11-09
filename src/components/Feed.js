import React from 'react';
import "./Feed.css";
import TweetBox from "./TweetBox"
import Post from "./Post.js"

function Feed() {
    return (
      // {Header}
        <div className="feed">
            <div className="feed__header">
             <h1>Home</h1>
            </div>

            <TweetBox />




            {/* {Post} */}
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />

        </div>
    );
}

export default Feed;
