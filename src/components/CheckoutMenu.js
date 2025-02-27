import React, { useState } from "react";
import { useCartContext } from "../context/CartContext";
import LoadingBtn from "./LoadingBtn";

function CheckoutMenu(props) {
    const { setOrderPlaced, emptyCart, cartItems } = useCartContext();
    const [buttonClicked, setButtonClick] = useState(false);

    // Calculate total cost using reduce() & fix floating-point precision
    const subtotal = cartItems
        .reduce((acc, item) => acc + item.price * item.quantity, 0)
        .toFixed(2); // Rounds to 2 decimal places

    const shippingCost = 10.0;
    const grandTotal = (parseFloat(subtotal) + shippingCost).toFixed(2); // Ensures correct decimal precision

    function placeOrder() {
        setButtonClick(true);
        setTimeout(() => {
            emptyCart();
            setOrderPlaced(true);
        }, 2500);
    }

    // Calculate total quantity using reduce()
    const totalItemsCount = cartItems
        .reduce((acc, item) => acc + Number(item.quantity), 0);
    const totalItems = totalItemsCount > 1 ? `(${totalItemsCount} items)` : `(1 item)`;

    return (
        <div id="checkout-menu">
            <div id="checkout-menu-details">
                <div className="checkout-menu-divs">
                    <h4>Subtotal {totalItems}:</h4>
                    <p>${subtotal}</p>
                </div>
                <div className="checkout-menu-divs">
                    <h4>Shipping:</h4>
                    <p>${shippingCost.toFixed(2)}</p>
                </div>
                <div className="checkout-menu-divs" id="grand-total">
                    <strong>Total:</strong>
                    <strong>${grandTotal}</strong>
                </div>
            </div>
            {buttonClicked ? <LoadingBtn /> : <button id="place-order" onClick={placeOrder}>Place Order</button>}
        </div>
    );
}

export default CheckoutMenu;
