import axios from "axios";
import { NotificationManager } from "react-notifications";

const setUser = (payload) => ({ type: "SET_USER", payload });

export const logUserOut = () => ({ type: "LOG_OUT" });

export const signUserUp = (userInfo, ownProps) => (dispatch) => {
  axios
    .post(
      "http://localhost:3001/api/v1/users",
      { user: userInfo },
      { withCredentials: true }
    )
    .then((data) => {
      // can we create a method as its duplicated below
      const authHeader = data.headers.authorization;
      if (authHeader.startsWith("Bearer ")) {
        const token = authHeader.substring(7, authHeader.length);
        localStorage.setItem("token", token);
        dispatch(setUser(data.data))
        ownProps.history.push(`/`)
        NotificationManager.success(
          `Welcome ${data.data.username}, you have successfully created an account`,
          "Successful!",
          2000
        )
      }
    })
    .catch((error) => {
      NotificationManager.error(
        `Error while creating new user, please try again`,
        "Error!"
      );
    });
};

export const fetchUser = (userInfo, ownProps) => (dispatch) => {
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
        ownProps.history.push(`/`)
        NotificationManager.success(
          `Welcome ${data.data.username}`,
          "Successful!",
          2000
        )
      }
    })
    .catch((error) => {
      NotificationManager.error(
        `Error while signing in, please try again`,
        "Error!"
      );
    });
};

export const autoLogin = () => (dispatch) => {
  const token = localStorage.token;
  if (token) {
    axios
      .get("http://localhost:3001/api/v1/users/auto_login", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((data) => {
        if (data.data.message) {
          NotificationManager.error(
            `Error while signing in! ${data.data.message}`,
            "Error!"
          );
          localStorage.removeItem("token");
        } else if (data.data.id) {
          dispatch(setUser(data.data));
          NotificationManager.success(
            `Welcome back, ${data.data.username}`,
            "Successful!",
            2000
          );
        }
      });
  }
};
