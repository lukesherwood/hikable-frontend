import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Card from 'react-bootstrap/Card';
import { ButtonGroup } from 'react-bootstrap';
import UpdateListHikes from '../containers/UpdateListHikes';
import DifficultyBadge from './DifficultyBadge';

export default function Hike(props) {
  const { hike, list = null, picture = '600' } = props;
  const lists = useSelector((state) => state.lists);
  return (
    <Card className="hike-card col-3 mx-2 mb-3" id={hike.id + '-hike-card'}>
      <Card.Img
        src={hike.photo}
        alt={hike.title}
        width={picture}
      />
      <Card.Body>
        <Card.Title>{hike.title}</Card.Title>

        <Card.Subtitle className="mb-2 text-muted font-italic">
          {hike.location.map(location => <div key={location}><span>&#8226;</span> {location}</div>)}
        </Card.Subtitle>
        <DifficultyBadge difficulty={hike.difficulty} />
        <div className="hike-card-duration">{hike.duration}</div>
        <div className="hike-card-length">{hike.length}</div>
        <div className="hike-card-description">{hike.description}</div>
      </Card.Body>
      <ButtonGroup>
        <Link className="btn btn-custom btn-sm" to={`/hikes/${hike.id}`}>
          More information
        </Link>
        <UpdateListHikes hike={hike} list={list} lists={lists} />
      </ButtonGroup>
    </Card>
  );
}
