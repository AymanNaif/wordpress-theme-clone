import React from 'react'
import { Link } from 'react-router-dom'
import classes from './LinkButton.module.css'

const LinkButton = ({ path, text, type }) => {
  return (
    <Link className={`${classes.link_btn} ${classes[`${type}_btn`]}`} to={path}>{text}</Link>
  )
}

export default LinkButton
