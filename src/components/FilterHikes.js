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
      <Button
        onClick={() => {
          handleClick(null, null); // sets filterBy and keyword as null
        }}
        className="btn-custom"
      >
        All Hikes
      </Button>
      <div className="difficulty filters">
        <h4>Browse by Difficulty</h4>
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

      <div className="duration filters">
        <h4>Browse by Duration</h4>
        <Button
          onClick={() => {
            handleClick("duration", "min");
          }}
          className="btn-custom"
        >
          Short
        </Button>
        <Button
          onClick={() => {
            handleClick("duration", "hr");
          }}
          className="btn-custom"
        >
          Day Walk
        </Button>
        <Button
          onClick={() => {
            handleClick("duration", "days");
          }}
          className="btn-custom"
        >
          Overnight Walk
        </Button>
      </div>
    </div>
  );
}
