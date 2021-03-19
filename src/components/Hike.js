import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Card from "react-bootstrap/Card";
import UpdateListHikes from "../containers/UpdateListHikes";
import { ButtonGroup } from "react-bootstrap";

export default function Hike(props) {
  const { hike } = props;
  const list = props.list || null;
  const lists = useSelector((state) => state.lists);
  const pictureWidth = props.picture || "600";
  return (
    <Card className="recipe-card col mx-2 mb-3" id={hike.id + "-hike-card"}>
      <Card.Img
        variant="top"
        src={hike.photo}
        alt={hike.title}
        width={pictureWidth}
      ></Card.Img>
      <Card.Body>
        <Card.Title>{hike.title}</Card.Title>

        <Card.Subtitle className="mb-2 text-muted">
          {hike.location}
        </Card.Subtitle>
        <div className="hike-card-difficulty">{hike.difficulty}</div>
        <div className="hike-card-duration">{hike.duration}</div>
        <div className="hike-card-length">{hike.length}</div>
        <div className="hike-card-description">{hike.description}</div>
      </Card.Body>
      <ButtonGroup>
        <Link className="btn btn-primary btn-sm" to={`/hikes/${hike.id}`}>
          More information
        </Link>
        <UpdateListHikes hike={hike} list={list} lists={lists} />
      </ButtonGroup>
    </Card>
  );
}
