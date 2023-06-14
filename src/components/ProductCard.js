import React from "react";
import { Link } from "react-router-dom"

export default function ProductCard(props){

    let trueRating = Math.round(props.rating)
  
    function fourStar(){
        if (trueRating >= 4){
            return(<span className="fa fa-star checked"></span>)
        } else {
            return(<span className="fa fa-star"></span>)
        } 
    }

    function fiveStar(){
        if (trueRating === 5){
            return(<span className="fa fa-star checked"></span>)
        } else {
            return(<span className="fa fa-star"></span>)
        } 
    }

    return(
        <div className="product-card" id={props.id}>
            <div id="product-img">
                <img src={props.img} alt="IMAGE HERE"/>
            </div>
            <div id="product-details">
                <h2>{props.title}</h2>
                <div id="stars">
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    {fourStar()}
                    {fiveStar()}
                </div>
                <h4> ${props.price}</h4>
                <Link id="product-link" to={`/products/${props.id}`}>View Product</Link>
            </div>
    </div>
    )
}