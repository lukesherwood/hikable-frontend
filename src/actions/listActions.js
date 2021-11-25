import { NotificationManager } from 'react-notifications';
import { config } from '../Constants';

const axios = require('axios').default;

const WEB_URL = config.url.API_URL;

export const fetchLists = () => (dispatch) => {
  dispatch({ type: 'LOADING_LISTS' });
  axios
    .get(`${WEB_URL}/lists`, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
    .then((data) => {
      dispatch({ type: 'ADD_LISTS', lists: data.data });
    })
    .catch((error) => {
      dispatch({ type: 'ERROR_LOADING', error }); // changes state so that user login sign up links are shown if fetch doesn't work due to not being logged in
    });
};

export const createList = (listInfo) => (dispatch) => {
  dispatch({ type: 'LOADING_LISTS' });
  axios
    .post(
      `${WEB_URL}/lists`,
      { list: listInfo },
      {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      },
    )
    .then((data) => {
      dispatch({ type: 'ADD_LIST', list: data.data });
      NotificationManager.success(
        `Successfully created a list, ${data.data.name}`,
        'Success!',
      );
    })
    .catch((error) => {
      NotificationManager.error(
        `Error while creating new list!, ${error}`,
        'Error!',
      );
    });
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
      .put(`${WEB_URL}/lists/${list.id}`, newListObj, {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
      .then((data) => {
        dispatch({ type: 'UPDATE_LIST', list: data.data });
        NotificationManager.success(
          `Successfully added a hike to your list, ${list.name}`,
          'Success!',
        );
      })
      .catch((error) => {
        NotificationManager.error(
          `Error while updating new list!, ${error}`,
          'Error!',
        );
      });
  };
};

export const deleteList = (inputList) => {
  const data = { list: { name: inputList.name, description: inputList.description, id: inputList.id } };
  return (dispatch) => {
    fetch(`${WEB_URL}/lists/${inputList.id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then(() => {
        dispatch({ type: 'DELETE_LIST', payload: inputList });
        NotificationManager.success(
          `Successfully deleted your list, ${inputList.name}`,
          'Success!',
        );
      })
      .catch((error) => {
        NotificationManager.error(
          `Error while deleting list!, ${error}`,
          'Error!',
        );
      });
  };
};
