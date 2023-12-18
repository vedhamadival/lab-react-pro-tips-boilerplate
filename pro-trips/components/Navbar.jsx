import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div id="header">
    <ul>
    <div id="main">
    <li id="Home"><Link to="/Home"><p>Kalvium  <span style={{ color: 'red' }}>&#x2764;</span></p></Link></li>
    </div>
    <div id="side">
    <li id="Contact"><Link to="/Contact"><p>Contact</p></Link></li>
    <li id="Registration"><Link to="/Registration"><p>Registration</p></Link></li>
    </div>
  </ul>
  </div>
  )
}

export default Navbar
