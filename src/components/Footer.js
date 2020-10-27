import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

class Footer extends Component {
  render() {
    return (
      <div className="sticky-bottom">
        <Navbar className="navbar-bottom justify-content-center" bg="dark" variant="dark">
          <Navbar.Brand href="/">
            <img src="/Hikable-logo.png" alt="hikable-logo" width="70" />
          </Navbar.Brand>
          <Nav.Item>2020 Hikable, All Rights Reserved</Nav.Item>
          <Nav.Link href="/">Privacy Policy</Nav.Link>
          <Nav.Link href="/">Terms of Service </Nav.Link>
          <Nav.Link href="/">Cookie Policy </Nav.Link>
        </Navbar>
      </div>
    );
  }
}

export default Footer;
