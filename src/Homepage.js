import React, {useEffect, useState} from "react";
import { useProductsContext } from "./context/ProductsContext";
import { useCartContext } from "./context/CartContext";


export default function Homepage(){
    const {displayedData, setDisplayedData, productData} = useProductsContext()
    const {cartItems, viewCart, viewingCart} = useCartContext()


    return(
        <div>
            <div id="intro">
                <div id="intro-text" >
                    <h1>We save you money, so you can save time</h1>
                    <p>this is where I am going to explain what this site is about, along with a slogan. Just wanna test what it would look like afterwards</p>
                </div>
            </div>
        </div>
        
    )
}