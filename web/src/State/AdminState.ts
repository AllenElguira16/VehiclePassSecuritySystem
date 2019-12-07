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
  /**
   * Signing admin user by sending data to server then wait for response
   */
  @action.bound
  public signIn = async (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault()
    let { data } = await Axios.post('/admin', this.userInput)
    if (data.success) this.getSignInState()
  }
  /**
   * Update admin credentials
   */
  @action.bound
  update = async () => {
    const { data } = await Axios.put(`/admin`, this.userInput)
    return data
  }
  /**
   * Checks if the admin session is already established
   */
  @action.bound
  getSignInState = async () => {
    this.state.isLoading = true
    let { data } = await Axios.get('/admin/auth')
    if (!data.error) this.state.isLoggedIn = true
    else this.state.isLoggedIn = false
    this.state.isLoading = false
  }
  /**
   * Destroy admin session
   */
  @action.bound
  signOut = async () => {
    let { data } = await Axios.delete('/admin/logout')
    if (data.success) await this.getSignInState()
  }
  /**
   * Change admin state
   */
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
