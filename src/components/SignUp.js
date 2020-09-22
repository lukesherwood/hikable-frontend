import React, { Component } from "react";
import axios from "axios";

// class SignUp extends Component {
//   constructor(props) {
// 		super(props);
// 		this.state = {
// 			username: '',
// 			email: '',
// 			password: '',
// 			picture: '',
// 		};
// 	}

//   handleChange = (event) => {
//     this.setState({
//       [event.target.name]: event.target.value,
//     });
//   };

//   handleSubmit = (event) => {
//     event.preventDefault();
//     const {name, email, password} = this.state
//     const user = {
//       name: name,
//       email: email,
//       password: password,
//     }
//     console.log(user, "submitted user")
//     this.props.fetchUsers(user)
//   }

//   render() {
//     return (
//       <div>
//         <h2>Sign Up</h2>
//         <form onSubmit={(event) => this.handleSubmit(event)}>
//           <div className="form-group">
//             <label>Name</label>
//             <input
//               type="text"
//               name="name"
//               onChange={(event) => this.handleChange(event)}
//               value={this.state.name}
//             />
//           </div>
//           <div className="form-group">
//             <label>Email</label>
//             <input
//               type="email"
//               name="email"
//               onChange={(event) => this.handleChange(event)}
//               value={this.state.email}
//             />
//           </div>
//           <div className="form-group">
//             <label>Password</label>
//             <input
//               type="password"
//               name="password"
//               onChange={(event) => this.handleChange(event)}
//               value={this.state.password}
//             />
//           </div>
//           <input type="submit" value="Sign Up" />
//         </form>
//       </div>
//     );
//   }
// }

// export default SignUp;

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
  handleLogin = (data) => {
    console.log(data)
  }
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    const { username, email, password} = this.state;
    let user = {
      name: username,
      email: email,
      password: password,
      };
    console.log(user)
    axios.post('http://localhost:3001/api/v1/users', {user}, {withCredentials: true})
    .then(response => {
      if (response.data.status === 'created') {
        this.handleLogin(response.data)
        this.redirect()
      } else {
        this.setState({
          errors: response.data.errors
        })
      }
    })
    .catch(error => console.log('api errors:', error))
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
    const { username, email, password } = this.state;
    return (
      <div>
        <h1>Sign Up</h1>{" "}
        <form onSubmit={this.handleSubmit}>
          <input
            placeholder="username"
            type="text"
            name="username"
            value={username}
            onChange={this.handleChange}
          />
          <input
            placeholder="email"
            type="text"
            name="email"
            value={email}
            onChange={this.handleChange}
          />
          <input
            placeholder="password"
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
          />{" "}
          <button placeholder="submit" type="submit">
            Sign Up
          </button>
        </form>
        <div>{this.state.errors ? this.handleErrors() : null}</div>
      </div>
    );
  }
}
export default Signup;
