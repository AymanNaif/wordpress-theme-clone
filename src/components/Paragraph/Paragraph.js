import React from 'react'
import HeaderText from './HeaderText'
import DescriptionText from './DescriptionText'

const Paragraph = ({title, description}) => {
  return (
    <div>
      <HeaderText text={title}/>
      <DescriptionText text={description}/>
    </div>
  )
}

export default Paragraph