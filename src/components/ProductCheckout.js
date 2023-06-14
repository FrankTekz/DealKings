import React from "react";
import { useCartContext } from "../context/CartContext";

export default function ProductCheckout(props){
    const {removeFromCart, setCartItems} = useCartContext()

    function decreaseQuantity(id){
        setCartItems(cart => 
            cart.map((item) => id === item.id ? {...item, quantity: item.quantity - 1} : item 
            )
        );
    }

    function increaseQuantity(id){
        setCartItems(cart => 
            cart.map((item) => id === item.id ? {...item, quantity: item.quantity + 1} : item 
            )
        );
    }
    
    return(
            <div id="product-checkout">
                <img src={props.thumbnail} alt="my fauly gang"/>
                <div id="product-details-checkout">
                    <h2>{props.title}</h2>
                    <div id="price-remove">
                    <h4>${props.price}</h4>
                    <button id="remove-cart" onClick={() => removeFromCart(props.id)}>X</button>
                    </div>
                    <div id="control-quantity">
                        <p>Qty:</p>
                        <button className="change-quantity" onClick={() => decreaseQuantity(props.id)}>-</button>
                        <p>{props.quantity}</p>
                        <button className="change-quantity" onClick={() => increaseQuantity(props.id)}>+</button>
                    </div>
                </div>
            </div>
            
    )
    
}