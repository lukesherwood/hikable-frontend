import React from "react";
import List from "./List";
import CreateListForm from "../containers/CreateListForm";
import Accordion from "react-bootstrap/Accordion"
import Row from "react-bootstrap/Row"
import Button from "react-bootstrap/Button";

export default function Lists(props) {
  const { lists } = props;
  const listsArray = lists.map((list) => {
    return <List key={list.id} list={list} deleteList={props.deleteList} />;
  });

  return (
    <div>
      <h2>Lists</h2>
      <Row lg={1}>
        {listsArray}
        <Accordion>
          <Accordion.Toggle
            as={Button}
            variant="primary"
            id="toggle-new-list-form"
            eventKey="0"
          >
            Create a new list
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <CreateListForm currentUser={props.currentUser} />
          </Accordion.Collapse>
        </Accordion>
      </Row>
    </div>
  );
}
