import React, { FC, useState } from 'react'
import { Modal, Grid, Button, makeStyles } from '@material-ui/core'
import { QRCode } from 'react-qrcode-logo'
import printjs from 'print-js'

interface Props {
  setModalOpen: (val: boolean) => void
  modalOpen: boolean
  id: string
}

const useStyles = makeStyles(theme => ({
  paper: {
    position: 'absolute',
    width: 450,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}))

function getModalStyle() {
  const top = 50
  const left = 50

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  }
}

const ModalQR: FC<Props> = ({ setModalOpen, modalOpen, id }) => {
  const styles = useStyles()
  const print = () => {
    const elem = document.querySelector('#qr-modal')

    if (elem) {
      const canvasElem = elem.getElementsByTagName('canvas')
      printjs({
        printable: resize(canvasElem[0], 250, 250),
        type: 'image',
        maxWidth: 300,
      })
    }
  }

  const resize = (
    base64: CanvasImageSource,
    width: number,
    height: number,
  ): string => {
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')

    canvas.width = width
    canvas.height = height

    if (ctx) ctx.drawImage(base64, 0, 0, width, height)

    return canvas.toDataURL()
  }
  const [modalStyle] = useState(getModalStyle)

  return (
    <Modal
      style={{ outline: 0 }}
      open={modalOpen}
      id="qr-modal"
      onClose={() => setModalOpen(false)}
    >
      <Grid
        container
        style={modalStyle}
        className={styles.paper}
        spacing={0}
        justify="center"
      >
        <QRCode value={id} size={400} />
        <Grid item md={12}>
          <Button onClick={print}>Print</Button>
          <Button onClick={() => setModalOpen(false)}>Cancel</Button>
        </Grid>
      </Grid>
    </Modal>
  )
}

export default ModalQR
