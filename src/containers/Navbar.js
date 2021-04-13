import React from "react";
import { NavLink } from "react-router-dom";
import LogoutOrLogin from "../components/LogoutOrLogin";
import { logUserOut } from "../actions/userActions";
import { connect } from "react-redux";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import SearchHikesForm from "./SearchHikesForm";
import { NavDropdown } from "react-bootstrap";
import { PersonCircle } from "react-bootstrap-icons";
class NavbarClass extends React.Component {
  render() {
    const navDropdownTitle = <PersonCircle size="32" />;
    return (
      <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
        <Nav.Item>
          <Navbar.Brand as={NavLink} to="/" eventKey={3} exact>
            <img src="/Hikable-logo.png" alt="" height="80" width="150" />
          </Navbar.Brand>
        </Nav.Item>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav.Item>
              <Nav.Link eventKey={1} as={NavLink} to="/hikes" exact>
                Hikes
              </Nav.Link>
            </Nav.Item>
            {this.props.loggedIn ? (
              <Nav.Item>
                <Nav.Link eventKey={2} as={NavLink} to="/lists" exact>
                  My Lists
                </Nav.Link>
              </Nav.Item>
            ) : null}
            <SearchHikesForm />
            <Nav.Item>
              <NavDropdown alignRight title={navDropdownTitle} id="basic-nav-dropdown">
                  <LogoutOrLogin
                    currentUser={this.props.user}
                    loggedIn={this.props.loggedIn}
                    logUserOut={this.props.logUserOut}
                  />
              </NavDropdown>
            </Nav.Item>
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
