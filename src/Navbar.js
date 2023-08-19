import React from 'react';
import { Link } from 'react-router-dom';
import crown from './images/crown.png'

function Navbar(props) {
    return (
        <div id='navbar' >
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
    );
}

export default Navbar;