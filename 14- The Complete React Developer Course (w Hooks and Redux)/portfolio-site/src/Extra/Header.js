import React from 'react'
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <h2>PORTFOLIO</h2>
            <NavLink to="/" activeclassname="active">Home</NavLink>
            <NavLink to="/portfolio" activeclassname="active">Portfolio</NavLink>
            <NavLink to="/contact" activeclassname="active">Contact</NavLink>
        </div>
    )
}

export default Header