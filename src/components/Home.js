import React from "react";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div className="home">
      <div className="home-image">
        {/* image here with css */}
        <div className="home-header p-4">
          <p>Your favorite hike is just around the corner.</p>
        </div>
        <div className="home-feature p-3">
          <p>Find a hike. </p>
          <p>Create a list. </p>
          <p>Add hikes to your list. </p>
          <p>Get hiking!</p>
          <p>Truly Hikable!</p>
        </div>
        <div className="home-link p-3">
          <Link to="/hikes" className="btn btn-custom btn-lg" role="button">
            Click here to get started
          </Link>
        </div>
      </div>
    </div>
  );
}
