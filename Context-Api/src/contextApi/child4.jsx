import React, {useContext} from 'react';
import {contextHook} from './child1'
import '../App.css'
const Child4 = () => {
  const a =useContext(contextHook)


  if (!a) return <h3 >Please Login</h3>
  return <h3 >Welcome: {a.name}</h3>

    
  }


export default Child4