import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <nav className='header'>
            <h1>Fresh Pickers</h1>
            <div>
                <a href="/home">Home</a>
                <a href="/order">Order</a>
                <a href="/fruits">Fruits</a>
                <a href="/about">About</a>
            </div>
        </nav>
    );
};

export default Header;