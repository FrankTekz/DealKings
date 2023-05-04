import React from 'react';
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import './App.css';
import Homepage from './Homepage';
import Checkout from './Checkout';
import Navbar from './Navbar';
import ProductPage from './ProductPage';
import Error from './ErrorPage';
import { useCartContext } from './CartContext';


function App() {
const {viewingCart, disableScroll} = useCartContext()

disableScroll()

  return (
      <div id={viewingCart === true ? "disable-scroll" : null}>
        <Router>
          <Navbar/>
          <Routes>
              <Route element={<Homepage/>} path='/'/>
              <Route element={<Checkout/>} exact path='/checkout'/>
              <Route element={<ProductPage/>} path="/products/:productId"/>
              <Route element={<Error/>} path='*' />
            </Routes>
          </Router>
      </div>
  );
}

export default App;
