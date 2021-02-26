import React from "react";
// import { useSelector } from 'react-redux'
// import Fuse from "fuse.js";
import SearchBar from "./SearchBar"


function SearchFunction() {
  
    return (
      <div>
        <h1 className="Title">My Favorite hikes</h1>
        <SearchBar
          placeholder="Search"
         />
        <div>

        </div>
      </div>
    );
  }  

export default SearchFunction;
