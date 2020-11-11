import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import './styles/NavBar.css';
import logo from './images/bwcLogo.png';
import defaultProfile from './images/avatars/ava6.svg'
import facebookIcon from './images/socialMedia/facebook.svg'
import whatsappIcon from './images/socialMedia/whatsapp.svg'
import githubIcon from './images/socialMedia/github.svg'
import instaIcon from './images/socialMedia/instagram.svg'

function NavBar() {
    
    var loggedIn = true;
    
    return (
        <nav>
            <Link to="/" className="nav-link nav-brand"><img src={logo} alt="BrosWhoCode"/></Link>
            <Link to="/" className="nav-link nav-profile"><img src={defaultProfile} alt="ProfileAvatar" /></Link>
            <div className="nav-sepLine"></div>
            <Link to="/" className="nav-link nav-social-facebook"><img src={facebookIcon} alt="Follow us in Facebook"/></Link>
            <Link to="/" className="nav-link nav-social-whatsapp"><img src={whatsappIcon} alt="Contact us on Whatsapp"/></Link>
            <Link to="/" className="nav-link nav-social-insta"><img src={instaIcon} alt="Follow us on Instagram"/></Link>
            <Link to="/" className="nav-link nav-social-github"><img src={githubIcon} alt="Join us on Github"/></Link>
        </nav>
        )
    }
    
    export default NavBar