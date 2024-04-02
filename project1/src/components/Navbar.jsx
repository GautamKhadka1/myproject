import React from 'react';
import './index.css';
import { Link } from "react-router-dom";


function Navbar() {
  return (
    <div class="top">
        <img class="logo" src='logo.png'></img>
        <nav>
            <ul class="nav_links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/calculator">Calculator</Link></li>
            </ul>
        </nav>
    </div>
  );
}

export default Navbar;
