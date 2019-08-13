import React from "react";
import QRCode from "qrcode.react";
import { Modal, ModalBody } from "reactstrap";

const QRCodeModal: React.FC<{
  value: string;
  toggle: boolean;
  toggler: () => any;
}> = props => {
  return (
    <Modal isOpen={props.toggle} toggle={props.toggler}>
      <ModalBody id="modal-body">
        <QRCode value={props.value} size={450} />
      </ModalBody>
    </Modal>
  );
};

export default QRCodeModal;
