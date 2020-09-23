import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import '../App.css';
import HikesContainer from './HikesContainer';
import Navbar from '../components/Navbar'
import ListsContainer from './ListsContainer'
import Home from './Home'
import SessionsContainer from '../containers/SessionsContainer'
import {autoLogin} from '../actions/userActions'
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
          </Switch>
          <div>
          {
              !this.props.userReducer.loggedIn ? <h1>Sign Up or Login!</h1> : <h1>Welcome, {this.props.userReducer.user.username}</h1>
            }
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
    autoLogin: () => dispatch(autoLogin())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
