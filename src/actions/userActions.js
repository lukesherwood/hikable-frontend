import axios from 'axios';
import { NotificationManager } from 'react-notifications';
import { config } from '../Constants';

const WEB_URL = config.url.API_URL;

const setUser = (payload) => ({ type: 'SET_USER', payload });

export const logUserOut = () => ({ type: 'LOG_OUT' });

export const signUserUp = (userInfo) => (dispatch) => {
  axios
    .post(`${WEB_URL}/users`, { user: userInfo }, { withCredentials: true })
    .then((data) => {
      // can we create a method as its duplicated below
      const authHeader = data.headers.authorization;
      if (authHeader.startsWith('Bearer ')) {
        const token = authHeader.substring(7, authHeader.length);
        localStorage.setItem('token', token);
        dispatch(setUser(data.data));
        // ownProps.history.push(`/`);
        NotificationManager.success(
          `Welcome ${data.data.username}, you have successfully created an account`,
          'Successful!',
          2000,
        );
      }
    })
    .catch(() => {
      NotificationManager.error(
        'Error while creating new user, please try again',
        'Error!',
      );
    });
};

export const fetchUser = (userInfo) => (dispatch) => {
  axios
    .post(
      `${WEB_URL}/users/sign_in`,
      { user: userInfo },
      { withCredentials: true },
    )
    .then((data) => {
      const authHeader = data.headers.authorization;
      if (authHeader.startsWith('Bearer ')) {
        const token = authHeader.substring(7, authHeader.length);
        localStorage.setItem('token', token);
        dispatch(setUser(data.data));
        // ownProps.history.push(`/`);
        NotificationManager.success(
          `Welcome ${data.data.username}`,
          'Successful!',
          2000,
        );
      }
    })
    .catch(() => {
      NotificationManager.error(
        'Error while signing in, please try again',
        'Error!',
      );
    });
};

export const autoLogin = () => (dispatch) => {
  const { token } = localStorage;
  if (token) {
    axios
      .get(`${WEB_URL}/users/auto_login`, {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })
      .then((data) => {
        if (data.data.message) {
          NotificationManager.error(
            `Error while signing in! ${data.data.message}`,
            'Error!',
          );
          localStorage.removeItem('token');
        } else if (data.data.id) {
          dispatch(setUser(data.data));
        }
      })
      .catch(() => {
        NotificationManager.error(
          'Error while signing in, please try again',
          'Error!',
        );
        localStorage.removeItem('token');
      });
  }
};
