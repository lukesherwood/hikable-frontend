import React from "react";
import { Link, withRouter } from "react-router-dom";
import { NotificationManager } from "react-notifications";
import { NavDropdown } from "react-bootstrap";
class LogoutLogin extends React.Component {
  handleClick = (event) => {
    event.preventDefault();
    this.props.logUserOut();
    NotificationManager.success(
      `You have successfully logged out`,
      "Successful!",
      2000
    );
    this.props.history.push("/"); // the key to using this was to add withRouter!!
  };

  render() {
    return (
      <>
        {!this.props.loggedIn ? (
          <>
            <NavDropdown.Item as={Link} to="/signIn">
              Sign In
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/signUp">
              Register
            </NavDropdown.Item>
          </>
        ) : (
          <>
            <NavDropdown.Item as={Link} to="/user">
              Profile
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/signUp" onClick={this.handleClick}>
              Sign Out
            </NavDropdown.Item>
          </>
        )}
      </>
    );
  }
}
export default withRouter(LogoutLogin);
