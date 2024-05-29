import React, { useContext } from 'react'
import "./product.css"
import ProductCard from '../../ProductCard'
import Loader from '../../Loader'
import Filter from '../../Filter'
import { useSelector } from 'react-redux'

const Product = () => {

  const { shoes, loading } = useSelector(state=>state.productReducer)

  return (
    <div className='productMain'>
      <Filter />
      {loading ? <div className='loadDiv'>
        <Loader />
      </div>
        :<>
        <p className='length'>{shoes.length} items Available</p>
         <div className='productBox'>
          {shoes.map((data) => {
            return <ProductCard {...data} />
          })}
        </div>
        </>
      }
    </div>
  )
}

export default Product
