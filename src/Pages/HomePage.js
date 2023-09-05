import React from 'react'
import classes from './HomePage.module.css'
import HeaderText from '../components/Paragraph/HeaderText'
import LinkButton from '../components/LinkButton/LinkButton'
import { AiFillCaretLeft } from "react-icons/ai";
import { BsNewspaper } from "react-icons/bs";
import TokenSale from '../components/TokenSale/TokenSale';
import Card from '../components/Card/Card';

const HomePage = () => {
  return (
    <section className={classes.first_section}>
      <HeaderText text='Powering Data for the new equity blockchain.' />
      <div className={classes.link_btns_container}>
        <LinkButton type='primary'><AiFillCaretLeft /> How it works</LinkButton>
        <LinkButton type='blue'><BsNewspaper /> White paper</LinkButton>
      </div>
      <Card>
        <TokenSale />
      </Card>
    </section>
  )
}

export default HomePage
