import React from 'react';
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import './App.css';
import Homepage from './Homepage';
import Checkout from './Checkout';
import Navbar from './Navbar';
import ProductPage from './ProductPage';
import Products from './Products';
import Error from './ErrorPage';
import { useCartContext } from './context/CartContext';


function App() {
const {viewingCart, disableScroll} = useCartContext()

disableScroll()

  return (
      <div id={viewingCart === true ? "disable-scroll" : null}>
        <Router>
        <Router basename='/'>
          <Navbar/>
          <Routes>
              <Route element={<Homepage/>} path='/'/>
              <Route element={<Products/>} path='/products'/>
              <Route element={<Checkout/>} exact path='/checkout'/>
              <Route element={<ProductPage/>} path="/products/:productId"/>
              <Route element={<Error/>} path='/*' />
            </Routes>
          </Router>
      </div>
  );
}

export default App;
