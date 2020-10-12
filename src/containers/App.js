import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import {connect} from 'react-redux'
import '../App.css';

import HikesContainer from './HikesContainer';
import ListsContainer from './ListsContainer'
import Home from './Home'
import NavbarClass from './Navbar'
import ListShow from '../components/ListShow'

import {autoLogin, logUserOut} from '../actions/userActions'

// React Notification
import 'react-notifications/lib/notifications.css';
import { NotificationContainer } from 'react-notifications';
import SignUp from '../components/SignUp';
import SignIn from '../components/SignIn'
import { fetchLists } from '../actions/listActions';
import Container from 'react-bootstrap/Container'


class App extends Component {

  componentDidMount(){
    this.props.autoLogin()
    this.props.fetchLists()
  }

  render () {
    return (
      <div className="App">
          <Container fluid>
            <NavbarClass/>
            <Switch>
              <Route exact path='/' component={Home}/>
              <Route exact path='/hikes' component={HikesContainer}/>
              {this.props.loggedIn ? 
              <>
              <Route exact path='/lists' component={ListsContainer}/> 
              <Route path='/lists/:id' render={(params) => <ListShow lists={this.props.lists} params={params}/>}/>
              </>
              : null }
              <Route exact path='/signIn' component={SignIn}/>
              <Route exact path='/signUp' component={SignUp}/>
            </Switch>
            <NotificationContainer />
            </Container>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    loggedIn: state.users.loggedIn,
    lists: state.lists.lists
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    autoLogin: () => dispatch(autoLogin()),
    logUserOut: () => dispatch(logUserOut()),
    fetchLists: () => dispatch(fetchLists())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
