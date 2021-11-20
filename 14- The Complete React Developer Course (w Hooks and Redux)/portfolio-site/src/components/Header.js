import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <header>
        <h1>Portfolio</h1>
        <NavLink to="/" activeclassname="is-active">Home</NavLink>
        <NavLink to="/portfolio" activeclassname="is-active">Portfolio</NavLink>
        <NavLink to="/contact" activeclassname="is-active">Contact</NavLink>
    </header>
);

export default Header;
