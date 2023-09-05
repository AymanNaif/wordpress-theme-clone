import React from 'react'
import classes from './Paragraph.module.css'

const DescriptionText = ({text}) => {
  return (
    <p className={classes.description_text}>{text}</p>
  )
}
export default DescriptionText