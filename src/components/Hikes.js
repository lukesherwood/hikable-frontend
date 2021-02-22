import React from "react";
import Hike from "./Hike";
import Row from "react-bootstrap/Row";

export default function Hikes(props) {
  const { hikes } = props;
  const list = props.list || null;
  const hikeList = hikes.map((hike) => {
    return <Hike key={hike.id} hike={hike} list={list} />;
  });

  return (
    <div className="cards">
      <Row xs={1} sm={2} md={3} lg={4}>
        {hikeList}
      </Row>
    </div>
  );
}
