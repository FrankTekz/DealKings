import React, { useState } from "react";
import { useCartContext } from "./CartContext";
import { useProductsContext } from "./ProductsContext";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import useQuantity from "./useQuantity";
import useItemAdded from "./useItemAdded";

export default function ProductPage(){
    const {productId} = useParams()
    const {productData} = useProductsContext()
    const {addToCart} = useCartContext()
    const [quantity, handleQuantity] = useQuantity()
    const [itemAdded, setItemAdded] = useItemAdded()
    const thisProduct = productData.find((product) => product.id == productId)
    const [thumbnail, setThumbnail] = useState(thisProduct.images[0])

    function increaseQuantity(selectedItem){
        selectedItem.quantity = Number(quantity)
        console.log(selectedItem)
    }

    function finalAddCart(selectedItem){
        increaseQuantity(selectedItem)
        addToCart(selectedItem)
        setItemAdded(prevState => !prevState)
    }

    const testingImage = (event) => {
        setThumbnail(event.target.src)
    }
    
    const productImages = thisProduct.images.map(image => {
        return(
            <img className="change-image" src={image} onClick={testingImage} alt=''/>
        )
    })

    const quantityMenu = 
    <p id="product-quantity" >
                        Quantity:
                        <select value={quantity} onChange={handleQuantity}>
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                            <option value={5}>5</option>
                        </select>
                    </p>

    return(
        <div id="product-page-div">
            <div id="top-product-page">
                <div id="product-page-inner" >
                    <div id="product-images">
                        {productImages}
                    </div>
                    <img id="shown-image" src={thumbnail} alt='missing gang'/>
                    <div id="product-page-details">
                        <h2>{thisProduct.title}</h2>
                        <h3>${thisProduct.price}</h3>
                        <p><strong>Brand:</strong> {thisProduct.brand}</p>
                        <p><strong>Category:</strong> {thisProduct.category}</p>
                    <div id="item-description">
                        <h4>About this item: </h4>                    
                        <p>{thisProduct.description}</p>
                        <p>only {thisProduct.stock} item(s) left! </p>
                    </div>
                    </div>
                    <div id="cart-menu">
                        <p id="first-p">
                            Get it shipped <strong>Fast</strong> and 
                            <strong> Free</strong> by <strong>Thursday May 5th</strong> on orders over $50 (subtotal)
                        </p>
                        <h4>In Stock</h4>
                        <button id={itemAdded === true ? 'order-placed-btn' : "cart-menu-btn"} onClick={ itemAdded === true ? null : () => finalAddCart(thisProduct)} >
                            {itemAdded === true ? `${thisProduct.quantity} in cart` : "add to cart"} 
                        </button>
                        {itemAdded === true ? null : quantityMenu}
                        
                        <p>sold by: DealKings</p>
                        <p>shipped by: DealKings</p>
                        <div id="product-page-links">
                            <Link className="pp-links" to='/'>continue shopping</Link>
                            <Link className="pp-links" to='/checkout'>checkout</Link>
                        </div>
                        
                    </div>
                </div>
                
            </div>
            
            
        </div>
    )
}