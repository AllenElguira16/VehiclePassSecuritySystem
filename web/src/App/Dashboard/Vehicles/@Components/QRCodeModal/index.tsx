import React, { useContext, FC } from 'react'
import QRCode from 'qrcode.react'
import { ModalBody, Button, ModalFooter, Modal } from 'reactstrap'
import printjs from 'print-js'
import { AppStore } from 'Store'
import { observer } from 'mobx-react-lite'

interface Props {
  // value: string
  // toggle(): void
  // toggler: () => any;
}

const QRCodeModal: FC<Props> = observer(() => {
  const { QRCodeModalState, QRModalClose } = useContext(AppStore)
  const print = () => {
    var elem = document.querySelector('#modal-body')

    if (elem) {
      var canvasElem: any = elem.children[0]
      printjs({
        printable: canvasElem.toDataURL(),
        type: 'image',
        maxWidth: 500,
      })
    }
  }

  return (
    <>
      <Modal isOpen={QRCodeModalState.isOpen} toggle={QRModalClose}>
        <ModalBody id="modal-body">
          <QRCode value={QRCodeModalState.currentVehicleID} size={450} />
        </ModalBody>

        <ModalFooter>
          <Button color="outline-info" className="btn-raised" onClick={print}>
            Print
          </Button>
          <Button onClick={QRModalClose}>Close</Button>
        </ModalFooter>
      </Modal>
    </>
  )
})

export default QRCodeModal
