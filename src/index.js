import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { LoadScript } from '@react-google-maps/api';
import App from './containers/App';
import store from './store.js';
// needs to load google here otherwise get error for having more than one loadscript component at one time

const apiKey = process.env.REACT_APP_GOOGLE_API_KEY;

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <LoadScript googleMapsApiKey={apiKey}>
        <App />
      </LoadScript>
    </Router>
  </Provider>,
  document.getElementById('root'),
);
