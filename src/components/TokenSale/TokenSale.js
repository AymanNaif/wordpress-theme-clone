import React, { useEffect, useState } from 'react'
import Timer from './Timer'
import classes from './TokenSale.module.css'
import ChartBar from './ChartBar'
import LinkButton from '../LinkButton/LinkButton'
import { BsNewspaper } from 'react-icons/bs'

const TokenSale = () => {

  const [timeInterval, setTimeInterval] = useState([{
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  }
  ])
  const timerData = [{ id: '1', time: timeInterval.days, text: 'Days' }, { id: '2', time: timeInterval.hours, text: 'Hours' }, { id: '3', time: timeInterval.minutes, text: 'Minutes' }, { id: '4', time: timeInterval.seconds, text: 'Seconds' }]
  const deadline = "September, 18, 2023";

  const getTime = () => {
    const time = Date.parse(deadline) - Date.now();
    setTimeInterval((prevState) => {
      return ({
        ...prevState,
        days: Math.floor(time / (1000 * 60 * 60 * 24)),
        seconds: Math.floor((time / 1000) % 60),
        hours: Math.floor((time / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((time / 1000 / 60) % 60)
      })
    });
  };

  useEffect(() => {
    const interval = setInterval(() => getTime(), 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <h2 className={classes.token_sale_title}>Token sale end in :</h2>
      <div className={classes.token_sale_container}>
        {timerData.map((data) => <Timer key={data.id} time={data.time} text={data.text} />)}
      </div>
      <ChartBar leftTitle={{ title: 'Raised', description: '1,450 Tokens' }} rightTitle={{ title: 'Target', description: '150,000 Tokens' }} bar_data={{ start: 'Soft cap', mid: 'Crowd sale', end: 'Hard cap' }} />
      <div className={classes.footer}>
        <LinkButton type='blue'> Buy Token Now</LinkButton>
      </div>
    </>
  )
}

export default TokenSale