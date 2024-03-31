import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
import Home from './component/home'
import Company from './component/company'
import About from './component/about'
import Blog from './component/blog'
import Contect from './component/contect'
import MainHeader from './mainheader'
import Header from './header/header'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<MainHeader/>}>
          <Route index  element={<Home/>}/>
          <Route path="/company" element={<Company/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/blog" element={<Blog/>}/>
          <Route path="/contect" element={<Contect/>}/></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App