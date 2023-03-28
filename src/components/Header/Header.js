import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <nav className='header'>
           <h1>Grocery Hunt</h1>
            <ul>
                <li>Home</li>
                <li>Purchase</li>
                <li>Inventory</li>
                <li>About</li>
            </ul>
        </nav>
    );
};

export default Header;