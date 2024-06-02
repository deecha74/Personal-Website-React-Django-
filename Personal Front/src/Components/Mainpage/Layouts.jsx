import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
const Layouts = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>

    
    </>
  )
}

export default Layouts
