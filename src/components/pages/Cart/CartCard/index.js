import React, { useContext, useState } from 'react'
import "./cartCard.css"
import { GiReturnArrow } from 'react-icons/gi'
import { TbTruckDelivery } from 'react-icons/tb'
import { RxCross2 } from 'react-icons/rx'
import { NavLink } from 'react-router-dom'
import moment from 'moment';
import { delCart, updateQuant } from '../../../../store/action/user'
import { useDispatch } from 'react-redux'

const CartCard = ({item}) => {

  const dispatch = useDispatch();

  const [quantity, setquantity] = useState(0);

  let deliverydate = (moment().add(5, 'days')).format("Do MMM YY");

  let discount = Math.ceil(((item.mrp - item.price) / item.mrp) * 100);

  let quant1 = "";
  let quant2, quant3, quant4, quant5;


  switch (item.quantity) {
    case 1:
      quant1 = "selected";
      break;

    case 2:
      quant2 = "selected";
      break;

    case 3:
      quant3 = "selected";
      break;

    case 4:
      quant4 = "selected";
      break;

    case 5:
      quant5 = "selected";
      break;
  }



  const setquant = (e)=>{
    dispatch(updateQuant(item.id,Number(e.target.value)));

  }


  return (
      <div className='cartcard'>
        <p className='crossdel' onClick={()=> dispatch(delCart(item.id))} ><RxCross2 /></p>
        <div className='image'>
          <NavLink to={`/product/${item.id}`}><img src={item.image} alt="Product Image" ></img></NavLink></div>
        <div className='prodetails' >

          <p>{item.name}</p>
          <p>{item.description}</p>
          <p>Sold by:Omnitech Retail</p>

          <div className='colorsize' >

            <div className='qty'>Qty:
              <select name='quant' onChange={setquant} >
                <option value="1" selected={quant1}  >1</option>
                <option value="2" selected={quant2} >2</option>
                <option value="3" selected={quant3} >3</option>
                <option value="4" selected={quant4} >4</option>
                <option value="5" selected={quant5} >5</option>
              </select></div>
          </div>



          <p className='price'><span>	&#36;{item.price}</span> {discount===0?"":<><span>	&#36;{item.mrp}</span> <span>{discount}%</span></>}</p>
          <p><span><GiReturnArrow /></span> <b>14 days</b> return available</p>
          <p><span><TbTruckDelivery /></span> Delivery by {deliverydate}<b></b></p>


        </div>
        <p className='movwish' >Move to Wishlist</p>
      </div>
  )
}

export default CartCard
