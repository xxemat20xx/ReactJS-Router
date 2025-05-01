import React from 'react'
import { Link, Outlet } from 'react-router'
import Navbar from './Navbar'
import StyledNavbar from './StyledNavbar'
const SharedLayout = () => {
  return (
   <>
    <StyledNavbar/>
    <Outlet/>

   </>
  )
}

export default SharedLayout