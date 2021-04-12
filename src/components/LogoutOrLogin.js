import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import { NotificationManager } from "react-notifications";
import { Nav } from "react-bootstrap";
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
      <div>
        {!this.props.loggedIn ? (
          <>
            <Nav.Item>
              <Nav.Link eventKey={1} as={NavLink} to="/signIn" exact>
                Sign In
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey={2} as={NavLink} to="/signUp" exact>
                Register
              </Nav.Link>
            </Nav.Item>
          </>
        ) : (
          <Nav.Item>
            <Nav.Link
              eventKey={3}
              as={NavLink}
              to="/signOut"
              onClick={this.handleClick}
            >
              Sign out
            </Nav.Link>
          </Nav.Item>
        )}
      </div>
    );
  }
}
export default withRouter(LogoutLogin);
