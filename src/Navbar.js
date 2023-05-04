import React from "react";
import smileyLogo from './images/smiley.png'
import { Link } from "react-router-dom";

export default function Navbar(){

    return(
        <div id="navbar">
            <div id="site-name">
                <img src={smileyLogo} alt=''/>
                <h1>DealKings</h1>
            </div>
            
            <div id="menu">
                <p>
                    <Link className="links" to='/'>Home</Link>
                </p>
                <p>
                    <Link className="links" to='/checkout'>Checkout</Link>
                </p>
            </div>
        </div>
    )
}