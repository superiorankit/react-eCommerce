
import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { BsHeart } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io"
import { BiDetail } from "react-icons/bi"
import { AiOutlineInfoCircle, AiOutlineUser } from "react-icons/ai"
import { HiArrowsRightLeft } from "react-icons/hi2"
import { GoVerified } from "react-icons/go";
import Loader from '../../Loader';
import "./singleProduct.css"
import { useDispatch, useSelector } from 'react-redux';
import { addSingleProduct } from '../../../store/action/product';
import { addToCart } from '../../../store/action/user';

const SingleProduct = () => {

  const dispatch = useDispatch();

  const { id } = useParams();
  const { singleProduct, shoes } = useSelector(state => state.productReducer);
  const { cart } = useSelector(state => state.userReducer);

  const [added, setAdded] = useState(false)

  useEffect(() => {
    dispatch(addSingleProduct(id));
  }, [shoes]);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, [])




  if (!singleProduct) {
    return <div className='loading'>
      <Loader />
    </div>;
  }

  let alreadyCart = false;

  for (let item of cart) {
    if (item.id == singleProduct.id)
      alreadyCart = true;
  }




  const { name, description, mrp, price, image } = singleProduct;

  let discount = Math.ceil(((mrp - price) / mrp) * 100);


  return (
    <>
      <div className="content singleMain" >
        <div className="productimage" >

          <div className="mainimage" >
            <img src={image} alt='product-image' />
          </div>
        </div>

        <div className="productdetails" >
          <p className="name" >{name}</p>

          <p className="desc" >{description}</p>

          <p className='ratingbox' ><span className='rating'
          >3.7 &#9733;</span>
            <span className='ratingbased' >Based on 111 Rating</span>
          </p>

          <p><span className='price' >&#36;{price}</span> {discount === 0 ? "" : <><span className='discount'>{discount}% off</span></>}</p>

          <p className='mrpbox' >MRP
            {discount === 0 ? <span className='mrp'>&#36;{mrp}</span> : <span className='mrp' style={{ textDecoration: "line-through" }}>&#36;{mrp}</span>} <span className='mrptxt'>Inclusive all of taxes</span>
          </p>

          <div className='selectcol'>Select Color</div>
          <div className='colortxt'>mixed</div>

          <div className='colourbox'>

            <div className="singlecolordiv" onClick={() => { }} >
              <div id={`a0`} className='cross'><GoVerified /></div>
              <img src={image} alt='color-image' />
            </div>


          </div>

          <div className='wishbuy' >

            {false ? <div className="wishlisted">
              <div>
                <span>Wishlisted</span>
              </div>
            </div> :

              <div className="wishlist" onClick={() => { }}>
                <div>
                  <span><BsHeart /></span>
                  <span>Add to Wishlist</span>
                </div>
              </div>
            }

            {alreadyCart || added ?
              <NavLink className="buynow" to="/cart" >
                <div>
                  Go to Cart
                </div>
              </NavLink> :
              <NavLink className="buynow" onClick={() => { dispatch(addToCart(singleProduct)); setAdded(true); }} >
                <div>
                  Add to Cart
                </div>
              </NavLink>}



          </div>

          <div className='service'
          >

            <div className="serviconbox" >
              <img className='serviconimg'
                src="https://images-static.nykaa.com/nykdesignstudio-images/pub/media/wysiwyg/COD.png" alt=""
              />
              <p className='servtxt codtxt'  >COD <b>available</b></p>
              <p className='servfoot' >Know More</p>
            </div>

            <div className="serviconbox"
            >
              <img className='serviconimg'
                src="https://images-static.nykaa.com/nykdesignstudio-images/pub/media/wysiwyg/Return.png" alt=""
              />
              <p className='servtxt' ><b>7 days</b> return and exchange</p>

              <p className='servfoot' >Know More</p>
            </div>

            <div className="serviconbox"
            >
              <img className='serviconimg'
                src="https://images-static.nykaa.com/nykdesignstudio-images/pub/media/wysiwyg/Free_Delivery.png"
                alt="" />
              <p className='servtxt' >Usually ships <br /> in <b>1 day</b></p>
              <p className='servfoot' >Know More</p>
            </div>

          </div>

          <div className='infobox' >
            <p className='infotxt' >Product Information</p>
            <ul>
              <li className='infolist' >
                <div>
                  <p className='listhead' ><span><BiDetail /></span>Product Deatils</p>
                  <p className='listfoot' >Care instruction, Pack contains</p>
                </div>
                <div className='infodrop' >
                  <IoIosArrowDown />
                </div>
              </li>

              <li className='infolist' >
                <div>
                  <p className='listhead' ><span><AiOutlineInfoCircle /></span>Know your product</p>
                  <p className='listfoot' >Description</p>
                </div>
                <div className='infodrop' >
                  <IoIosArrowDown />
                </div>
              </li>

              <li className='infolist' >
                <div>
                  <p className='listhead' ><span><AiOutlineUser /></span>Vendor Details</p>
                  <p className='listfoot' >Manufacturer details, Country of origin</p>
                </div>
                <div className='infodrop' >
                  <IoIosArrowDown />
                </div>
              </li>

              <li className='infolist' >
                <div>
                  <p className='listhead' ><span><HiArrowsRightLeft /></span>Return and exchange policy</p>
                  <p className='listfoot' >Know more about return and exchange</p>
                </div>
                <div className='infodrop' >
                  <IoIosArrowDown />
                </div>
              </li>


            </ul>
          </div>

          <p className='reviewhead' >Costumer Review</p>
          <p className='star' >&#9733; &#9733; &#9733; <i
            className="fa fa-star-half-full"></i> &#9734;</p>
          <p className='ratingtxt' ><span>3.7</span><span className='ratingtxt5' >/5</span></p>
          <p className='basedontxt' >Based on 111 ratings</p>
          <p className='mostreviewhead' >Most Useful Review</p>
          <p className='readallrev' >
            Read all reviews </p>

          <div className='aboutbox' >
            <p className='abouthead' >Footwear</p>
            <div className='aboutimgbox' >
              <img className='aboutimg' src="https://media.istockphoto.com/id/1436061606/photo/flying-colorful-womens-sneaker-isolated-on-white-background-fashionable-stylish-sports-shoe.jpg?s=1024x1024&w=is&k=20&c=anQJwG2c4-ZEqf9BgeIm3ph76JZWSU2-GbOE7b_OzcA="
                alt="" />

              <p className='abouttxt' >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic.</p>
            </div>
          </div>


        </div>
      </div>
    </>
  )

}


export default SingleProduct
