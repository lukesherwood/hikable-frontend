import { NotificationManager } from 'react-notifications';
import { config } from '../Constants';

const axios = require('axios').default;

const WEB_URL = config.url.API_URL;

export const fetchHikes = (filterData, page) => {
  let stringQuery = '';
  const page_number = page || '1';
  return (dispatch) => {
    if (filterData) {
      if (filterData === 'Reset') {
        dispatch({ type: 'RESET_FILTERS' });
      }
      for (const filter in filterData) {
        for (const query in filterData[filter]) {
          if (filterData[filter][query]) {
            stringQuery += `&${filter}[]=${query}`;
            dispatch({ type: 'SET_QUERY', data: { filterData } });
          }
        }
      }
    }

    dispatch({ type: 'LOADING_HIKES' });
    axios
      .get(`${WEB_URL}/hikes/?page=${page_number}${stringQuery}`, {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
      .then((data) => {
        dispatch({ type: 'ADD_HIKES', hikes: data.data.hikes });
        dispatch({ type: 'SET_PAGES', data: data.data.meta });
      })
      .catch((error) => {
        dispatch({ type: 'LOADING_ERROR' });
        NotificationManager.error(
          `Error while fetching hikes!, ${error}`,
          'Error!',
        );
      });
  };
};

export const searchHikes = (keyword) => (dispatch) => {
  dispatch({ type: 'LOADING_HIKES' });
  axios
    .get(`${WEB_URL}/hikes?keyword=${keyword}`, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
    .then((data) => {
      dispatch({ type: 'SEARCH_HIKES', hikes: data.data.hikes });
    })
    .catch((error) => {
      dispatch({ type: 'LOADING_ERROR' });
      // NotificationManager.error(
      //   `Error while updating new list!, ${error}`,
      //   "Error!"
      // );
    });
};

export const fetchHike = (id) => (dispatch) => {
  dispatch({ type: 'LOADING_HIKES' });
  axios
    .get(`${WEB_URL}/hikes/${id}`, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
    .then((data) => {
      dispatch({ type: 'SET_HIKE', hike: data.data });
    })
    .catch((error) => {
      dispatch({ type: 'LOADING_ERROR' });
      // NotificationManager.error(
      //   `Error while updating new list!, ${error}`,
      //   "Error!"
      // );
    });
};

export const deleteHike = (list, hike) => {
  const HikeObj = { hike: { id: hike.id, list_id: list.id } };
  return (dispatch) => {
    axios
      .put(`${WEB_URL}/hikes/${hike.id}/remove_hike_list`, HikeObj, {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
      .then((data) => {
        dispatch({ type: 'UPDATE_LIST', list: data.data });
        NotificationManager.success(
          `Successfully removed a hike from your list, ${list.name}`,
          'Success!',
        );
      })
      .catch((error) => {
        NotificationManager.error(
          `Error while updating list!, ${error}`,
          'Error!',
        );
      });
  };
};

export const addReviewToHike = (reviewData, hikeId) => (dispatch) => {
  dispatch({ type: 'LOADING_HIKES' });
  axios
    .post(
      `${WEB_URL}/hikes/${hikeId}/reviews`,
      reviewData,
      {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      },
    )
    .then((data) => {
      dispatch({ type: 'ADD_REVIEW', hike: data.data });
    })
    .catch((error) => {
      NotificationManager.error(
        `Error while creating new comment!, ${error}`,
        'Error!',
      );
      dispatch({ type: 'LOADING_ERROR' });
    });
};
