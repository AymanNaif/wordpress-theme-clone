import React from 'react'
import { Link } from 'react-router-dom'
import classes from './LinkButton.module.css'

const LinkButton = ({ path, children, type }) => {
  return (
    <Link className={`${classes.link_btn} ${classes[`${type}_btn`]}`} to={path}>
      {children}
    </Link>
  )
}

export default LinkButton
