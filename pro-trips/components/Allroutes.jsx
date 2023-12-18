import React from 'react'
import { Route , Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import About from '../Pages/Registration'
import Contact from '../Pages/Contact'
import Registration from '../Pages/Registration'

const Allroutes = () => {
  return (

    <Routes>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/Registration" element={<Registration/>}/>
        <Route path="/Contact" element={<Contact/>}/>
    </Routes>

  )
}

export default Allroutes
