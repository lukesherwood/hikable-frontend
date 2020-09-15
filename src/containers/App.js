import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import '../App.css';
import HikesContainer from './HikesContainer';
import Navbar from '../components/Navbar'
import ListsContainer from './ListsContainer'
import Home from './Home'
import Sessions from '../components/Sessions'

class App extends Component {

  render () {
    return (
      <div className="App">
          <div className="container">
            <Navbar/>
            <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/hikes' component={HikesContainer}/>
            <Route exact path='/lists' component={ListsContainer}/>
            <Route exact path='/signIn' component={Sessions}/>
          </Switch>
            
          </div>
      </div>
    );
  }
}

export default App;
