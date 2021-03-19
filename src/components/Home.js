import React from "react";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div className="home">
      <div className="home-image">
        {/* image here with css */}
        <br></br>
        <br></br>
        <div className="home-header">
          <p>Your favorite hike is just around the corner.</p>
        </div>
        <br></br>
        <br></br>
        <div className="home-feature">
          <p>Find a hike. </p>
          <p>Create a list. </p>
          <p>Add hikes to your list. </p>
          <p>Get hiking!</p>
          <p>Truly Hikable!</p>
        </div>
        <br></br>
        <br></br>
        <div className="home-link">
          <Link to="/hikes" className="btn btn-primary btn-lg" role="button">
            Click here to get started
          </Link>
        </div>
        <br></br>
      </div>
    </div>
  );
}
