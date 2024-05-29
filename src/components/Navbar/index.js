import React, { useContext, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import "./navbar.css";
import { FaRegHeart, FaShoppingCart, FaUser } from "react-icons/fa";
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const Header = () => {

    const [active, setActive] = useState("home");

    const {cart} = useSelector(state=>state.userReducer)

    const quantity = cart.reduce((quant,item)=>quant+=item.quantity,0)

    const updateSelect = (activeTab) => {
        localStorage.setItem('activeTab', JSON.stringify(activeTab))
        setActive(activeTab);

    }

    useEffect(() => {
        let currentTab = localStorage.getItem('activeTab');
        if (currentTab) {
            currentTab = JSON.parse(currentTab);
            console.log(typeof currentTab)
            updateSelect(currentTab);
        }
        else {
            updateSelect('home');
        }
    }, []);


    return (
        // <Wrapper select={active}>
        // <navbar  className='navMain'>
        //     <div className='navItems'>
        //         <h1>AK</h1>
        //         <div className='items'>
        //             <NavLink className="home" to="/" onClick={()=> updateSelect('home') }>Home</NavLink>
        //             <NavLink className="products" to="/products" onClick={()=> updateSelect('products') }>Product</NavLink>
        //             <NavLink className="about" to="/about" onClick={()=> updateSelect('about') }>About</NavLink>
        //             <NavLink className="contact" to="/contact" onClick={()=> updateSelect('contact') }>Contact</NavLink>
        //         </div>
        //     </div>

        //     <div className='userItem'>
        //         <div className='userBox'>
        //             <div className='userIcon'>
        //             <FaUser />
        //             </div>
        //             <p>Ankit</p>
        //         </div>

        //         <div className='userBox'>
        //             <div className='userIcon'>
        //             <FaRegHeart />
        //             </div>
        //             <p>Wishlist</p>
        //         </div>

        //         <div className='userBox'>
        //             <div className='userIcon'>
        //             <FaShoppingCart />
        //             </div>
        //             <p>Cart</p>
        //         </div>
        //     </div>
        // </navbar>
        // </Wrapper>

        // <Wrapper select={active}>
        //     <navbar className='navMain'>
        //         <div className='navTop'>
        //             <h1>Footwear</h1>
        //             <input type='search' id='search' placeholder='Search' />
        //         </div>
        //         <div className='navBott'>
        //             <div className='items'>
        //                 <NavLink className="home" to="/" onClick={() => updateSelect('home')}>Home</NavLink>
        //                 <NavLink className="products" to="/products" onClick={() => updateSelect('products')}>Product</NavLink>
        //                 <NavLink className="about" to="/about" onClick={() => updateSelect('about')}>About</NavLink>
        //                 <NavLink className="contact" to="/contact" onClick={() => updateSelect('contact')}>Contact</NavLink>
        //             </div>
        //             <div className='userItem'>
        //                 <div className='userBox'>
        //                     <div className='userIcon'>
        //                         <FaUser />
        //                     </div>
        //                     <p>Ankit</p>
        //                 </div>

        //                 <div className='userBox'>
        //                     <div className='userIcon'>
        //                         <FaRegHeart />
        //                     </div>
        //                     <p>Wishlist</p>
        //                 </div>

        //                 <NavLink to="/cart" className='userBox'>
        //                     <div className='cartLength'>{quantity}</div>
        //                     <div className='userIcon'>
        //                         <FaShoppingCart />
        //                     </div>
        //                     <p>Cart</p>
        //                 </NavLink>
        //             </div>
        //         </div>
        //     </navbar>
        // </Wrapper>

        <Wrapper select={active}>
        <navbar className='navMain'>
            <div className='navTop'>
                <h1>FT</h1>
                <div className='items'>
                    <NavLink className="home" to="/" onClick={() => updateSelect('home')}>Home</NavLink>
                    <NavLink className="products" to="/products" onClick={() => updateSelect('products')}>Product</NavLink>
                    <NavLink className="about" to="/about" onClick={() => updateSelect('about')}>About</NavLink>
                    <NavLink className="contact" to="/contact" onClick={() => updateSelect('contact')}>Contact</NavLink>
                </div>

            </div>
            <div className='navBott'>
            <input type='search' id='search' placeholder='Search' />
                <div className='userItem'>
                    <div className='userBox'>
                        <div className='userIcon'>
                            <FaUser />
                        </div>
                        <p>Ankit</p>
                    </div>

                    <div className='userBox'>
                        <div className='userIcon'>
                            <FaRegHeart />
                        </div>
                        <p>Wishlist</p>
                    </div>

                    <NavLink to="/cart" className='userBox'>
                        <div className='cartLength'>{quantity}</div>
                        <div className='userIcon'>
                            <FaShoppingCart />
                        </div>
                        <p>Cart</p>
                    </NavLink>
                </div>
            </div>
        </navbar>
    </Wrapper>
    )
}

const Wrapper = styled.section`

.${(props) => props.select} {
    color: #00b8a3 !important;
}


`

export default Header
