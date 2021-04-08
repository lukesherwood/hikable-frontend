import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { ButtonGroup } from "react-bootstrap";

export default function List(props) {
  function handleClick(event, list) {
    props.deleteList(list);
  }

  const { list } = props;

  return (
    <Card className="list-card" id={list.id + "-list-card"}>
      <h2>{list.name}</h2>
      <ButtonGroup>
      <Link className="btn btn-outline-primary" to={`/lists/${list.id}`}>
        More Information
      </Link>
      <div className="">
      <Button onClick={(e) => handleClick(e, list)} variant="outline-danger">
        {" "}
        Delete List
      </Button>
      </div>
      </ButtonGroup>
    </Card>
  );
}
