/* eslint-disable react/function-component-definition */
/* eslint-disable func-names */
import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export const PrivateRoute = function ({ children }) {
  const loggedIn = useSelector((state) => state.users.loggedIn);
  return loggedIn ? { children } : <Navigate to="/" />;
};
