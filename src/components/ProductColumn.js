import React from "react";
import { Link } from "react-router-dom";

export default function ProductColumn(props) {
  const firstLetterCap = props.title.charAt(0).toUpperCase();

  const remainingTitle = props.title.substring(1);

  const lorem = `${props.description} Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut.`;

  return (
    <div id="product-column">
      <div className="product-card-column" id={props.id}>
        <Link id="product-link" to={`/products/${props.id}`}>
          <img id="product-img" src={props.img} alt="product" />
        </Link>
      </div>
      <div id="product-details-column">
        <h2>{firstLetterCap + remainingTitle}</h2>
        <h4> ${props.price}</h4>
        <p>{lorem.length >= 160 ? lorem.slice(0, 160) + "..." : lorem}</p>
        <Link to={`/products/${props.id}`} id="view-prod">
          view product
        </Link>
      </div>
    </div>
  );
}
