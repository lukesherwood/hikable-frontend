import React, { Component } from "react";
import List from "./List";
import CreateListForm from "./CreateListForm";
import Accordion from "react-bootstrap/Accordion"
import Button from "react-bootstrap/Button"

class Lists extends Component {
  render() {
    const { lists } = this.props;
    const listsArray = lists.map((list) => {
      return <List key={list.id} list={list} deleteList={this.props.deleteList} />;
    });

    return (
      <div>
        <h2>Lists</h2>
        <ul className="cards">
          {listsArray}
          <Accordion>
            <Accordion.Toggle as={Button} variant="primary" eventKey="0">
              Create a new list
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <CreateListForm currentUser={this.props.currentUser} />
            </Accordion.Collapse>
          </Accordion>
        </ul>
      </div>
    );
  }
}

export default Lists;
