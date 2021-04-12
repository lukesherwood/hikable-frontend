import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

export default function Footer() {
  return (
    <div className="footer">
      <Navbar collapseOnSelect expand="md" className="navbar-bottom" bg="dark" variant="dark">
        <Navbar.Toggle aria-controls="footer-navbar-nav" />
        <Navbar.Collapse id="footer-navbar-nav">
          <Nav className="justify-content-center w-100">
            <Nav.Item className="pt-4 pr-2">
              2020 Hikable, All Rights Reserved
            </Nav.Item>
            <Navbar.Brand
              className="justify-content-center"
              as={NavLink}
              to="/"
            >
              <img src="/Hikable-logo.png" alt="hikable-logo" width="70" />
            </Navbar.Brand>
            <Nav.Link href="">Privacy Policy</Nav.Link>
            <Nav.Link href="">Terms of Service </Nav.Link>
            <Nav.Link href="">Cookie Policy </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
