import React from "react";
import Hike from "./Hike";
import Row from "react-bootstrap/Row";
import MapContainer  from './GoogleMapComponent';
import FilterHikes from "./FilterHikes";

export default function Hikes(props) {
  const { hikes, fetchHikes, list = null } = props;
  const hikeList = hikes.map((hike) => {
    return <Hike key={hike.id} hike={hike} list={list} />;
  });

  return (
    <>
    <MapContainer hikes={hikes}/>
    <FilterHikes fetchData={fetchHikes}/>
    <Row className="hike-cards-row">
      {hikeList}
    </Row>
    </>
  );
}
