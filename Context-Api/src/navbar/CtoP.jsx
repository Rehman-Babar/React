import React, { useState } from 'react'

const CtoP = (props) => {
    const [name, setname] = useState();
    
    function handleSubmit(e){
        e.preventDefault()
        props.getdata(name)
    }
  return (
    <div>
    <form >
        <input type='text'  onChange={(e)=>{setname(e.target.value)}}/>
        <button onClick={handleSubmit}>Submit</button>
    </form>
    </div>
  )
}

export default CtoP