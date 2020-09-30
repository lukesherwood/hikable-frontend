import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import {connect} from 'react-redux'
import '../App.css';

import HikesContainer from './HikesContainer';
import ListsContainer from './ListsContainer'
import Home from './Home'
import Navbar from './Navbar'

import {autoLogin, logUserOut} from '../actions/userActions'

// React Notification
import 'react-notifications/lib/notifications.css';
import { NotificationContainer } from 'react-notifications';
import SignUp from '../components/SignUp';
import SignIn from '../components/SignIn'


class App extends Component {

  componentDidMount(){
    this.props.autoLogin()
  }

  render () {
    return (
      <div className="App">
          <div className="container">
            <Navbar/>
            <Switch>
              <Route exact path='/' component={Home}/>
              <Route exact path='/hikes' component={HikesContainer}/>
              <Route exact path='/lists' component={ListsContainer}/>
              <Route exact path='/signIn' component={SignIn}/>
              <Route exact path='/signUp' component={SignUp}/>
            </Switch>
            <NotificationContainer />
          </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userReducer: state.users
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    autoLogin: () => dispatch(autoLogin()),
    logUserOut: () => dispatch(logUserOut())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
