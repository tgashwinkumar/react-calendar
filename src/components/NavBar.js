import React from 'react';
import {Link} from 'react-router-dom';
import './styles/NavBar.css';
import logo from './images/bwcLogo.png';

function NavBar() {
    return (
        <nav>
            <Link to="/" className="nav-brand"><img src={logo} alt="BrosWhoCode"/></Link>
            <Link to="/" className="nav-signIn">Sign In</Link>
            <Link to="/" className="nav-signUp">Sign Up</Link>
        </nav>
    )
}
    
export default NavBar