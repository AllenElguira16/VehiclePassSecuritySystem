import React from "react";
import QRCode from "qrcode.react";
import { ModalBody, Button, ModalFooter } from "reactstrap";
import printjs from "print-js";

interface Props {
  value: string;
  toggle(): void;
  // toggler: () => any;
}

const QRCodeModal: React.FC<Props> = props => {
  const print = () => {
    var elem = document.querySelector("#modal-body");

    if (elem) {
      var canvasElem: any = elem.children[0];
      printjs({
        printable: canvasElem.toDataURL(),
        type: "image",
        maxWidth: 500
      });
    }
  };

  return (
    // <Modal isOpen={props.toggle} toggle={props.toggler}>
    //   <ModalBody id="modal-body">
    <>
      <ModalBody id="modal-body">
        <QRCode value={props.value} size={450} />
      </ModalBody>

      <ModalFooter>
        <Button color="outline-info" className="btn-raised" onClick={print}>
          Print
        </Button>
        <Button onClick={props.toggle}>Close</Button>
      </ModalFooter>
    </>
    //   </ModalBody>
    //   <ModalFooter className="d-flex justify-content-between">
    //     <Button color="outline-info" className="btn-raised" onClick={print}>
    //       Print
    //     </Button>
    //     <Button
    //       color="outline-danger"
    //       className="btn-raised"
    //       onClick={props.toggler}
    //     >
    //       Cancel
    //     </Button>
    //   </ModalFooter>
    // </Modal>
  );
};

export default QRCodeModal;
