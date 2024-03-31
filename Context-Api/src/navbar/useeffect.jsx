import React, { useEffect, useState } from 'react'
import '../App.css'
function Uf() {
    const [count, setcount] = useState(0);
    const [counts, setcounts] = useState(0);
    useEffect(()=>{
        alert("page is succeffly rendered")
        console.log('i am clicked')
    },[count])

  return (
    <div>
        <div className='cnt'>
    <button onClick={()=>{setcount(count +1)}}>click me!</button>
    <h1>{count}</h1></div>
    <br/>
    <button onClick={()=>{setcounts(counts +1)}}>click me!</button>
    <h1>{counts}</h1>
    </div>
  )
}

export default Uf
