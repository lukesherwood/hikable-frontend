import React from 'react';
import { Navigate } from 'react-router-dom';

export const Unauthorized = () => {
  return (
    <Navigate to="/signIn" />
  );
};
