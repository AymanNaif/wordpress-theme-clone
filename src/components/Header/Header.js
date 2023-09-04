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
        <NavLink to='/' className={(isActive) => isActive && 'active'}>Home</NavLink>
        <NavLink to='/home-two' className={(isActive) => isActive && 'active'}>Home 2</NavLink>
        <NavLink to='/blog' className={(isActive) => isActive && 'active'}>Blog</NavLink>
      </nav>
      <LinkButton path='/sign-up' text='Sign Up' type='secondary' />
    </header>
  )
}

export default Header