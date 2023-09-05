import React from 'react'
import classes from './Paragraph.module.css'

const HeaderText = ({text}) => {
  return (
    <h2 className={classes.header_text}>{text}</h2>

  )
}

export default HeaderText