import React from 'react';
import '../App.css';
import Hikes from '../components/Hikes'

function App() {
  return (
    <div className="App">
        <div className='container'>
          <h1>Hikable</h1>
          <Hikes/>
        </div>
    </div>
  );
}

export default App;
