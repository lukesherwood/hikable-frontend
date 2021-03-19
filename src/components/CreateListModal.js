import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import { useSelector } from "react-redux";
import CreateListForm from "../containers/CreateListForm";

function CreateNewModalForm(props) {
  // this can be exported to its own file
  const currentUser = useSelector((state) => state.users.user);
  // need to get currentUser to add to create list form

  return (
    <Modal {...props} size="lg" centered>
      <Modal.Body>
        <CreateListForm currentUser={currentUser} />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default function CreateListModal() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Dropdown.Item onClick={() => setModalShow(true)}>
        Create a new list
      </Dropdown.Item>

      <CreateNewModalForm show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
}
