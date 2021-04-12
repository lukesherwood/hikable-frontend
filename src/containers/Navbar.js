import React from "react";
import { NavLink } from "react-router-dom";
import LogoutOrLogin from "../components/LogoutOrLogin";
import { logUserOut } from "../actions/userActions";
import { connect } from "react-redux";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import SearchHikesForm from "./SearchHikesForm";

class NavbarClass extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
        <Nav.Item>
          <Navbar.Brand as={NavLink} to="/">
            <img src="/Hikable-logo.png" alt="" height="80" width="150" />
          </Navbar.Brand>
        </Nav.Item>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav variant="pills" className="mr-auto">
            <Nav.Item>
              <Nav.Link eventKey={4 }as={NavLink} to="/hikes" exact>
                Hikes
              </Nav.Link>
            </Nav.Item>
            {this.props.loggedIn ? (
              <Nav.Item>
                <Nav.Link eventKey={5} as={NavLink} to="/lists" exact>
                  My Lists
                </Nav.Link>
              </Nav.Item>
            ) : null}
          <SearchHikesForm />
          <LogoutOrLogin
            currentUser={this.props.user}
            loggedIn={this.props.loggedIn}
            logUserOut={this.props.logUserOut}
          />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    user: state.users.user,
    loggedIn: state.users.loggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logUserOut: () => dispatch(logUserOut()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavbarClass);
