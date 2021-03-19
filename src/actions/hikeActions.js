import { NotificationManager } from "react-notifications";
import { config } from '../Constants' 
const axios = require("axios").default;
const WEB_URL = config.url.API_URL

export const fetchHikes = () => {
  return (dispatch) => {
    dispatch({ type: "LOADING_HIKES" });
    axios
      .get(WEB_URL+"/hikes", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((data) => {
        dispatch({ type: "ADD_HIKES", hikes: data.data });
      })
      .catch(function (error) {
        NotificationManager.error(
          `Error while fetching hikes!, ${error}`,
          "Error!"
        );
      });
  };
};

export const searchHikes = (keyword) => {
  const hike = {
    hike: {
      keyword: keyword,
    },
  };
  return (dispatch) => {
    axios
      .post(WEB_URL+"/hikes/search_hikes", hike, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((data) => {
        dispatch({ type: "SEARCH_HIKES", hikes: data.data });
      })
      .catch(function (error) {
        // NotificationManager.error(
        //   `Error while updating new list!, ${error}`,
        //   "Error!"
        // );
      });
  };
};
