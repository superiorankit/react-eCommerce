import React, { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Product from './pages/Product/index'
import About from './pages/About/index'
import Contact from './pages/Contact/index'
import Error from './pages/Error/index'
import Layout from './pages/Layout/index'
import "../style/index.css"
import Home from './pages/Home'
import SingleProduct from './pages/SingleProduct'
import Cart from './pages/Cart'
import { Provider, useDispatch } from 'react-redux'
import store from '../store'
import { fetchData } from '../store/action/product'


const Index = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
}, []);

  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='/products' element={<Product />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/product/:id' element={<SingleProduct />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/*' element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
  )
}

export default Index
