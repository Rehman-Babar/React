import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './header/header'
function MainHeader() {
  return (
    <div>
        <Header/>
        <Outlet/>
    </div>
  )
}

export default MainHeader