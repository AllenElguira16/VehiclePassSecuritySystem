import React from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { toggleConfirmBox } from "Redux/Actions";

const Confirmation: React.FC<any> = props => {
  return (
    <>
      <div>
        <Modal isOpen={props.isOpen} toggle={props.toggleConfirmBox}>
          <ModalHeader toggle={props.toggleConfirmBox}>
            Confirmation
          </ModalHeader>
          <ModalBody>{props.children}</ModalBody>
          <ModalFooter>
            <Button color="primary">Delete</Button>
            <Button color="secondary" onClick={props.toggleConfirmBox}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    </>
  );
};

export default connect(
  (state: any) => {
    console.log(state);
    return {};
  },
  (dispatch: Dispatch<ReduxActionInterface>) => {
    return {
      toggleConfirmBox: (msg: string) => dispatch(toggleConfirmBox(msg))
    };
  }
)(Confirmation);
