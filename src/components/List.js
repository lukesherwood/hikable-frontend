import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { ButtonGroup } from "react-bootstrap";

export default function List(props) {
  function handleClick(event, list) {
    const confirmed = window.confirm("Do you really want to delete this list?")
    if (confirmed) {
    props.deleteList(list);
    }
  }

  const { list } = props;

  return (
    <div className="list-card">
        <ButtonGroup size="sm" className="float-right p-2">
          <Link
            className="btn btn-custom list-btn btn-sm "
            to={`/lists/${list.id}`}
          >
            More Information
          </Link>
          <Button
            onClick={(e) => handleClick(e, list)}
            variant="outline-danger"
            className="list-btn btn-sm"
          >
            Delete
          </Button>
        </ButtonGroup>
        <Link
            className=" "
            to={`/lists/${list.id}`}
          >
            <h3>{list.name}</h3>
          </Link>
      
    </div>
  );
}
