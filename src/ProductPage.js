import React, { useState } from "react";
import { useCartContext } from "./context/CartContext";
import { useProductsContext } from "./context/ProductsContext";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import useQuantity from "./hooks/UseQuantity";
import useItemAdded from './hooks/useItemAdded'

export default function ProductPage(){
    const {productId} = useParams()
    const {productData} = useProductsContext()
    const {addToCart, cartItems, setCartItems} = useCartContext()
    const [newQuantity, setNewQuantity] = useQuantity()
    const [itemAdded, setItemAdded] = useItemAdded()
    const thisProduct = productData.find((product) => product.id == productId)
    const [thumbnail, setThumbnail] = useState(thisProduct.images[0])

    const lorem = 
    <p> 
        {thisProduct.description} Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Commodo elit at imperdiet dui accumsan sit.
    </p>

    function checkCart(){
            setCartItems(cart => 
                cart.map((item) => thisProduct.id === item.id ? {...item, quantity: item.quantity + newQuantity} : item 
                )
            );
    }

    function checkDupes(item){
       return Object.values(item).includes(thisProduct.title)
    }

    function finalAddCart(selectedItem){
        if (cartItems.some(checkDupes)){
            checkCart()
            setItemAdded(prevState => !prevState)
        } else {
            thisProduct.quantity = newQuantity
            addToCart(selectedItem)
            setItemAdded(prevState => !prevState)
        }
    }

    const imageSrc = (event) => {
        setThumbnail(event.target.src)
    }
    
    const productImages = thisProduct.images.map(image => {
        return(
            <img className="change-image" src={image} onClick={imageSrc} alt=''/>
        )
    })

    function decreaseQuantity(){
        setNewQuantity(prevState => prevState - 1)
    }

    function increaseQuantity(){
        setNewQuantity(prevState => prevState + 1)
    }


    return(
        <div id="product-page-div">
            <div id="product-page-left" >
                <Link to='/products' id="back-to-prod">back to products page</Link>
                <img id="shown-image" src={thumbnail} alt='missing gang'/>
                <div id="product-images">
                    {productImages}
                </div>
            </div>
            <div id="product-page-right" >
                <h2>{thisProduct.title}</h2>
                <h3>${thisProduct.price}</h3>                   
                <p id="item-description"> {lorem} </p>
                <p><strong>Availability:</strong> In Stock </p>
                <p><strong>Brand:</strong> {thisProduct.brand}</p>
                <p id="prod-category" ><strong>Category:</strong> {thisProduct.category}</p>
                <div id="add-cart-div">
                    <div id="pp-quantity" >
                        <p onClick={ newQuantity == 1 ? null : decreaseQuantity}>-</p>
                        <p id="pp-qnumber" >{newQuantity}</p>
                        <p onClick={increaseQuantity}>+</p>
                    </div>
                    <p id={ itemAdded ? 'item-added-btn' : "add-cart-btn"} onClick={ itemAdded ? null : () => finalAddCart(thisProduct)} > { itemAdded ? 'item added' : "add to cart"} </p>
                </div>
            </div>
        </div>
    )
}