import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import {fetchHike} from '../actions/hikeActions'
export default function HikeShow(props) {

  const dispatch = useDispatch();
  const { hikes, params } = props;
  useEffect(() => { dispatch(fetchHike(params.match.params.id))}, [dispatch, params.match.params.id]
  )
    const hike = hikes.find((h) => h.id === parseInt(params.match.params.id))
    if (hike) {
      return (
        <div className="hike-item">
          <h2>{hike.title}</h2>
         <img width="100%" src={hike.photo} alt={`${hike.name}`} />
          <div className="hike-card-location">Location: {hike.location}</div>
          <div className="hike-card-difficulty">
            Difficulty: {hike.difficulty}
          </div>
          <div className="hike-card-duration">Duration: {hike.duration}</div>
          <div className="hike-card-duration">Duration Category: {hike.duration_category === `["Under 1 hour"]` ? "Short" : hike.duration_category}</div>
         
          {hike.length ? (<div className="hike-card-length">Length: {hike.length}</div>) : null}
          <div className="hike-card-description">
            Description: {hike.description}
          </div>
          <div className="hike-card-more-info">
            <a href={hike.routeURL} target="_blank" rel="noopener noreferrer">DOC Website Information</a>
          </div>
          <div className="hike-card-dog">
            Dog Friendly: {hike.dog_friendly ? "Yes" : "No"}
          </div>
          {hike.region ? (
          <div className="hike-card-region">
            Region: {hike.region.slice(2,-2)}
          </div> ) : null }
        </div>
      );
    }
    return (<div>Sorry, we can't find that hike, try again.</div>)
}
