import React from "react";
import Hike from "./Hike";
import Row from "react-bootstrap/Row";
// import FilterHikes from "./FilterHikes";

export default function Hikes(props) {
  const { hikes } = props;
  const list = props.list || null;
  const hikeList = hikes.map((hike) => {
    return <Hike key={hike.id} hike={hike} list={list} />;
  });

  return (
    <Row>
      {hikeList}
    </Row>
  );
}
