import React from "react";
import Hike from "./Hike";
import Row from "react-bootstrap/Row";
import MapContainer  from './GoogleMapComponent';

export default function Hikes(props) {
  const { hikes } = props;
  const list = props.list || null;
  const hikeList = hikes.map((hike) => {
    return <Hike key={hike.id} hike={hike} list={list} />;
  });

  return (
    <>
    <MapContainer hikes={hikes}/>
    <Row className="hike-cards-row">
      {hikeList}
    </Row>
    </>
  );
}
