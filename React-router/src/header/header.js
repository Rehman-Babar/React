import React from 'react'
import '../header/header.css'
import { NavLink } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';

function Header() {
  return (
    <div>
        <header className='container'>
            <h3 className='logo'>ComPany LoGo</h3>
            <ul>
                <li><NavLink className='nl' to="/">Home</NavLink></li>
                <li><NavLink className='nl' to="/company">Company</NavLink></li>
                <li><NavLink className='nl'  to="/blog">Blog</NavLink></li>
                <li><NavLink className='nl' to="/contect">Contect us</NavLink></li>
                <li><NavLink className='nl' to="/about">about</NavLink></li>
            </ul>
        </header>
    </div>
  )
}

export default Header