import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const Modal1 = (props) => {
  const [modal, setModal] = useState(false);

  const toggle = (e) => {
    e.preventDefault();
    setModal((prev) => !prev);
    props.toggle(!modal);
  };
  return (
    <Modal isOpen={props.show} toggle={toggle}>
      <ModalHeader toggle={toggle}>Check Details</ModalHeader>
      <ModalBody>{props.children}</ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={toggle}>
          Do Something
        </Button>{" "}
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default Modal1;
