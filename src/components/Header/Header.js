import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './Header.module.css'
import LinkButton from '../LinkButton/LinkButton'
import myLogo from '../../logo1.png';

const Header = () => {
  return (
    <header className={classes.header}>
      <img src={myLogo} alt="Logo" />
      <nav className={classes.nav}>
        <NavLink to='/' className={({ isActive }) => isActive ? classes.active : undefined} end>Home</NavLink>
        <NavLink to='/home-two' className={({ isActive }) => isActive ? classes.active : undefined} end>Home 2</NavLink>
        <NavLink to='/blog' className={({ isActive }) => isActive ? classes.active : undefined} end>Blog</NavLink>
      </nav>
      <LinkButton path='/sign-up' type='secondary' >Sign Up</LinkButton>
    </header>
  )
}

export default Header