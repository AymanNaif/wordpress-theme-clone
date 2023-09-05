import React from 'react'
import classes from './Timer.module.css'
const Timer = ({time, text}) => {
  return (
    <div className={classes.timer_container}>
    <div className={classes.timer}>{time}</div>
    <p>{text}</p>
    </div>
  )
}

export default Timer