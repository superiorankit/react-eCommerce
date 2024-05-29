import React from 'react'
import Navbar from '../../Navbar/index'
import Footer from '../../Footer/index'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
    <Navbar/>
    <div className='mainBody'>
        <Outlet/>
    </div>
    <Footer/>
    </>
  )
}

export default Layout
