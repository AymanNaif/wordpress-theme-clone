import React from 'react'
import Timer from './Timer'
import classes from './TokenSale.module.css'
import ChartBar from './ChartBar'

const TokenSale = () => {
  const timerData = [{ id: '1', time: 0, text: 'Days' }, { id: '2', time: 0, text: 'Hours' }, { id: '3', time: 0, text: 'Minutes' }, { id: '1', time: 0, text: 'Seconds' }]
  return (
    <>
      <h2 className={classes.token_sale_title}>Token sale end in :</h2>
      <div className={classes.token_sale_container}>
        {timerData.map((data) => <Timer key={data.id} time={data.time} text={data.text} />)}
      </div>
      <ChartBar />
    </>
  )
}

export default TokenSale