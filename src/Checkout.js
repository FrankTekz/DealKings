import React, {useState} from "react";
import ProductCheckout from "./components/ProductCheckout";
import { useCartContext } from "./context/CartContext";
import { Link } from "react-router-dom";

export default function Checkout(){
    const {cartItems, emptyCart, finalDate} = useCartContext()
    const [buttonClicked, setButtonClick] = useState(false)
    const [orderPlaced, setOrderPlaced] = useState(false)

    const cartProducts = cartItems.map(item => {
        return(
        <ProductCheckout
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

    let sum = 0 

        function calculateCost(){
            cartItems.map(item => {
                let combinedPrice = item.price * item.quantity
                sum += combinedPrice
            })
            return(sum)
        }

    function placeOrder(){
        setButtonClick(true)
        setTimeout(() => {
            emptyCart()
            setOrderPlaced(true)
        }, 2300);
    }

    const loadingBtn = 
        <button id="place-order">
            <i className="fa fa-spinner fa-spin"></i>ordering
        </button>
            
    const orderBtn = 
        <button id="place-order" onClick={placeOrder}>place order</button>

        function correctBtn(){
            if (buttonClicked){
                return loadingBtn
            } else {
                return orderBtn
            }
        }
    
    const cartQuantity = cartItems.map(item => Number(item.quantity))

    let sumQuantity = 0

    const finalQuantity = cartQuantity.forEach(quantity =>  sumQuantity += quantity)

    const totalItems = sumQuantity >  1 ? `(${sumQuantity} items)` : `(1 item)`

    const checkoutMenu = 
        <div id="checkout-menu">
            <div id="checkout-menu-details">
                <p>Subtotal {totalItems}: ${calculateCost()}</p>
                <p>Shipping: $10.00</p>
                {sum > 50 ? <p id="discount" >Discount: -$10.00</p> : null}
                <p>Tax: $0.00</p>
                <p><strong>Total: ${sum > 50 ? sum : sum + 10}</strong></p>
                {correctBtn()}
                
            </div>
        </div>

    const cartEmpty = 
        <div id="empty-cart">
            <h1>Your cart is empty...</h1>
            <h1><Link to='/'>Continue Shopping</Link></h1>
        </div>

    const cartUsed = 
        <div id="checkout-div">
            <div id="product-flex-column">
                {cartProducts}
            </div>
            {checkoutMenu}
        </div>

    const orderPlacedPage = 
        <div id="order-placed-div">
            <div id="order-placed-menu">
                <div id="order-placed-details">
                    <h2>Order Placed!</h2>
                    <p>Your Order will be delivered on:</p>
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
        <div>
            {cartItems.length < 1 ? emptyOrPlaced() : cartUsed}
        </div>
        
    )
}