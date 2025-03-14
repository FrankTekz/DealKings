import React from "react";
import { Link } from "react-router-dom";

export default function ProductCard(props) {
  const firstLetterCap = props.title.charAt(0).toUpperCase();

  const remainingTitle = props.title.substring(1);

  const trueTitle = firstLetterCap + remainingTitle;

  const shortTitle = trueTitle.substr(0, 16);

  return (
    <div className="product-card" id={props.id}>
      <Link id="product-link" to={`/products/${props.id}`}>
        <img id="product-img" src={props.img} alt="product" />
      </Link>
      <div id="product-details">
        <h2>{props.title.length > 18 ? shortTitle + "..." : trueTitle}</h2>
        <h4> ${props.price}</h4>
      </div>
    </div>
  );
}
