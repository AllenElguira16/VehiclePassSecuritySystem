import { observable, action } from 'mobx'
import { createContext, ChangeEvent } from 'react'
import { UserInput } from 'type'
import Axios, { AxiosResponse } from 'axios'

interface FormState {
  Alert: {
    isOpen: boolean
    type: 'success' | 'error'
    msg: string
  }
  isOpen: boolean
  userInput: UserInput
}

class State {
  private preState: UserInput = {
    firstname: '',
    lastname: '',
    type: 'Employee',
    licenseId: '',
  }

  @observable
  public formState: FormState = {
    Alert: {
      isOpen: false,
      type: 'success',
      msg: '',
    },
    isOpen: false,
    userInput: this.preState,
  }

  @action.bound
  public toggleFormInput = () => {
    this.formState.isOpen = !this.formState.isOpen
  }

  @action.bound
  public toggleAlert = (type: FormState['Alert']['type'], msg: string) => {
    this.formState.Alert = {
      isOpen: !this.formState.Alert.isOpen,
      type,
      msg,
    }
  }

  @action.bound
  public onSubmit = async (type: 'add' | 'edit', callback: (response: AxiosResponse['data']) => void) => {
    const { data } = await Axios.post('/user', this.formState.userInput)
    callback(data)
  }

  @action.bound
  public onClear = () => {
    this.formState.userInput = this.preState
  }

  @action.bound
  onChange = (key: keyof UserInput) => (event: ChangeEvent<HTMLInputElement>) => {
    this.formState.userInput = {
      ...this.formState.userInput,
      [key]: event.target.value,
    }
  }
}

export const UsersTableState = createContext(new State())
