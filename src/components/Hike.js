import React from "react";
import { useSelector } from 'react-redux'
import UpdateListHikes from "../containers/UpdateListHikes";

export default function Hike(props) {
  const { hike } = props;
  const list = props.list || null;
  const lists = useSelector(state => state.lists)
  return (
    <li className="hike-card card" id={hike.id + "-hike-card"}>
      <img src={hike.photo} alt={hike.title} width="600"></img>
      <div className="card-text">
        <h3>{hike.title}</h3>
        <UpdateListHikes hike={hike} list={list} lists={lists}/>
        <div className="hike-card-info">
          <div className="hike-card-location">{hike.location}</div>
          <div className="hike-card-difficulty">{hike.difficulty}</div>
          <div className="hike-card-duration">{hike.duration}</div>
          <div className="hike-card-length">{hike.length}</div>
          <div className="hike-card-description">{hike.description}</div>
        </div>
      </div>
    </li>
  );
}
