import React from 'react'
import classes from './ChartBar.module.css'

const ChartBar = ({leftTitle, rightTitle, bar_data}) => {
  return (
    <>
      <div className={classes.bar_title}>
        <span><h3>{leftTitle.title} -</h3>{leftTitle.description}</span>
        <span><h3>{rightTitle.title} -</h3>{rightTitle.description}</span>
      </div>
      <div className={classes.bar_container}>
        <div className={classes.chart_bar_container}>
          <div className={classes.chart_bar_progress}></div>
          <span className={classes.chart_bar_point}></span>
          <div className={classes.horizontal_line_container}>
            <span className={classes.horizontal_line}><h3>{bar_data.start}</h3></span>
            <span className={classes.horizontal_line}><h3>{bar_data.mid}</h3></span>
            <span className={classes.horizontal_line}><h3>{bar_data.end}</h3></span>
          </div>
        </div>
      </div>
    </>
  )
}

export default ChartBar