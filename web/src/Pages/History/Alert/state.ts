import { observable, action } from 'mobx'
import { createContext } from 'react'
import { Alert } from 'type'

class State {
  @observable
  alertState: Alert = {
    isOpen: false,
    type: 'success',
    msg: '',
  }
  /**
   * Close Alert Modal
   */
  @action.bound
  public closeAlert = () => {
    this.alertState = {
      isOpen: false,
      type: '',
      msg: '',
    }
  }
  /**
   * Toggle Alert Modal
   */
  @action.bound
  public openAlert = (type: Alert['type'], msg: string) => {
    this.alertState = {
      isOpen: true,
      type,
      msg,
    }
  }
}

export const AlertState = createContext(new State())
