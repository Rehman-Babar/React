import React, { useState } from 'react'
import './AxiosPost.css'
import axios from 'axios';
const AxiosPost = () => {
    const name = {fname: "", lname: ""};
    const [data, setdata] = useState(name);
    const handler = (e) =>{
        setdata({...data, [e.target.name]:e.target.value})
    }
    const submitData = (e) =>{
        e.preventDefault();
        axios.post(`https://www.reddit.com/r/reactjs.json`, data)
        .than(
                (responce) =>{
                    console.log(responce)
                }
        )
    }
  return (
    <div>
        <div className='main'>

        <label >First Name:</label>
        <input type='text' name='fname' value={data.fname} onChange={handler}/>
        <br/>
        <label>Last Name:</label>
        <input type='text' name='lname' value={data.lname} onChange={handler}/>
        
        </div>
        <button onClick={submitData}>Submit Data </button>
    </div>
  )
}

export default AxiosPost