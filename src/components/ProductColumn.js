import React from "react";
import { Link } from "react-router-dom"

export default function ProductColumn(props){

    const lorem = 
        `${props.description} Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut.`


    let trueRating = Math.round(props.rating)
  
    return(
        <div id="product-column" >
            <div className="product-card-column" id={props.id}>
                    <Link id="product-link" to={`/products/${props.id}`}>
                        <img id="product-img" src={props.img} alt="IMAGE HERE"/>
                    </Link>
            </div>
            <div id="product-details-column">
                <h2>{props.title}</h2>
                <h4> ${props.price}</h4>
                <p>{lorem.length >= 160 ? lorem.slice(0, 160) + '...' : lorem}</p>
                <Link to={`/products/${props.id}`} id="view-prod">view product</Link>
            </div>
        </div>
    )
}