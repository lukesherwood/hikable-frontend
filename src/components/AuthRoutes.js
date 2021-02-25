import React from 'react'
import { useSelector } from "react-redux"
import { Route, Redirect } from 'react-router-dom';

export default function AuthRoutes(props) {
    const loggedIn = useSelector((state) => state.users.loggedIn);
    return loggedIn ? <Route {...props} /> : <Redirect to='/signIn' />
}
