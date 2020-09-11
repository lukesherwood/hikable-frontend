import React from 'react'
import { NavLink } from 'react-router-dom';

const linkStyle = {
    textDecoration: 'none',
    color: 'black',
    float: "left",
    textAlign: "center",
    padding: "20px",
    fontSize: "30px"
  }

const Navbar = () => 
    <div className="nav-bar">
        <div>
            <NavLink to="/" exact style={linkStyle} activeStyle={{background: 'goldenrod'}}>Hikable</NavLink>
        </div>
        <div>
            <NavLink to="/lists" exact style={linkStyle} activeStyle={{background: 'goldenrod'}}>Lists</NavLink>
        </div>
        <div>
            <NavLink to="/hikes" exact style={linkStyle} activeStyle={{background: 'goldenrod'}}>Hikes</NavLink>
        </div>
    </div>


export default Navbar