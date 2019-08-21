import React from "react";
import { Modal, ModalBody, ModalHeader, ModalFooter, Button } from "reactstrap";

const Vehicles: React.FC<any> = ({ toggle, toggler, employeeId }) => {
  console.log(employeeId);
  return (
    <Modal isOpen={toggle}>
      <ModalHeader toggle={toggler}>Confirmation</ModalHeader>
      <ModalBody>Hello!</ModalBody>
      <ModalFooter>
        <Button onClick={toggler}>Close</Button>
      </ModalFooter>
    </Modal>
  );
};

export default Vehicles;
