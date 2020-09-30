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
          <div className="signUp-signIn-container">
          <NavLink
            to="/signIn"
            exact
            style={buttonStyle}
            activeStyle={{ background: "goldenrod" }}
          >
            Sign in
          </NavLink>
           <NavLink
           to="/signUp"
           exact
           style={buttonStyle}
           activeStyle={{ background: "goldenrod" }}
         >
           Sign up
         </NavLink>
         </div>
        ) : (
          <div className="logged-in-container">
            {/* <div>Welcome {this.props.currentUser.username}</div> */}
          <button
            onClick={this.handleClick}
            style={buttonStyle}>
            Sign out
          </button>
          </div>
        )}
      </div>
        )
      }
    }
export default withRouter(LogoutLogin)
      
