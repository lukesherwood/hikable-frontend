import React, { Component } from "react";
import {connect} from 'react-redux'
import {withRouter, Link } from "react-router-dom";
import {signUserUp} from '../actions/userActions'

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      password_confirmation: "",
      errors: "",
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { username, email, password, password_confirmation } = this.state;
    let user = {
      username: username,
      email: email,
      password: password,
      password_confirmation: password_confirmation
    };
    this.props.signUserUp(user)
    this.props.history.push('/');
  };

  handleErrors = () => {
    return (
      <div>
        <ul>
          {this.state.errors.map((error) => {
            return <li key={error}>{error}</li>;
          })}
        </ul>
      </div>
    );
  };

  render() {
    const { username, email, password, password_confirmation } = this.state;
    return (
      <div>
        <h2>Sign Up</h2>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              name="username"
              onChange={(event) => this.handleChange(event)}
              value={username}
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              onChange={(event) => this.handleChange(event)}
              value={email}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              onChange={(event) => this.handleChange(event)}
              value={password}
            />
          </div>
          <div className="form-group">
            <label>Confirm password</label>
            <input
              type="password"
              name="password_confirmation"
              onChange={(event) => this.handleChange(event)}
              value={password_confirmation}
            />
          </div>
          <input type="submit" value="Sign Up" />
        </form>
        <div>Already have an account? <Link to='/signIn'>Sign In</Link></div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      signUserUp: (userInfo) => dispatch(signUserUp(userInfo))
  }
}

export default withRouter(connect(null, mapDispatchToProps)(Signup));
