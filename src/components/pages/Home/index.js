import React, { useContext, useEffect } from 'react'
import "./home.css"
import { NavLink, Navigate, useNavigate } from 'react-router-dom'
import HomeCard from './HomeCard'
import ProductCard from '../../ProductCard'
import Loader from '../../Loader'
import PartnerCard from './PartnerCard'
import { ourPartners } from '../../../database/partners'
import Button from '../../Button'
import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from '../../../store/action/product'



const Home = () => {

  const { loading, featureShoes } = useSelector(state=>state.productReducer)

  const partners = ourPartners;
  
  const navigate = useNavigate();



  return (
    <div className='homeMain'>

      <div className='coverImgDiv'>
        <NavLink className="coverImg" to="/products">
          <img src='https://www.campusshoes.com/cdn/shop/files/Exclusive_collection-Desktop_e1d438bd-1d24-4577-a34e-219707d5c249_1950x.jpg?v=1715942146' alt='cover image' />
        </NavLink>
      </div>

      <div className='descBox'>
        <HomeCard
          img="https://www.campusshoes.com/cdn/shop/files/Artboard_3_d161cefe-554b-4959-a074-564d92854089.jpg?v=1712469759"
        />

        <HomeCard
          img="https://www.campusshoes.com/cdn/shop/files/Artboard_2_7d5d3185-9007-4c9b-b21e-de5a139e095f.jpg?v=1712469805"
        />

      </div>

      <div className='featureBox'>
        <h1>Feature Products</h1>

        {loading ? <Loader />
          : <div className='feature'>
            {featureShoes.map((data) => {
              return <ProductCard {...data} />
            })}
          </div>
        }
      </div>

        <div className='knowYourShoe'>
          <div className='imgDiv'>
            <div className='img img1'>
              <img src='https://www.campusshoes.com/cdn/shop/files/Home_Featured_image_1_460x.jpg?v=1704714236'/>
            </div>
            <div className='img img2'>
              <img src='https://www.campusshoes.com/cdn/shop/files/Home_Featured_image_2_460x.jpg?v=1704714255'/>
            </div>
          </div>
          
          <div className='txtBox'>
            <p className='head'>Know Your Shoe!</p>
            <p className='desc'>Explore Our Air-Turbo Tech</p>
            <Button text='SHOP NOW' handle = {()=>navigate("/products")}/>
          </div>


        </div>

      <div className="ourPartners">
        <h1>Our Partners</h1>
        <div className="partnersBox">
          {partners.map((partner, index) => (
            <PartnerCard key={index} link={partner.link} name={partner.name} logo={partner.logo} />
          ))}
        </div>
      </div>


    </div>
  )
}

export default Home
