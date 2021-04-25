import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import {fetchHike} from '../actions/hikeActions'
export default function HikeShow(props) {

  const convertArray = (array) => {
    if (array) {
      let formattedArray = array.split(",")
      formattedArray = formattedArray.map(cat => cat.slice(2, -2))
      if (formattedArray.length > 1) {
        return formattedArray.map(category => <li key={category}>{category}</li>)
      } 
      return formattedArray
    }
  }

  const dispatch = useDispatch();
  const { hikes, params } = props;
  useEffect(() => { dispatch(fetchHike(params.match.params.id))}, [dispatch, params.match.params.id]
  )
    const hike = hikes.find((h) => h.id === parseInt(params.match.params.id))
    if (hike) {
      return (
        <div className="hike-item rounded">
          <div className="hike-header rounded-top" style={{
                        backgroundImage: `url(${hike.photo})`, backgroundRepeat: 'no-repeat', width: '100%', height: '500px',
                    }}>
            <h1>{hike.title}</h1>
          </div>
          <div className="hike-item-body p-4">
          <div className="hike-card-location">Location: {hike.location}</div>
          <div className="hike-card-difficulty">
            Difficulty: {hike.difficulty}
          </div>
          <div className="hike-card-duration">Duration: {hike.duration}</div>
          <div className="hike-card-duration">
          Duration Category:
            <ul>
              {convertArray(hike.duration_category)}
            </ul> 
          </div>
          {hike.length ? (<div className="hike-card-length">Length: {hike.length}</div>) : null}
          <div className="hike-card-description">
            Description: {hike.description}
          </div>
          <div className="hike-card-more-info">
          </div>
          <div className="hike-card-dog">
            Dog Friendly: {hike.dog_friendly ? "Yes" : "No"}
          </div>
          <div className="hike-card-region">
          Region:
            <ul>
              {convertArray(hike.region)}
            </ul> 
          </div>
            <a href={hike.routeURL} target="_blank" rel="noopener noreferrer">DOC Website Information</a>
          </div>
        </div>
      );
    }
    return (<div>Sorry, we can't find that hike, try again.</div>)
}
