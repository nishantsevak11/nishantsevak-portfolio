import React from 'react'
import './Card.css'

const Card2 = ({year, role, compony, desc}) => {
  return (
    <div className='card-box'>
      <div className='left'>
         <div className='year'>{year}</div>
      </div>
      <div  className='mid'>
        <div className='dot'></div>
        <div className='mid-line'></div>
      </div>
      <div className='right'>
        <h2>{role}</h2>
        <h4>{compony}</h4>
        <p>{desc}</p>
      </div>
    </div>
  )
}


export default Card2
