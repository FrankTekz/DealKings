import React from "react";
import { useCartContext } from "../context/CartContext";

export default function PopUpProds(props){
    const {removeFromCart} = useCartContext()

    return(
        <div id="pop-up-product">
            <img src={props.thumbnail} alt="Product"/>
            <div id="pop-up-details">
                <h3>{props.title}</h3>
                <p>price: ${props.price}</p>
                <p>quantity: {props.quantity}</p>
            </div>
            <button id="pop-up-remove" onClick={() => removeFromCart(props.id)}>X</button>
        </div>
    )
}