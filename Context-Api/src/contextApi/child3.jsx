import React, { useContext, useState } from 'react'
import Child4 from './child4'
import { contextHook1} from './child1'
import '../App.css'


const Child3 = () => {
  const b = useContext(contextHook1);

    const [name, setName] = useState('');
  const [password, setpassword] = useState('');
  const handleSubmit = (e)=>{
    e.preventDefault()
    b({name, password})
    

  }
  return (
    <div>

          <h1>This Is child3 Page</h1>
          <input type='text' placeholder='Your Name' value={name} onChange={(e) =>{setName(e.target.value)}}/>
          {'         '}
          <input type='text' placeholder='Your Password' value={password} onChange={(e) =>{setpassword(e.target.value)}}/>
          {'         '}
          <button onClick={handleSubmit}>Please Login</button>
          <Child4/>
    </div>
  )
}

export default Child3