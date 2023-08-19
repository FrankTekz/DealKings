import React from "react";
import { useCartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

export default function GridHero(props){
    const {removeFromCart, setCartItems} = useCartContext()
    
    return(
            <div id="checkout-labels">
                <div id="spacer">                    
                </div>
                <div id="checkout-labels-inner">
                    <p>Item</p>
                    <p>Price</p>
                    <p>Qty</p>
                    <p >Subtotal</p>
                </div>
            </div>
            
    )
    
}