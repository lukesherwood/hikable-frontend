import React, { Component } from 'react';
import '../App.css';
import HikesContainer from './HikesContainer';
import Navbar from '../components/Navbar'

class App extends Component {

  render () {
    return (
      <div className="App">
          <div className="container">
            <Navbar/>
            <HikesContainer/>
          </div>
      </div>
    );
  }
}

export default App;
