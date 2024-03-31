import React, { useState } from 'react'
import Child2 from './child2';
const contextHook = React.createContext();
const contextHook1 = React.createContext();

function Child1() {
  const [user, setUser] = useState([])
  return (
    <div>
        <contextHook.Provider value={user}>
          <contextHook1.Provider value={setUser}>
          
          <Child2/>
          
          </contextHook1.Provider>
        </contextHook.Provider>
    </div>
  )
}

export default Child1
export {contextHook, contextHook1}