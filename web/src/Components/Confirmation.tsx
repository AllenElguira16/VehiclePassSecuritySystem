import React, { ReactNode } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";

type Props = {
  isOpen: boolean;
  toggle(): any;
  children: ReactNode;
};

const Confirmation: React.FC<Props> = ({ isOpen, toggle, children }) => {
  return (
    <>
      <div>
        <Modal isOpen={isOpen} toggle={toggle}>
          <ModalHeader toggle={toggle}>Confirmation</ModalHeader>
          <ModalBody>{children}</ModalBody>
          <ModalFooter>
            <Button color="primary">Delete</Button>
            <Button color="secondary" onClick={toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    </>
  );
};

export default Confirmation;
