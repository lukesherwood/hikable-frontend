import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

export default function Footer() {
  return (
    <div className="footer">
      <Navbar
        className="navbar-bottom justify-content-center"
        bg="dark"
        variant="dark"
      >
        <Navbar.Brand as={NavLink} to='/'>
          <img src="/Hikable-logo.png" alt="hikable-logo" width="70" />
        </Navbar.Brand>
        <Nav.Item>2020 Hikable, All Rights Reserved</Nav.Item>
        <Nav.Link href="#">Privacy Policy</Nav.Link>
        <Nav.Link href="#">Terms of Service </Nav.Link>
        <Nav.Link href="#">Cookie Policy </Nav.Link>
      </Navbar>
    </div>
  );
}
