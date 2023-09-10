import React from 'react'
import classes from './Paragraph.module.css'

const HeaderText = ({text, style}) => {
  return (
    <h2 className={classes.header_text} style={{color: style.color, fontWeight: style.fontWeight, fontSize: style.fontSize}}>{text}</h2>
  )
}

export default HeaderText