import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import emptycart from "./image/emptycart.png"
import "./emptyCart.css"

const Emptycart = () => {
  return (
        <div className='emptyCartMain'>

<div className='image'>
    <img src={emptycart} />
</div>

<p className='head'>Hey, it feels so light!</p>
<p className='desc'>There is nothing in you bag.Let's add some items.</p>
<NavLink className="wish" to="/" >SHOP ITEMS</NavLink>


</div>
    
  )
}

export default Emptycart