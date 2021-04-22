import { NotificationManager } from "react-notifications";
import { config } from "../Constants";
const axios = require("axios").default;
const WEB_URL = config.url.API_URL;

export const fetchHikes = (filterData, page) => {
  // console.log(filterData, "data");
  let stringQuery = "";
  const page_number = page || "1";
  return (dispatch) => {
    if (filterData) {
      for (const filter in filterData) {
        for (const query in filterData[filter]) {
          if (filterData[filter][query]) {
          stringQuery += `&${filter}[]=${query}`; // this appears to be the wrong query only fetches for last query
          dispatch({ type: "SET_QUERY", data: {filterData} });
          }
        }
      }
    }

    dispatch({ type: "LOADING_HIKES" });
    axios
      .get(WEB_URL + `/hikes/?page=${page_number}` + stringQuery, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((data) => {
        dispatch({ type: "ADD_HIKES", hikes: data.data.hikes });
        dispatch({ type: "SET_PAGES", data: data.data });
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
  return (dispatch) => {
    dispatch({ type: "LOADING_HIKES" });
    axios
      .get(WEB_URL + `/hikes?keyword=${keyword}`, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((data) => {
        dispatch({ type: "SEARCH_HIKES", hikes: data.data.hikes });
      })
      .catch(function (error) {
        // NotificationManager.error(
        //   `Error while updating new list!, ${error}`,
        //   "Error!"
        // );
      });
  };
};

export const fetchHike = (id) => {
  return (dispatch) => {
    dispatch({ type: "LOADING_HIKES" });
    axios
      .get(WEB_URL + `/hikes/${id}`, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((data) => {
        dispatch({ type: "ADD_HIKE", hike: data.data });
      })
      .catch(function (error) {
        // NotificationManager.error(
        //   `Error while updating new list!, ${error}`,
        //   "Error!"
        // );
      });
  };
};

export const deleteHike = (list, hike) => {
  const HikeObj = { hike: { id: hike.id, list_id: list.id } };
  return (dispatch) => {
    axios
      .put(WEB_URL + `/hikes/${hike.id}/remove_hike_list`, HikeObj, {
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
