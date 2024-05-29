import React, { useContext, useEffect, useRef, useState } from 'react'
import "./cart.css"
import { NavLink, useNavigate } from 'react-router-dom';
import { MdLocalOffer, MdOutlineLocalOffer } from "react-icons/md"
import { SlArrowDown, SlArrowRight } from "react-icons/sl"
import { BsBookmark } from "react-icons/bs"
import CartCard from './CartCard';
import Emptycart from '../../EmptyCart';
import { useSelector } from 'react-redux';

const Cart = () => {

  localStorage.setItem('activeTab',JSON.stringify("cart"));

  let tprice=0,discount=0,tmrp=0;

  const {cart} = useSelector(state=>state.userReducer);

  if (cart.length === 0)
    return <div className='emptyCart'>
      <Emptycart />
    </div>


  return (
    <div className="container cartMain">
      <div className='firstbox'>
        <div className='addressbox'>
          <div className='address'>
            <p>Deliver to: <span><b>Ankit, 800001</b></span></p>
            <p>Rajputana, Best Green Valley </p>
          </div>

          <NavLink className="addchangeadress">CHANGE ADDRESS</NavLink>
        </div>

        <div className='offer'>
          <p><span><MdLocalOffer /></span> Available Offers</p>
          <p>10% Instant Discount on ICICI Bank Credit and Debit Cards on a min spend of Rs 3,500.TCA </p>
          <p>Show More <span><SlArrowDown /></span></p>
        </div>

        <div className='itemselected'>
          <p><b>CART ITEMS</b></p>
        </div>

        {cart.map((curElem) => {

          tmrp = tmrp + (curElem.mrp * curElem.quantity);
          tprice = tprice + (curElem.price * curElem.quantity);

          let id = curElem.colors + curElem.id;

          discount = tmrp - tprice;

          return <CartCard key={id} item={curElem} />;

        })
        }

        <NavLink to="/wishlist" className='wishlist' >
          <p><span><BsBookmark /></span>Add More From Wishlist</p>
          <span><SlArrowRight /></span>

        </NavLink>




      </div>


      <div className='secbox'>

      <div className='coupon'>
            <p>COUPONS</p>
            <div className='applyco'>
              <p><span><MdOutlineLocalOffer /></span> APPLY Coupons</p>
              <p>APPLY</p>
            </div>
          </div>

          <div className='pricedet'>
            <p>PRICE DETAILS ({cart.length})</p>
            <div className='faredetails'>
              <p>Total MRP</p>
              <p>&#36;{tmrp}</p>
            </div>

            <div className='faredetails'>
              <p>DISCOUNT on MRP</p>
              <p className='disc' >-{discount}</p>
            </div>

            <div className='faredetails'>
              <p>Coupon Discount</p>
              <p className='coup' >Not Applied</p>
            </div>

            <div className='faredetails'>
              <p>Convenience Fee <NavLink className="knowmore">Know More</NavLink></p>
              <p>&#36;10</p>
            </div>

            <div className='faredetails finalmrp'>
              <p>Total Amount</p>
              <p>&#36;{(tprice+10).toFixed(2)}</p>
            </div>

          </div>

          <NavLink className="pay">PLACE ORDER</NavLink>

      </div>


      <div className='footer'>
        <div className='foticon' >

          <img src="https://constant.myntassets.com/checkout/assets/img/footer-bank-ssl.png" width="70" height="37" />
          <img src="https://constant.myntassets.com/checkout/assets/img/footer-bank-visa.png" width="60" height="37" />
          <img src="https://constant.myntassets.com/checkout/assets/img/footer-bank-mc.png" width="60" height="37" />
          <img src="https://constant.myntassets.com/checkout/assets/img/footer-bank-ae.png" width="60" height="37" />
          <img src="https://constant.myntassets.com/checkout/assets/img/footer-bank-dc.png" width="60" height="37" />
          <img src="https://constant.myntassets.com/checkout/assets/img/footer-bank-nb.png" width="60" height="37" />
          <img src="https://constant.myntassets.com/checkout/assets/img/footer-bank-cod.png" width="60" height="37" />
          <img src="https://constant.myntassets.com/checkout/assets/img/footer-bank-rupay.png" width="60" height="37" />
          <img src="https://constant.myntassets.com/checkout/assets/img/footer-bank-paypal.png" width="60" height="37" />
          <img src="https://constant.myntassets.com/checkout/assets/img/footer-bank-bhim.png" width="60" height="37" />
        </div>
        <NavLink to="/contactus" >Need Help ? Contact Us</NavLink>

      </div>


    </div>

  )
}

export default Cart
