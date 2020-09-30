import { NotificationManager } from 'react-notifications';
const axios = require("axios").default;



export const fetchLists = () => {
  return (dispatch) => {
    dispatch({ type: "LOADING_LISTS" });
    axios
      .get("http://localhost:3001/api/v1/lists", {
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
    })
      .then((data) => {
        dispatch({ type: "ADD_LISTS", lists: data.data });
      })
      .catch(function (error) {
        // handle error
        dispatch({ type: "ERROR_LOADING", error:error }); // changes state so that user login sign up links are shown if fetch doesn't work due to not being logged in
      })
  };
};

export const createList = (listInfo) => {
  return (dispatch) => {
    dispatch({ type: "LOADING_LISTS" });
  axios
    .post(
      "http://localhost:3001/api/v1/lists", { list: listInfo}, {
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          "Authorization": `Bearer ${localStorage.getItem("token")}`
      }
    }
    ).then((data) => {
      dispatch({ type: "ADD_LIST", list: data.data });
    })
    .catch(function (error) {
      // handle error
      NotificationManager.error(`Error while creating new list!, ${error}`, 'Error!')
    })
};
};
