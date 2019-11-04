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
    // this.state.isLoading = true
    let { data } = await Axios.post('/admin', this.userInput)
    if (data.success) this.getSignInState()
  }

  @action.bound
  update = async () => {
    // this.state.isLoading = true
    const { data } = await Axios.put(`/admin`, this.userInput)
    return data
    // console.log(data)
    // this.state.isLoading = false
  }

  @action.bound
  getSignInState = async () => {
    this.state.isLoading = true
    let { data } = await Axios.get('/admin/auth')
    if (!data.error) this.state.isLoggedIn = true
    else this.state.isLoggedIn = false
    this.state.isLoading = false
  }

  @action.bound
  signOut = async () => {
    let { data } = await Axios.delete('/admin/logout')
    if (data.success) await this.getSignInState()
  }

  @action.bound
  onInputChange = (key: keyof AdminInput) => (
    event: ChangeEvent<HTMLInputElement>,
  ) => {
    this.userInput = {
      ...this.userInput,
      [key]: event.currentTarget.value,
    }
  }
}

export const AdminState = createContext(new State())
