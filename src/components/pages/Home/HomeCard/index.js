import React from 'react'
import "./homeCard.css"

const HomeCard = ({img,headTxt,descTxt}) => {
  return (
    <div className='homeCard'>
        <img src={img} alt='desc image'/>
    </div>
  )
}

export default HomeCard