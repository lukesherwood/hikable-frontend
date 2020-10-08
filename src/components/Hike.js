import React, { Component } from 'react';
import SaveHikeToList from '../components/SaveHikeToList'
// import {useParams} from 'react-router-dom'

class Hike extends Component {
    
  render() {
    const { hike } = this.props;
    
    const list = this.props.list || null

    return (
      <li className="hike-card card" id={hike.id + "-hike-card"}>
        <img src={hike.photo} alt={hike.title} width="600"></img>
        <div className="card-text">
        <h3>{hike.title}</h3>
        <SaveHikeToList hike={hike} list={list}/>
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
};



export default Hike