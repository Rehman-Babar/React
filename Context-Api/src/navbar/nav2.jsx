import React, {useState, useEffect} from 'react'

import axios from 'axios';
import moment from 'moment';
const nav2 = () => {
    const [post, setpost] = useState([])
    useEffect(()=>{
        axios.get(`https://www.reddit.com/r/reactjs.json`)
        .than((res)=>{
            let responceData = res.data;
            let newPosts = responceData.data.children;
            newPosts = newPosts.map((eachPost)=>{
                return eachPost.data
            })
            console.log('newpost', newPosts)
            setpost(newPosts)
        })
    }, [])
  return (
    <div>
        
    </div>
  )
}

export default nav2