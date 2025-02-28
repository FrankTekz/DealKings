import React, {useState} from "react";
import CheckoutMenu from "./components/CheckoutMenu";
import ProductCheckout from "./components/ProductCheckout";
import GridHero from "./components/GridHero";
import { useCartContext } from "./context/CartContext";
import { Link } from "react-router-dom";
// import CheckoutForm from "./components/CheckoutForm";

// import { loadStripe } from "@stripe/stripe-js";
// import {
//   CardElement,
//   useStripe,
//   Elements,
//   useElements,
// } from "@stripe/react-stripe-js";
// import axios from "axios";

export default function Checkout(){
    const {cartItems, finalDate, orderPlaced} = useCartContext()

    // const promise = loadStripe("pk_test_51NgvJSJg5VJlg7DkxS5SYeF6iL6Lo9DVT0CUpJn1M5lIXdSAwdMppcTItTFdHuq9DAXiSw803WXGzkxKUMpHKc56004iymZ2mQ");

    const cartProducts = cartItems.map(item => {
        return(
        <ProductCheckout
            key={item.id}
            id={item.id}
            thumbnail={item.images[0]}
            title={item.title}
            brand={item.brand}             
            price={item.price}
            stock={item.stock}
            quantity={item.quantity}
        />
        )
    })

    const cartEmpty = 
        <div id="empty-cart">
            <h1>Your cart is empty...</h1>
            <h1><Link to='/products'>Continue Shopping</Link></h1>
        </div>

    const cartUsed = 
        <div id="checkout-div">
            <div id="checkout-inner-div" >
                <div id="product-flex-column">
                    <GridHero/>
                    {cartProducts}
                </div>
                <CheckoutMenu/>
                {/* <Elements stripe={promise}>
                    <CheckoutForm />
                </Elements> */}
            </div>
        </div>

    const orderPlacedPage = 
        <div id="order-placed-div">
            <div id="order-placed-menu">
                <div id="order-placed-details">
                    <h2>Order Placed!</h2>
                    <p>Your order will be delivered on:</p>
                    <h3>{finalDate}</h3>
                </div>
            </div>
        </div>

        function emptyOrPlaced(){
            if (orderPlaced){
                return(orderPlacedPage)
            } else {
                return(cartEmpty)
            }
        }

    return(
        <div id="checkout-title" >
            {cartItems.length < 1 ? null : <h1>Checkout</h1>}
            {cartItems.length < 1 ? emptyOrPlaced() : cartUsed}
        </div>
        
    )
}