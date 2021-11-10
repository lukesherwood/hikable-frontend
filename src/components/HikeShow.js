import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import {fetchHike} from '../actions/hikeActions'
import Reviews from './Reviews';
export default function HikeShow(props) {

  // const convertArray = (array) => {
  //   if (array) {
  //     let formattedArray = array.split(",")
  //     formattedArray = formattedArray.map(cat => cat.slice(2, -2))
  //     if (formattedArray.length > 0) {
  //       return formattedArray.map(category => <li key={category}>{category}</li>)
  //     } 
  //     return formattedArray
  //   }
  // }

  const dispatch = useDispatch();
  const { hikes} = props;
  const { id } = useParams()
  useEffect(() => { dispatch(fetchHike(id))}, [dispatch, id]
  )
    const hike = hikes.find((h) => h.id === parseInt(id))
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
              {hike.duration_category}
            </ul> 
          </div>
          {hike.length ? (<div className="hike-card-length">Length: {hike.length}</div>) : null}
          <div className="hike-card-description">
            Description: {hike.description}
          </div>
          <div className="hike-card-more-info">
          </div>
          <div className="hike-card-dog">
            Dogs: {hike.dog_friendly}
          </div>
          <div className="hike-card-region">
          Region:
            <ul>
              {hike.region}
            </ul> 
          </div>
            <a href={hike.routeURL} target="_blank" rel="noopener noreferrer">DOC Website Information</a>
          </div>
          <Reviews hike={hike}/>
        </div>
      );
    }
    return (<div>Sorry, we can't find that hike, try again.</div>)
}
