import React, { useCallback, useState } from 'react'
import '../navbar/password.css'
import { Prev } from 'react-bootstrap/esm/PageItem'
import { useEffect } from 'react'
import { useRef } from 'react'
function Password() {
    const [length, setlength] = useState(8)
    const [number, setnumber] = useState(false)
    const [char, setchar] = useState(false)
    const [Password, setPassword] = useState("")

    const PasswordGenrater = useCallback(()=>{
    let pass = ""
    let strng = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(number){
      strng+="0123456789"}
      if(char){
        strng+="¬!£$%^&*@~|*"}
        for(let i =1; i<=length; i++){
          let char = Math .floor(Math .random() * strng.length +1)
          pass += strng.charAt(char)
        }
        setPassword(pass)
    }, [length, number, char, setPassword])
    useEffect(()=>{
      PasswordGenrater()
    },[length, number, char, PasswordGenrater])
    // UseRef
    const passwordRef = useRef(null)
    const copyToClickboard = useCallback(()=>{
      passwordRef.current?.select()
      window.navigator.clipboard.writeText(Password)
    }, [Password])

  return (
    
    
      <div  className='raja '>
        <div className='btc'>
        <input className='inpt'
        type='text'
        value={Password}
        placeholder='Password'
        readOnly
        ref={passwordRef}
        />
        <button onClick={copyToClickboard} >Copy</button>
        </div>

        <div className='d-flex'>
          
        <input
        type="range"
        min={6}
        max={100}
        value={length}
        onChange={(e)=>{setlength(e.target.value)}}
        />
        <label>Length: {length}</label>
        
        <input
        type='checkbox'
        defaultChecked={number}
        onChange={()=>{setnumber((Prev)=>!Prev)}}
        />
      <label>Number</label>
      <input
      type='checkbox'
      defaultChecked={char}
      onChange={()=>{setchar((prev)=>!prev)}}
      />
      <label>Character</label>
      </div>
      
      </div>
     

    
      
    
    
  )
}

export default Password