import { observable, action } from 'mobx'
import Axios from 'axios'
import { createContext } from 'react'
import {
  CheckSorted,
  History,
  TableHeader,
  SortType,
  HistoryFormState,
} from 'type'

type HistoryState = {
  isLoading: boolean
  rowsPerPage: number
  page: number
  histories: History[]
}

class State {
  @observable
  public historyState: HistoryState = {
    isLoading: true,
    rowsPerPage: 5,
    page: 0,
    histories: [],
  }

  @observable
  public checkSorted: CheckSorted<History> = {
    msg: 'asc',
    type: 'asc',
    dateCreated: 'asc',
  }

  @observable
  public formState: HistoryFormState = {
    isOpen: false,
    // userInput: this.preState,
    type: 'delete',
    currentKey: null,
  }
  /**
   * fetch history
   */
  @action.bound
  fetchHistories = async () => {
    try {
      this.historyState.isLoading = true
      if (this.historyState.isLoading) {
        const { data } = await Axios.get('/history')
        if (data) this.historyState.histories = data
      }
      this.historyState.isLoading = false
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

  @action.bound
  handleSort = (key: TableHeader<History>['key']) => {
    const currentSortType = this.checkSorted[key]
    // console.log(currentSortType);
    const sorted = this.historyState.histories.slice().sort((a, b) => {
      this.checkSorted[key] = currentSortType === 'desc' ? 'asc' : 'desc'
      if (a[key] < b[key]) return currentSortType === 'desc' ? -1 : 1
      else return currentSortType === 'desc' ? 1 : -1
    })
    this.historyState.histories = sorted
  }

  @observable
  checkSortType = (key: TableHeader<History>['key']): SortType => {
    return this!.checkSorted[key]
  }

  @observable
  isFormOpen = (): boolean => {
    return this.formState.isOpen || this.formState.currentKey !== null
  }
}

export const HistoryState = createContext(new State())
