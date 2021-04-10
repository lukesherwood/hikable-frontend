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
      <Navbar collapseOnSelect sticky="top" expand="md" bg="dark" variant="dark">
        <Navbar.Brand as={NavLink} to="/">
          <img src="/Hikable-logo.png" alt="" height="80" width="150" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav variant="pills" className="mr-auto">
            <>
              <Nav.Link as={NavLink} to="/hikes" exact>
                Hikes
              </Nav.Link>
            </>
            {this.props.loggedIn ? (
              <Nav.Link as={NavLink} to="/lists" exact>
                My Lists
              </Nav.Link>
            ) : null}
          </Nav>
          <SearchHikesForm />
          <LogoutOrLogin
            currentUser={this.props.user}
            loggedIn={this.props.loggedIn}
            logUserOut={this.props.logUserOut}
          />
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
