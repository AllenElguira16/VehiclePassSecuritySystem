import { observable, action } from 'mobx'
import Axios from 'axios'
import { AdminInput } from 'type'
import { createContext, ChangeEvent } from 'react'

class State {
  @observable
  public state = {
    isLoading: true,
    isLoggedIn: false,
  }

  private userInput: AdminInput = {
    username: '',
    password: '',
  }

  @action.bound
  public signIn = async (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault()
    this.state.isLoading = true
    let { data } = await Axios.post('/admin', this.userInput)
    if (data.success) this.state.isLoggedIn = true
    this.state.isLoading = false
  }

  @action.bound
  getSignInState = async () => {
    let { data } = await Axios.get('/admin/auth')
    if (!data.error) this.state.isLoggedIn = true
    this.state.isLoading = false
  }

  @action.bound
  onInputChange = (key: keyof AdminInput) => (event: ChangeEvent<HTMLInputElement>) => {
    this.userInput = {
      ...this.userInput,
      [key]: event.currentTarget.value,
    }
  }
}

export const SignInState = createContext(new State())
