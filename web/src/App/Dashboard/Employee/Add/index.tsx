import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import AddForm from "./AddForm";
// import QRCodeModal from "./QRCodeModal";

const Add: React.FC = () => {
  const [modalToggle, setModalToggle] = useState(false);
  // const [isSuccess, setAsSuccess] = useState(false);
  const modalToggler = () => {
    setModalToggle(!modalToggle);
  };

  // const onSuccess =

  return (
    <>
      {/* <header className="h4">Add Employee</header> */}
      {/* <main> */}
      <Button onClick={modalToggler}>Add Employee</Button>
      <Modal isOpen={modalToggle} toggle={modalToggler}>
        <ModalHeader toggle={modalToggler}>Add Employee</ModalHeader>
        <ModalBody>
          <AddForm />
        </ModalBody>
        <ModalFooter>
          <Button onClick={modalToggler}>Close</Button>
        </ModalFooter>
      </Modal>
      {/* <QRCodeModal
          value={user.id}
          toggle={modalToggle}
          toggler={modalToggler}
        /> */}
      {/* </main> */}
    </>
  );
};

export default Add;
