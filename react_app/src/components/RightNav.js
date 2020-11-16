import React from 'react';
import {Link} from 'react-router-dom';
import './styles/RightNav.css';
import cloudy from './images/cloudy.svg';
import cake from './images/cake.svg';
import historical from './images/historical.svg';



function Cards() {
	
    return (
        <React.Fragment>
            <nav>
                <Link to="/" className="nav-link nav-weather"><img src={cloudy} alt="Weather"/></Link>
                <div className="nav-sepLine"></div>
                <Link to="/" className="nav-link nav-cake"><img src={cake} alt="Recent Birthdays"/></Link>
                <div className="nav-sepLine"></div>
                <Link to="/" className="nav-link nav-history"><img src={historical} alt="Today in History"/></Link>
            </nav>
            <div className="nav-menuTitle">Menu</div>
        </React.Fragment>
        )

}
    export default Cards
