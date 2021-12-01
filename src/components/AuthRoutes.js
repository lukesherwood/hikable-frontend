import React from 'react';
import { Route, Navigate } from 'react-router-dom';

export default function AuthRoutes(props) {
  return props.loggedIn ? <Route {...props} /> : <Navigate to="/signIn" />;
}
