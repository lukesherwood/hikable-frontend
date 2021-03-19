import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
// import Hikes from './Hikes'

export default function List(props) {
  function handleClick(event, list) {
    props.deleteList(list);
  }

  const { list } = props;

  return (
    <li className="list-card" id={list.id + "-list-card"}>
      <h2>{list.name}</h2>
      <Link className="btn btn-outline-primary" to={`/lists/${list.id}`}>
        More information
      </Link>
      <Button onClick={(e) => handleClick(e, list)} variant="outline-danger">
        {" "}
        Delete List
      </Button>
    </li>
  );
}
