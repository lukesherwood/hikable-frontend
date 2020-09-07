import React, { Component } from 'react';
import '../App.css';
import HikesContainer from './HikesContainer';

class App extends Component {

  render () {
    return (
      <div className="App">
          <div className='container'>
            <h1>Hikable</h1>
            {<HikesContainer/>}
          </div>
      </div>
    );
  }
}

export default App;
