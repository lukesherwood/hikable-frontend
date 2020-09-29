import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import { NotificationManager } from 'react-notifications';

export const buttonStyle = {
    textDecoration: "none",
    color: "black",
    float: "right",
    textAlign: "center",
    padding: "20px",
    fontSize: "20px"
  };

class LogoutLogin extends React.Component {
    
    handleClick = event => {
        event.preventDefault()
        this.props.logUserOut()
        NotificationManager.success(`You have successfully logged out`, 'Successful!', 2000)
        this.props.history.push('/');
      }
  
      render() {
        return (

        <div>
        {!this.props.loggedIn ? (
          <NavLink
            to="/signIn"
            exact
            style={buttonStyle}
          >
            Sign up/Sign in
          </NavLink>
        ) : (
          <button
            onClick={this.handleClick}
            style={buttonStyle}>
            Sign out
          </button>
        )}
      </div>
        )
      }
    }
export default withRouter(LogoutLogin)
      
