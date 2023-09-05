import React from 'react'
import classes from './ChartBar.module.css'

const ChartBar = () => {
  return (
    <>

      <div className={classes.chart_bar_container}>
        <div className={classes.chart_bar_progress}></div>
        <span className={classes.chart_bar_point}></span>
      </div>
    </>
  )
}

export default ChartBar