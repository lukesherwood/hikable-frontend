import axios from "axios";

const setUser = (payload) => ({ type: "SET_USER", payload });

export const logUserOut = () => ({ type: "LOG_OUT" });

export const signUserUp = (userInfo) => (dispatch) => {
  console.log(userInfo, "userinfo");
  axios
    .post(
      "http://localhost:3001/api/v1/users",
      { user: userInfo },
      { withCredentials: true }
    )
    .then((data) => {
      const authHeader = data.headers.authorization;
      if (authHeader.startsWith("Bearer ")) {
        const token = authHeader.substring(7, authHeader.length);
        localStorage.setItem("token", token);
        dispatch(setUser(data.data));
        console.log("user is now", data.data);
      }
    })
    .catch((error) => console.log("api errors:", error));
};

export const fetchUser = (userInfo) => (dispatch) => {
  console.log(userInfo, "userinfo");
  axios
    .post(
      "http://localhost:3001/api/v1/users/sign_in",
      { user: userInfo },
      { withCredentials: true }
    )
    .then((data) => {
      const authHeader = data.headers.authorization;
      if (authHeader.startsWith("Bearer ")) {
        const token = authHeader.substring(7, authHeader.length);
        localStorage.setItem("token", token);
        dispatch(setUser(data.data));

        console.log("user is now", data.data);
        console.log("token is set as", localStorage.getItem("token"));
      }
    })
    .catch((error) => console.log("api errors:", error));
};

export const autoLogin = () => (dispatch) => {
    const token = localStorage.token;
    if (token) {
      console.log("getting user")
      axios.get("http://localhost:3001/api/v1/users/auto_login", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
        .then((data) => {
          console.log(data, "auto login data");
          if (data.message) {
            // An error will occur if the token is invalid.
            // If this happens, you may want to remove the invalid token.
            localStorage.removeItem("token");
          } else if(data.data.id) {
            dispatch(setUser(data.data));
          }
        });
    }
  };
