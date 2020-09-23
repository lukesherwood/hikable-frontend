import axios from "axios";

const setUser = (payload) => ({ type: "SET_USER", payload})

export const logUserOut = () => ({type: "LOG_OUT"})

export const signUserUp = (userInfo) => dispatch => {
  console.log(userInfo, "userinfo")
  axios
      .post(
        "http://localhost:3001/api/v1/users",
        { user: userInfo },
        { withCredentials: true }
      )
  .then(data => {
      const authHeader = data.headers.authorization;
    if (authHeader.startsWith("Bearer ")) {
      const token = authHeader.substring(7, authHeader.length);
      localStorage.setItem("token", token);
      dispatch(setUser(data.data))
      console.log("user is now", data.data)
    }
  }).catch((error) => console.log("api errors:", error));
}

  // handleLogin = (data) => {
  //   console.log(data);
  //   const authHeader = data.headers.authorization;
  //   if (authHeader.startsWith("Bearer ")) {
  //     const token = authHeader.substring(7, authHeader.length);
  //     localStorage.setItem("token", token);
  //     this.setState({
  //       user: data.data,
  //     });
  //   }
  // };

  // return (dispatch) => {
  //   return fetch("http://localhost:3001/api/v1/users", {
  //     method: "POST",
  //     headers: {
  //         "Content-Type": "application/json"
  //     },
  //     body: JSON.stringify({
  //         user: data
  //     })
  // }).then(response => {
  //     return response.json()
  //   }).then(data => {
  //     console.log(data, "data from server")
  //     return dispatch({ type: 'ADD_USER', user: data })
  //   })
  // }

  // axios
  //     .post(
  //       "http://localhost:3001/api/v1/users",
  //       { user },
  //       { withCredentials: true }
  //     )
  //     .then((response) => {
  //       if (response.headers.authorization) {
  //         this.handleLogin(response);
  //       } else {
  //         this.setState({
  //           errors: response.data.errors,
  //         });
  //       }
  //     })
  //     .catch((error) => console.log("api errors:", error));
