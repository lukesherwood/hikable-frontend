import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Hike from "./Hike";

export default function ModalHikes(props) {
  let hikes = props.hikes || [];
  const hikeList = hikes.map((hike) => {
    return <Hike key={hike.id} hike={hike} picture={"150"} />;
  });

  return (
    <Modal {...props} size="md" centered>
      <Modal.Body>
        <h3>Results for '{props.keyword.keyword}'</h3>
        {hikeList}
        {hikes.length === 0 ? "Sorry no hikes found" : null}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
