import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Row from 'react-bootstrap/Row';
import List from './List';
import CreateListForm from '../containers/CreateListForm';

export default function Lists(props) {
  const { lists, deleteList, currentUser } = props;
  const listsArray = lists.map((list) => {
    return <List key={list.id} list={list} deleteList={deleteList} />;
  });

  return (
    <div className="justify-content-center">
      <h2 className="text-center">Lists</h2>
      <Row xs={1} className="lists-card-row">
        {listsArray}
        <Accordion>
          <Accordion.Toggle
            className="btn btn-custom"
            id="toggle-new-list-form"
            eventKey="0"
          >
            Create a new list
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <CreateListForm currentUser={currentUser} />
          </Accordion.Collapse>
        </Accordion>
      </Row>
    </div>
  );
}
