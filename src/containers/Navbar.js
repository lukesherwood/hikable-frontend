import React from "react";
import { NavLink } from "react-router-dom";
import LogoutOrLogin from '../components/LogoutOrLogin'
import {logUserOut} from '../actions/userActions'
import {connect} from 'react-redux'
import Navbar from 'react-bootstrap/Navbar'


export const linkStyle = {
  textDecoration: "none",
  color: "black",
  float: "left",
  textAlign: "center",
  // padding: "20px",
  fontSize: "30px",
};

class NavbarClass extends React.Component {


  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>
          <NavLink
            to="/"
            exact
            style={linkStyle}
            activeStyle={{ background: "goldenrod" }}
          >
            Hikable
          </NavLink>
        </Navbar.Brand>
        <div>
          { this.props.loggedIn ? 
          <NavLink
            to="/lists"
            exact
            style={linkStyle}
            activeStyle={{ background: "goldenrod" }}
          >
            My Lists
          </NavLink> 
          : null}
        </div>
        <div>
          <NavLink
            to="/hikes"
            exact
            style={linkStyle}
            activeStyle={{ background: "goldenrod" }}
          >
            Hikes
          </NavLink>
        </div>
        <LogoutOrLogin currentUser={this.props.user} loggedIn={this.props.loggedIn} logUserOut={this.props.logUserOut}/>
      </Navbar>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    user: state.users.user,
    loggedIn: state.users.loggedIn
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logUserOut: () => dispatch(logUserOut())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavbarClass);
