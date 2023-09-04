import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
const RootLayout = () => {
  return (
    <>
      <header>
        <nav>
          <NavLink to='/' className={(isActive) => isActive && 'active'}>Home</NavLink>
          <NavLink to='/home-two' className={(isActive) => isActive && 'active'}>Home 2</NavLink>
          <NavLink to='/blog' className={(isActive) => isActive && 'active'}>Blog</NavLink>
        </nav>
      </header>
      <Outlet />
    </>
  )
}

export default RootLayout
