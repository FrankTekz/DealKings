import React from "react";
import { Link } from "react-router-dom"

export default function ProductCard(props){

    let trueRating = Math.round(props.rating)
  
    return(
        <div className="product-card" id={props.id}>
                <Link id="product-link" to={`/products/${props.id}`}>
                    <img id="product-img" src={props.img} alt="IMAGE HERE"/>
                </Link>
            <div id="product-details">
                <h2>{props.title}</h2>
                <h4> ${props.price}</h4>
            </div>
    </div>
    )
}