import React, {useState, useContext} from 'react'
import UserContext from '../Context/UserContext'
import '../App.css'
function Login() {
    const [username, setusername] = useState('');
    const [password, setpassword] = useState('');
    const {setUser} = useContext(UserContext)
    const HandleSubmit = (e) =>{
          e.preventDefault()
          setUser({username, password})
    }
  return (
    <div>
        <h2>Login Page</h2>
        <input type='text' placeholder='Your Name' className='nam' value={username} onChange={(e) =>{setusername(e.target.value)}}/>
        {'                                           '}
        <input type='text' placeholder='Your Password' className='nam' value={password} onChange={(e) =>{setpassword(e.target.value)}}/>
        <button onClick={HandleSubmit}>Click me!</button>

    </div>
  )
}

export default Login