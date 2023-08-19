import React, {useState} from 'react';
import { useCartContext } from '../context/CartContext';
import LoadingBtn from './LoadingBtn';

function CheckoutMenu(props) {
    const {setOrderPlaced, emptyCart, cartItems} = useCartContext()
    const [buttonClicked, setButtonClick] = useState(false)

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
    }, 2500);
}
        
const orderBtn = 
    <button id="place-order" onClick={placeOrder}>Place Order</button>


    const cartQuantity = cartItems.map(item => Number(item.quantity))

    let sumQuantity = 0

    const finalQuantity = cartQuantity.forEach(quantity =>  sumQuantity += quantity)

    const totalItems = sumQuantity >  1 ? `(${sumQuantity} items)` : `(1 item)`

    return (
        <div id="checkout-menu">
            <div id="checkout-menu-details">
                    <div className='checkout-menu-divs' >
                        <h4>Subtotal {totalItems}:</h4>
                        <p>${calculateCost()}.00</p>
                    </div>
                    <div className='checkout-menu-divs' >
                        <h4>Shipping:</h4>
                        <p>$10.00</p>
                    </div>
                    <div className='checkout-menu-divs' id='grand-total' >
                        <strong>Total:</strong>
                        <strong>${sum + 10}.00</strong>
                    </div>
                    {/* {sum > 50 ? <p id="discount" >Discount: -$10.00</p> : null} */}
            </div>
            {buttonClicked ? <LoadingBtn/> : orderBtn }
        </div>
    );
}

export default CheckoutMenu;