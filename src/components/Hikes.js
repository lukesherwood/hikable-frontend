import React from "react";
import Hike from "./Hike";

function Hikes(props) {
  const { hikes } = props;
  const list = props.list || null;
  const hikeList = hikes.map((hike) => {
    return <Hike key={hike.id} hike={hike} list={list} />;
  });

  return <ul className="cards">{hikeList}</ul>;
}

export default Hikes;
