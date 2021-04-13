import React from "react";
import Hikes from "./Hikes";
import { Jumbotron } from "react-bootstrap";

export default function ListShow(props) {
  const { lists, params } = props;
  if (lists) {
    let list = lists.find((l) => l.id === parseInt(params.match.params.id));
    if (list) {
      return (
        <div className="list-item w-100">
          <Jumbotron className="header-theme">
            <div className="display-4">{list.name}</div>
            <div className="lead font-italic">{list.description}</div>
            <div className="float-right pr-3">{list.hikes.length} Hikes</div>
            <hr className="my-4" />
          </Jumbotron>
          <div className="list-hikes-rows">
          <h3>Saved Hikes:</h3>
          <Hikes hikes={list.hikes} list={list} />
          </div>
        </div>
      );
    }
  }
  return <div>Sorry that list doesn't exist</div>;
}
