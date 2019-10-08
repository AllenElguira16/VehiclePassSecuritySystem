import React, { useContext, FC } from 'react'
import { ModalBody, Button, ModalFooter, Modal } from 'reactstrap'
import { QRCode } from 'react-qrcode-logo'
import LNULogo from 'Reactstrap/Assets/images/LNULogoFrontPage.webp'
import printjs from 'print-js'
import { observer } from 'mobx-react-lite'
import { AppStore } from 'Reactstrap/Store'

interface Props {
  // value: string
  // toggle(): void
  // toggler: () => any;
}

const QRCodeModal: FC<Props> = observer(() => {
  const { QRCodeModalState, QRModalClose } = useContext(AppStore)
  const print = () => {
    const elem = document.querySelector('#modal-body')
    if (elem) {
      const canvasElem = elem.getElementsByTagName('canvas')
      printjs({
        printable: resize(canvasElem[0], 250, 250),
        type: 'image',
        maxWidth: 300,
      })
    }
  }

  const resize = (base64: CanvasImageSource, width: number, height: number): string => {
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')

    canvas.width = width
    canvas.height = height

    if (ctx) ctx.drawImage(base64, 0, 0, width, height)

    return canvas.toDataURL()
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
