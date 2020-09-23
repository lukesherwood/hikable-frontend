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

export const fetchUser = (userInfo) => dispatch => {
  console.log(userInfo, "userinfo")
  axios
      .post(
        "http://localhost:3001/api/v1/users/sign_in",
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
      console.log("token is set as", localStorage.getItem("token"))
    }
  }).catch((error) => console.log("api errors:", error));
}

export const autoLogin = () => dispatch => {
  fetch(`http://localhost:3001/api/v1/users/sign_in`, {
      headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          "Authorization": `Bearer ${localStorage.getItem("token")}`
      }
  })
  .then(res => res.json())
  .then(data => {
      localStorage.setItem("token", data.token)
      console.log(data.token, "should be", localStorage.getItem("token")) // this is not showing correctly upon refresh?? firefox addons interfering?
      dispatch(setUser(data.data))
  })
}
