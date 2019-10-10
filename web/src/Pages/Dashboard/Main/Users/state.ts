import { action, observable } from 'mobx'
import Axios from 'axios'
import { User, UsersTableHeader } from 'type'
import { createContext } from 'react'

interface UserState {
  isLoading: boolean
  users: User[]
}

type SortType = 'ascending' | 'descending'

interface CheckSorted {
  _id?: string
  userId: SortType
  firstname: SortType
  lastname: SortType
  dateCreated: SortType
}

class State {
  @observable
  public userState: UserState = {
    isLoading: true,
    users: [],
  }

  @observable
  public checkSorted: CheckSorted = {
    userId: 'descending',
    firstname: 'descending',
    lastname: 'descending',
    dateCreated: 'descending',
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
      this.checkSorted[key] = currentSortType === 'descending' ? 'ascending' : 'descending'
      if (a[key] < b[key]) return currentSortType === 'descending' ? -1 : 1
      else return currentSortType === 'descending' ? 1 : -1
    })
    this.userState.users = sorted
  }
}

export const UsersState = createContext(new State())
