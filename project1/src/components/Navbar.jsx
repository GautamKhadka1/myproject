import React from 'react';
import './index.css';

function Navbar() {
  return (
    <div class="top">
        <img class="logo" src='logo.png'></img>
        <nav>
            <ul class="nav_links">
                <li><a href="#">Home</a></li>
                <li><a href="#">Calculator</a></li>
            </ul>
        </nav>
    </div>
  );
}

export default Navbar;
