import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './App.css'
function Axios() {
    const [userdata, setdata] = useState([])
    // useEffect (() => {
    //         axios
    //         .get("https://jsonplaceholder.typicode.com/poss")
    //         .then((responce)=>{
    //         console.log(responce)
    //         setdata(responce.data)
    //         })
    //         .catch((error)=>{
    //             console.log(error)
    //         })
            
        
    //     }, [])
        useEffect(()=>{
            getApiData ();
        }, [])
        const getApiData = async() =>{
            const res =await axios.get("https://jsonplaceholder.typicode.com/posts")
            setdata(res.data)
        }
    return (
    <div>
        <h2>Axios Api Data</h2>
        <div className='grid'>
        {userdata.map((post)=>{
            const {id, title, body} =post
            return(
                <div className='card' key={id}>
                    <h2>{title.slice(0, 15)}</h2>
                    <p>{body}</p>
                </div>
            )
        })}</div>
    </div>
    )
}

export default Axios