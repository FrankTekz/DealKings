import React from "react";
import crown from './images/crown.png'
import { Link } from "react-router-dom";

export default function Navbar(){

    return(
        <div id="navbar">
            <div id="site-name">
                <img src={crown} alt=''/>
                <h1>DealKings</h1>
            </div>
            
            <div id="menu">
                <p>
                    <Link className="links" to='/'>Home</Link>
                </p>
                <p>
                    <Link className="links" to='/products'>Products</Link>
                </p>
                <p>
                    <Link className="links" to='/checkout'>Checkout</Link>
                </p>
            </div>
        </div>
    )
}