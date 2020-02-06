import { action, observable } from 'mobx'
import Axios from 'axios'
import {
  User,
  UserInput,
  UserState,
  CheckSorted,
  FormState,
  SortType,
  TableHeader,
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
    users: [],
  }
  /**
   * check sort type on each column
   */
  @observable
  public checkSorted: CheckSorted<User> = {
    active: 'desc',
    firstname: 'desc',
    lastname: 'desc',
    type: 'desc',
    schoolID: 'desc',
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
    schoolID: '',
  }
  /**
   * Form State
   */
  @observable
  public formState: FormState = {
    isOpen: false,
    userInput: this.preState,
    type: 'add',
    currentKey: null,
  }
  /**
   * fetch users
   */
  @action.bound
  fetchUsers = async (params?: Partial<User>) => {
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
   * Clear UserInput state
   */
  @action.bound
  public onClear = () => {
    this.formState.userInput = this.preState
  }
  /**
   * Change UserInput based on form-input element
   */
  @action.bound
  onChange = (key: keyof UserInput) => (
    event: ChangeEvent<HTMLInputElement>,
  ) => {
    this.formState.userInput = {
      ...this.formState.userInput,
      [key]: event.target.value,
    }
  }
  /**
   * Sort UserTable row ascending and descending
   */
  @action.bound
  handleSort = (key: TableHeader<User>['key']) => {
    const currentSortType = this.checkSorted[key]
    // console.log(currentSortType);
    const sorted = this.userState.users.slice().sort((a, b) => {
      this.checkSorted[key] = currentSortType === 'desc' ? 'asc' : 'desc'
      if (a[key] < b[key]) return currentSortType === 'desc' ? -1 : 1
      else return currentSortType === 'desc' ? 1 : -1
    })
    this.userState.users = sorted
  }
  /**
   * Check what kind of sort if its ascending or descending
   */
  @observable
  checkSortType = (key: TableHeader<User>['key']): SortType => {
    return this!.checkSorted[key]
  }
  /**
   * Returns true if the form is open
   */
  @observable
  isFormOpen = (): boolean => {
    return this.formState.isOpen || this.formState.currentKey !== null
  }
}

export const UsersState = createContext(new State())
