import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
    <Header/>
    <Outlet /> {/* uses layout as base yet changes content */}
    <Footer />
    </>
  )
}

export default Layout