import React from 'react';
import './index.css';
import { Link } from "react-router-dom";


function Navbar() {
  return (
    <div id="top">
        <Link to="/"><img id="logo" src="logo.png"></img></Link>
        <nav>
            <ul id="nav_links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/calculator">Calculator</Link></li>
            </ul>
        </nav>
    </div>
  );
}

export default Navbar;
