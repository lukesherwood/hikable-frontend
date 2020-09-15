import React, { Component } from 'react';

class Sessions extends Component {

    state = {
        name: '',
        email: "",
        password: ""
      };
     
      handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
      };
     
      handleSubmit = event => {
        event.preventDefault();
        console.log(this.state)
        // this.props.addTodo(this.state);
      };

  render() {

    return (
        <div>
            <h2>Sign Up</h2>
            <form onSubmit={event => this.handleSubmit(event)}>
            <div className="form-group">
            <label>Name</label>
            <input
            type="text"
            name="name"
            onChange={event => this.handleChange(event)}
            value={this.state.name}
            />
            </div>
            <div className="form-group">
            <label>Email</label>
            <input
            type="email"
            name="email"
            onChange={event => this.handleChange(event)}
            value={this.state.email}
            />
            </div>
            <div className="form-group">
            <label>Password</label>
            <input
            type="password"
            name="password"
            onChange={event => this.handleChange(event)}
            value={this.state.password}
            />
            </div>
            <input type="submit" value="Sign Up" />
            </form>
      </div>
      
    );
  }
};

export default Sessions;