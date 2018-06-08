import React from 'react';
import '../styles/top-nav.css';

const TopNav = () => {
    return (
        <nav>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/category">Categories</a></li>
                <li>Saved</li>
                <li>My Profile</li>
            </ul>
        </nav>
    );
};

export default TopNav;
