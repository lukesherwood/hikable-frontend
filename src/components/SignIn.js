import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUser } from "../actions/userActions";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
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
    const { email, password } = this.state;
    let user = {
      email: email,
      password: password,
    };
    this.props.fetchUser(user);
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
    const { email, password } = this.state;
    return (
      <div>
        <h2>Sign In</h2>
        <form onSubmit={(event) => this.handleSubmit(event)}>
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
          <input type="submit" value="Sign In" />
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUser: (userInfo) => dispatch(fetchUser(userInfo)),
  };
};

export default connect(null, mapDispatchToProps)(SignIn);
