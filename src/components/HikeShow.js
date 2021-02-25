import React from 'react'

export default function HikeShow(props) {
    const { hikes, params } = props;
    if (hikes) {
      let hike = hikes.find((h) => h.id === parseInt(params.match.params.id));
      if (hike) {
        return (
          <div className="hike-item">
            <h2>{hike.title}</h2>
            <img src={hike.photo} alt={`${hike.name}`}/>
            <div className="hike-card-location">{hike.location}</div>
            <div className="hike-card-difficulty">{hike.difficulty}</div>
            <div className="hike-card-duration">{hike.duration}</div>
            <div className="hike-card-length">{hike.length}</div>
            <div className="hike-card-description">{hike.description}</div>
          </div>
        );
      }
    }
    return <div>Sorry that hike doesn't exist</div>;
  }