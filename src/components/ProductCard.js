import React from "react";
import { Link } from "react-router-dom"

export default function ProductCard(props){

    let trueRating = Math.round(props.rating)

    const firstLetterCap = props.title.charAt(0).toUpperCase()

    const remainingTitle = props.title.substring(1)
  
    return(
        <div className="product-card" id={props.id}>
                <Link id="product-link" to={`/products/${props.id}`}>
                    <img id="product-img" src={props.img} alt="IMAGE HERE"/>
                </Link>
            <div id="product-details">
                <h2>{firstLetterCap + remainingTitle}</h2>
                <h4> ${props.price}</h4>
            </div>
    </div>
    )
}