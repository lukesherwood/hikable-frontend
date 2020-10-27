import React, { Component } from 'react';
import {Link} from "react-router-dom";
class Home extends Component {

  
    
    render () {
      return (
        <div className="home">
          <div className="home-image" style={{height:"3600px", position: "absolute", width: "100%", left: "0px"}}> 
          {/* image here with css */} 
          <div className="home-header">
            <p>Your favourite hike is just around the corner.</p>
          </div>
          <div className="home-feature">
            <p>Find a hike. </p>
            <p>Create a list. </p>
            <p>Add hikes to your list. </p>
            <p>Get hiking!</p>
            <p>Truly Hikable!</p>
          </div>
          <div className="home-link">
            <Link to="/hikes" className="btn btn-primary btn-lg" role="button" >Click here to get started</Link>
          </div>
          </div>
        </div>
      );
    }
  }
  
  export default Home;