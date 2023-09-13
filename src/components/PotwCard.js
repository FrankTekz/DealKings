import React from "react";
import { Link } from "react-router-dom"

export default function PotwCard(props){

    let trueRating = Math.round(props.rating)

    const shortTitle = props.title.substr(0,15)


  
    return(
        <div className="potw-card" id={props.id}>
                <Link id="product-link" to={`/products/${props.id}`}>
                    <img id="potw-img" src={props.img} alt="IMAGE HERE"/>
                </Link>
            <div id="product-details">
                <Link id="title-link" to={`/products/${props.id}`} >
                    <h2>{props.title.length > 15 ? shortTitle + '...' : props.title}</h2>
                </Link>
                <h4> ${props.price}</h4>
            </div>
    </div>
    )
}