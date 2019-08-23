import React from "react";
import QRCode from "qrcode.react";
import { Modal, ModalBody, Button, ModalFooter } from "reactstrap";
import printjs from "print-js";

interface Props {
  value: string;
  toggle: boolean;
  toggler: () => any;
}

const QRCodeModal: React.FC<any> = props => {
  const print = () => {
    var elem = document.querySelector("#modal-body");

    if (elem) {
      var canvasElem: any = elem.children[0];
      // console.log(canvasElem);
      // printjs(canvasElem[0].toDataURL(), "image");
      printjs({
        printable: canvasElem.toDataURL(),
        type: "image",
        maxWidth: 500
      });
      // var printer: any = window.open();
      // printer.document.write("<br><img src = '"+canvasElem[0].toDataURL()+"'/>");
      // printer.print();
    }
  };

  return (
    // <Modal isOpen={props.toggle} toggle={props.toggler}>
    //   <ModalBody id="modal-body">
    <QRCode value={props.value} size={450} />
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
