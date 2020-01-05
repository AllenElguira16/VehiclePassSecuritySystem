import { createContext } from 'react'
import { observable } from 'mobx'

interface ModalProps {
  // setModalOpen: (val: boolean) => void
  modalOpen: boolean
  id?: string
}

class State {
  @observable
  public state: ModalProps = {
    id: '',
    modalOpen: false,
  }

  setModalOpen = (modalOpen: boolean, id?: string) => {
    this.state = { ...this.state, modalOpen, id }
  }
}

export const ModalState = createContext(new State())
