import React from "react";
import PopUpProds from "./PopUpProds";
import { useCartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

export default function PopUpCart(){
    const {cartItems, viewCart, viewingCart} = useCartContext()

    function popUpMenu(){
        if (viewingCart === true){
            return('blurred-bg')
        } else {
            return(null)
        }
    }

    const popUpProducts = cartItems.map(product => {
        return(
            <PopUpProds
                key={product.id}
                thumbnail={product.images[0]}
                title={product.title}
                brand={product.brand}
                price={product.price}
                quantity={product.quantity}
                id={product.id}
            />
        )
    })

    return(
        <div id={popUpMenu()}>
            <div id="pop-up-cart">
                <div id={ cartItems.length < 1 ? 'pop-up-empty' : "pop-up-prods"}>
                    {popUpProducts}
                    {cartItems.length > 0 ? <Link id="pop-up-checkout" to='/checkout' onClick={viewCart}>checkout</Link> 
                    : <Link onClick={viewCart}>continue shopping</Link>}
                </div>
            </div>
            <button id="exit-pop-up" onClick={viewCart}>X</button>
        </div>
        
        
    )
}