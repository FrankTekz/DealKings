import React from "react";
import { useCartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

export default function ProductCheckout(props) {
  const { removeFromCart, setCartItems } = useCartContext();

  const firstLetterCap = props.title.charAt(0).toUpperCase();

  const remainingTitle = props.title.substring(1);

  function decreaseQuantity(id) {
    setCartItems((cart) =>
      cart.map((item) =>
        id === item.id ? { ...item, quantity: item.quantity - 1 } : item
      )
    );
  }

  function increaseQuantity(id) {
    setCartItems((cart) =>
      cart.map((item) =>
        id === item.id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  }

  return (
    <div id="product-checkout">
      <Link to={`/products/${props.id}`}>
        <img src={props.thumbnail} alt="" />
      </Link>
      <div id="product-details-checkout">
        <Link to={`/products/${props.id}`} id="checkout-link">
          <p id="checkout-prod-title">{firstLetterCap + remainingTitle}</p>
        </Link>
        <p>${props.price}</p>
        <p>
          <strong
            className="qty-btns"
            onClick={
              props.quantity === 1
                ? () => null
                : () => decreaseQuantity(props.id)
            }
          >
            -
          </strong>
          {props.quantity}
          <strong
            className="qty-btns"
            onClick={() => increaseQuantity(props.id)}
          >
            +
          </strong>
        </p>
        <p id="subtotal">${props.price * props.quantity}</p>
      </div>
      <div id="price-remove">
        <p id="remove-cart" onClick={() => removeFromCart(props.id)}>
          X
        </p>
      </div>
    </div>
  );
}
