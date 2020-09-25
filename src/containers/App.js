import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import '../App.css';
import HikesContainer from './HikesContainer';
import Navbar from '../components/Navbar'
import ListsContainer from './ListsContainer'
import Home from './Home'
import SessionsContainer from '../containers/SessionsContainer'
import {autoLogin, logUserOut} from '../actions/userActions'
import {connect} from 'react-redux'


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
            <Route exact path='/signIn' component={SessionsContainer}/>
            <Route exact path='/signOut' component={SessionsContainer}/>
          </Switch>
          <div>
         
          </div>
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
