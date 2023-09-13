import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div id='footer' >
            <p id='dk-rights' > © DealKings All Rights Reserved. </p>
            <div id="menu-mobile">
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

export default Footer;