import React from "react";
import { NavLink } from "react-router-dom";
import LogoutOrLogin from '../components/LogoutOrLogin'
import {logUserOut} from '../actions/userActions'
import {connect} from 'react-redux'


export const linkStyle = {
  textDecoration: "none",
  color: "black",
  float: "left",
  textAlign: "center",
  padding: "20px",
  fontSize: "30px",
};

class Navbar extends React.Component {


  render() {
    return (
      <div className="nav-bar">
        <div>
          <NavLink
            to="/"
            exact
            style={linkStyle}
            activeStyle={{ background: "goldenrod" }}
          >
            Hikable
          </NavLink>
        </div>
        <div>
          <NavLink
            to="/lists"
            exact
            style={linkStyle}
            activeStyle={{ background: "goldenrod" }}
          >
            Lists
          </NavLink>
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
      </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
