import React from 'react'
import { NavLink } from 'react-router-dom';

const linkStyle = {
    margin: '10px 6px 6px 10px',
    textDecoration: 'none',
    color: 'grey'
  }

const Navbar = () => 
    <div className="nav-bar">
        <h1>
            <NavLink to="/" exact style={linkStyle}>Hikable</NavLink>
        </h1>
    </div>


export default Navbar