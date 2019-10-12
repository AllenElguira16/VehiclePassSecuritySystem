import { action, observable } from 'mobx'
import Axios from 'axios'
import { User, UsersTableHeader } from 'type'
import { createContext } from 'react'

interface UserState {
  isLoading: boolean
  page: number
  keyToEdit: null | number
  rowsPerPage: number
  users: User[]
}

type SortType = 'asc' | 'desc'

type CheckSorted = {
  [k in keyof Omit<User, '_id'>]: SortType
}

class State {
  @observable
  public userState: UserState = {
    isLoading: true,
    rowsPerPage: 5,
    page: 0,
    keyToEdit: null,
    users: [],
  }

  @observable
  public checkSorted: CheckSorted = {
    firstname: 'desc',
    lastname: 'desc',
    type: 'desc',
    licenseId: 'desc',
    dateCreated: 'desc',
  }

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
