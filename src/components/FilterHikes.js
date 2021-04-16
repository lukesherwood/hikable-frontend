import React from "react";
import { Button } from "react-bootstrap";
import { fetchHikes } from "../actions/hikeActions";
import { useDispatch } from "react-redux";

export default function FilterHikes() {
  const dispatch = useDispatch();
  const handleClick = (filterBy, keyword) => {
    dispatch(fetchHikes(filterBy, keyword));
  };
  return (
    <div className="filters">
      <h4>Browse by Difficulty</h4>
      <Button className="btn-custom">All</Button>
      <Button
        onClick={() => {
          handleClick("difficulty", "Easiest");
        }}
        className="btn-custom"
      >
        Easiest
      </Button>
      <Button
        onClick={() => {
          handleClick("difficulty", "Easy");
        }}
        className="btn-custom"
      >
        Easy
      </Button>
      <Button
        onClick={() => {
          handleClick("difficulty", "Intermediate");
        }}
        className="btn-custom"
      >
        Intermediate
      </Button>
      <Button
        onClick={() => {
          handleClick("difficulty", "Advanced");
        }}
        className="btn-custom"
      >
        Advanced
      </Button>
    </div>
  );
}
