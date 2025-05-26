import React from 'react'

import Navbar from '../Sections/Navbar'
import Footer from '../Sections/Footer'
import { Outlet } from 'react-router-dom'
const Layout = () => {
  return (
  <>
  <Navbar/>
  <Outlet/>
  <Footer/>
  </>
  )
}

export default Layout
