/* eslint-disable react/function-component-definition */
import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import { useSelector } from 'react-redux';
import CreateListForm from '../containers/CreateListForm';

// eslint-disable-next-line func-names
const CreateNewModalForm = function (props) {
  // this can be exported to its own file
  const currentUser = useSelector((state) => state.users.user);
  // need to get currentUser to add to create list form
  const { onHide } = props;
  return (
    <Modal {...props} size="lg" centered>
      <Modal.Body>
        <CreateListForm currentUser={currentUser} />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

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
