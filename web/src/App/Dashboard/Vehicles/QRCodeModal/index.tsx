import React, { useContext, FC } from 'react'
import { ModalBody, Button, ModalFooter, Modal } from 'reactstrap'
import { QRCode } from 'react-qrcode-logo'
import LNULogo from 'Assets/images/LNULogoFrontPage.webp'
import printjs from 'print-js'
import { observer } from 'mobx-react-lite'
import { AppStore } from 'Store'

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
          <QRCode value={QRCodeModalState.currentVehicleID} logoImage={LNULogo} size={450} />
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
