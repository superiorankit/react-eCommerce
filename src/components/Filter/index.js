import React from 'react'
import "./filter.css"

const Filter = () => {
  return (
    <div className='filterMain'>
      <h2>FILTER</h2>
      <div className='filterItems'>
        <p className='items'>Sort</p>
        <p className='items'>Price</p>
        <p className='items'>Colour</p>
        <p className='items'>Size</p>
      </div>

      <div className='reset'>Reset</div>
    </div>
  )
}

export default Filter
