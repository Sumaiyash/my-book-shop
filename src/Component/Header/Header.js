import React from 'react';
import "./Header.css";

const Header = () => {
    return (
        <nav className='header'>
            <h3>My Book shop</h3>
            <div className='header-image'>
                <a href="/shop">Shop</a>
                <a href="/order">Order</a>
                <a href="/about">About</a>
            </div>
        </nav>
    );
};

export default Header;