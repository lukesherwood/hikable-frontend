import React from "react";
import { Link, withRouter } from "react-router-dom";
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
          <Nav variant="pills">
            <Nav.Link as={Link} eventKey="4" to="/signIn" exact>
              Sign In
            </Nav.Link>
            <Nav.Link as={Link} eventKey="5" to="/signUp" exact>
              Register
            </Nav.Link>
          </Nav>
        ) : (
          <Nav variant="pills">
            <Nav.Link as={Link} eventKey="6" to="/signOut" onClick={this.handleClick}>
              Sign out
            </Nav.Link>
          </Nav>
        )}
      </div>
    );
  }
}
export default withRouter(LogoutLogin);
