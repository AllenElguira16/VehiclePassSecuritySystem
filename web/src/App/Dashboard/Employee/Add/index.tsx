import React, { useState } from "react";
import Input from "Components/Input";
import {
  Row,
  Button,
  Col,
  Form,
  Alert,
  FormGroup,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from "reactstrap";
// import QRCodeModal from "./QRCodeModal";
// import Axios from "axios";
import AddForm from "./AddForm";
import QRCodeModal from "./QRCodeModal";
// import Icon from "Components/Icon";

const Add: React.FC = () => {
  const [modalToggle, setModalToggle] = useState(false);
  const [isSuccess, setAsSuccess] = useState(false);
  const modalToggler = () => {
    setModalToggle(!modalToggle);
  };

  return (
    <>
      {/* <header className="h4">Add Employee</header> */}
      {/* <main> */}
      <Button onClick={modalToggler}>Add Employee</Button>
      <Modal isOpen={modalToggle} toggle={modalToggler}>
        <ModalHeader toggle={modalToggler}>Add Employee</ModalHeader>
        <ModalBody>{!isSuccess ? <AddForm /> : <QRCodeModal />}</ModalBody>
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
