import React from 'react';
import { useState, useEffect } from "react";
import './Ap.css'
import axios from 'axios';
import moment from 'moment';



let App = () => {

  const [posts, setPosts] = useState([]);
  useEffect(() => {

    axios.get(`https://www.reddit.com/r/reactjs.json`)
      .then(res => {
        let responseData = res.data;

        let newPosts = responseData.data.children;

        newPosts = newPosts.map((eachPost) => {
          return eachPost.data
        });

        console.log("newPosts: ", newPosts);

        setPosts(newPosts);
      });

  }, []);

  return (
    <div>
      {
        posts.map(eachPost => (

          <Post
            name={eachPost?.title}
            postText={eachPost?.selftext}
          />
        ))
      }
    </div>
  );
}


let Post = ({ profilePhoto, name, postDate, postText, postImage }) => (
  <div className='post'>
    <div className='postHeader'>
      {
        (profilePhoto) ?
          <img className='profilePhoto' src={profilePhoto} alt="profile" />
          :
          null
      }

      <div>
        <b>{name} </b> <br />
        {moment(postDate).fromNow()}
      </div>
    </div>

    <div className='postText'>
      {postText}
    </div>

    {
      (postImage) ?
        <img className='postImage' src={postImage} alt="post" />
        :
        null
    }

  </div>
);

export default App