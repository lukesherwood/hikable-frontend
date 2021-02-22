import { NotificationManager } from "react-notifications";
const axios = require("axios").default;

export const fetchLists = () => {
  return (dispatch) => {
    dispatch({ type: "LOADING_LISTS" });
    axios
      .get("http://localhost:3001/api/v1/lists", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((data) => {
        dispatch({ type: "ADD_LISTS", lists: data.data });
      })
      .catch(function (error) {
        dispatch({ type: "ERROR_LOADING", error: error }); // changes state so that user login sign up links are shown if fetch doesn't work due to not being logged in
      });
  };
};

export const createList = (listInfo) => {
  return (dispatch) => {
    dispatch({ type: "LOADING_LISTS" });
    axios
      .post(
        "http://localhost:3001/api/v1/lists",
        { list: listInfo },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then((data) => {
        dispatch({ type: "ADD_LIST", list: data.data });
      })
      .catch(function (error) {
        NotificationManager.error(
          `Error while creating new list!, ${error}`,
          "Error!"
        );
      });
  };
};

export const addHikeToList = (list, hike) => {
  const newListObj = {
    list: {
      name: list.name,
      description: list.description,
      id: list.id,
      user_id: list.user.id,
    },
    hike: { hike_id: hike.id },
  };
  return (dispatch) => {
    axios
      .put(`http://localhost:3001/api/v1/lists/${list.id}`, newListObj, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((data) => {
        dispatch({ type: "UPDATE_LIST", list: data.data });
        NotificationManager.success(
          `Successfully added a hike to your list, ${list.name}`,
          "Success!"
        );
      })
      .catch(function (error) {
        NotificationManager.error(
          `Error while updating new list!, ${error}`,
          "Error!"
        );
      });
  };
};

export const deleteHike = (list, hike) => {
  const newListObj = { list: { id: list.id }, hike: { hike_id: hike.id } };
  return (dispatch) => {
    axios
      .put(`http://localhost:3001/api/v1/lists/${list.id}`, newListObj, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((data) => {
        dispatch({ type: "UPDATE_LIST", list: data.data });
        NotificationManager.success(
          `Successfully removed a hike from your list, ${list.name}`,
          "Success!"
        );
      })
      .catch(function (error) {
        NotificationManager.error(
          `Error while updating list!, ${error}`,
          "Error!"
        );
      });
  };
};

export const deleteList = (inputList) => {
  console.log(inputList)
  // this submits list and user, need to remove user
  const data = { list: {name: inputList.name, description: inputList.description, id:inputList.id} };
  return (dispatch) => {
    fetch(`http://localhost:3001/api/v1/lists/${inputList.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then(() => {
        dispatch({ type: "DELETE_LIST", payload: inputList });
        NotificationManager.success(
          `Successfully deleted your list, ${inputList.name}`,
          "Success!"
        );
      })
      .catch(function (error) {
        NotificationManager.error(
          `Error while deleting list!, ${error}`,
          "Error!"
        );
      });
  };
};
