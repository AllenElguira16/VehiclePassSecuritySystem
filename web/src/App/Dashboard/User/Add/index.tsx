import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import AddForm from "./AddForm";
// import QRCodeModal from "./QRCodeModal";

const Add: React.FC = () => {
  const [modalToggle, setModalToggle] = useState(false);
  const modalToggler = () => {
    setModalToggle(!modalToggle);
  };

  return (
    <>
      <Button onClick={modalToggler} color="primary" className="btn-raised">
        Add
      </Button>
      <Modal isOpen={modalToggle} toggle={modalToggler}>
        <ModalHeader toggle={modalToggler}>Add Employee</ModalHeader>
        <ModalBody>
          <AddForm />
        </ModalBody>
        <ModalFooter>
          <Button onClick={modalToggler} color="primary">
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default Add;
