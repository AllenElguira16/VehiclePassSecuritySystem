import { action, observable } from 'mobx'
import { createContext } from 'react'

class State {
  @observable
  public state = {
    isNavOpen: true,
  }

  @action.bound
  toggleNav = () => {
    this.state.isNavOpen = !this.state.isNavOpen
  }
}

export const MainState = createContext(new State())
