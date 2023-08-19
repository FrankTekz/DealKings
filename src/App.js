import './App.css';
import React from 'react';
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import Navbar from './Navbar';
import Footer from './Footer';
import Homepage from './Homepage';
import Products from './Products';
import Checkout from './Checkout';
import ProductPage from './ProductPage';
import ErrorPage from './ErrorPage';

function App() {
  return (
    <div>
      <Router>
          <Navbar/>
          <Routes>
            <Route element={<Homepage/>} path='/'/>
              <Route element={<Products/>} path='/products'/>
              <Route element={<Checkout/>} exact path='/checkout'/>
              <Route element={<ProductPage/>} path="/products/:productId"/>
              <Route element={<ErrorPage/>} path='/*' />
          </Routes>
          <Footer/>
      </Router>
    </div>
  );
}

export default App;
