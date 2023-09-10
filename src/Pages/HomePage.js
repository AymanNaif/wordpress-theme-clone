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
    <main>
      <section className={classes.first_section}>
        <HeaderText style={{ color: '#23292C', fontSize: '44px', fontWeight: '600', }} text='Powering Data for the new equity blockchain.' />
        <div className={classes.link_btns_container}>
          <LinkButton type='primary'><AiFillCaretLeft /> How it works</LinkButton>
          <LinkButton type='blue'><BsNewspaper /> White paper</LinkButton>
        </div>
        <Card>
          <TokenSale />
        </Card>
      </section>
      <section className={classes.second_section}>
        <div className={classes.second_section_title}>
          <span className={classes.vertical_line}></span>
          <HeaderText style={{ color: '#3859F2', fontSize: '18px', fontWeight: '600', }} text='ICO TOKEN' />
          <span className={classes.vertical_line}></span>
        </div>
        <HeaderText style={{ color: '#000000', fontSize: '36px', fontWeight: '600', }} text='What is ICO Crypto?' />


      </section>
    </main>
  )
}

export default HomePage
