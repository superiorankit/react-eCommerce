import React from 'react'
import "./productCard.css"
import { NavLink } from 'react-router-dom'

const ProductCard = ({id,image,name,price,description,mrp}) => {

  let discount = Math.ceil(((mrp - price) / mrp) * 100);


  return (
    <div className="productdiv">
                    <NavLink className="product" to={`/product/${id}`}>
                        <div><img src={image} alt="" />
                        </div>
                        <p className='name' >{name}</p>
                        <p className='desc' >{description}</p>
                        <p className='price' >
                            <span>&#36;</span>{price}
                            {discount == 0?"":<><span>&#8377;<span>{mrp}</span>
                            </span>
                            <span> {discount}%</span></>}
                        </p>

                    </NavLink>
                </div>
  )
}

export default ProductCard
