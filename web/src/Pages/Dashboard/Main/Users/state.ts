import { action, observable } from 'mobx'
import Axios, { AxiosResponse } from 'axios'
import {
  User,
  UsersTableHeader,
  UserInput,
  UserState,
  CheckSorted,
  FormState,
  SortType,
} from 'type'
import { createContext, ChangeEvent } from 'react'

class State {
  /**
   * User state
   */
  @observable
  public userState: UserState = {
    isLoading: true,
    rowsPerPage: 5,
    page: 0,
    keyToEdit: null,
    users: [],
  }
  /**
   * check sort type on each column
   */
  @observable
  public checkSorted: CheckSorted = {
    firstname: 'desc',
    lastname: 'desc',
    type: 'desc',
    licenseId: 'desc',
    dateCreated: 'desc',
  }
  /**
   * pre-state of userInput
   */
  private preState: UserInput = {
    id: '',
    firstname: '',
    lastname: '',
    type: 'Employee',
    licenseId: '',
  }
  /**
   * Form State
   */
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
  /**
   * fetch users
   */
  @action.bound
  fetchUsers = async (params?: User) => {
    try {
      this.userState.isLoading = true
      if (this.userState.isLoading) {
        const { data } = await Axios.post('/user/fetch', params)
        if (data) this.userState.users = data
      }
      this.userState.isLoading = false
    } catch (error) {
      console.error(error)
    }
  }
  /**
   * Toggle Form Input
   */
  @action.bound
  public openAddForm = () => {
    this.formState.isOpen = true
  }
  /**
   * Toggle Form Input
   */
  @action.bound
  public closeAddForm = () => {
    this.formState.isOpen = false
  }
  /**
   * Toggle Alert Modal
   */
  @action.bound
  public toggleAlert = (type: FormState['Alert']['type'], msg: string) => {
    this.formState.Alert = {
      isOpen: !this.formState.Alert.isOpen,
      type,
      msg,
    }
  }
  /**
   * Dynamic submit
   */
  @action.bound
  public onSubmit = (type: 'add' | 'edit') => async () => {
    let dataResponse: AxiosResponse | undefined = undefined
    if (type === 'add') {
      dataResponse = await Axios.post('/user', this.formState.userInput)
    } else if (type === 'edit') {
      dataResponse = await Axios.put('/user', this.formState.userInput)
    }
    if (dataResponse) {
      if (dataResponse.data.success) {
        this.fetchUsers()
        this.closeAddForm()
        this.userState.keyToEdit = null
        this.toggleAlert('success', dataResponse.data.success)
      } else if (dataResponse.data.error)
        this.toggleAlert('error', dataResponse.data.error)
    }
  }

  @action.bound
  public onClear = () => {
    this.formState.userInput = this.preState
  }

  @action.bound
  onChange = (key: keyof UserInput) => (
    event: ChangeEvent<HTMLInputElement>,
  ) => {
    this.formState.userInput = {
      ...this.formState.userInput,
      [key]: event.target.value,
    }
  }

  @action.bound
  handleSort = (key: UsersTableHeader['key']) => {
    const currentSortType = this.checkSorted[key]
    const sorted = this.userState.users.slice().sort((a, b) => {
      this.checkSorted[key] = currentSortType === 'desc' ? 'asc' : 'desc'
      if (a[key] < b[key]) return currentSortType === 'desc' ? -1 : 1
      else return currentSortType === 'desc' ? 1 : -1
    })
    this.userState.users = sorted
  }

  @action.bound
  checkSortType = (key: UsersTableHeader['key']): SortType => {
    return this!.checkSorted[key]
  }
}

export const UsersState = createContext(new State())
