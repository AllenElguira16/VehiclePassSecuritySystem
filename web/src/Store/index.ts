import { action } from 'mobx'
import { createContext } from 'react'
import { UserInput, IUser, Vehicle, UserFormComponentTypes, VehiclesFormComponentTypes } from 'types'
import Axios from 'axios'
import State from './State'

// configure({ enforceActions: true });

class Action extends State {
  // Actions
  @action.bound
  async login(input: IUser) {
    this.DashboardState.isLoading = true
    let { data } = await Axios.post('/admin', input)
    if (data.success) this.DashboardState.isLoggedIn = true
    this.DashboardState.isLoading = false
  }

  @action.bound
  getLoginState = async () => {
    let { data } = await Axios.get('/admin/auth')
    if (!data.error) this.DashboardState.isLoggedIn = true
    this.DashboardState.isLoading = false
  }

  @action.bound
  fetchUsers = async () => {
    this.UserContentState.isLoading = true
    if (this.UserContentState.isLoading) {
      const { data } = await Axios.get('/user')
      this.UserContentState.users = data
    }
    this.UserContentState.isLoading = false
  }

  @action.bound
  openFormInput = (type: UserFormComponentTypes['type'], title: string, userInput: UserInput) => {
    this.UserFormComponentState.toggle = true
    this.UserFormComponentState.title = title
    this.UserFormComponentState.type = type
    this.UserFormComponentState.userInput = userInput
  }

  @action.bound
  openVehicleForm = (type: VehiclesFormComponentTypes['type'], title: string, vehicle: Vehicle) => {
    this.VehiclesFormComponentState.toggle = true
    this.VehiclesFormComponentState.title = title
    this.VehiclesFormComponentState.type = type
    this.VehiclesFormComponentState.vehicles = vehicle
  }

  @action.bound
  closeFormInput = () => {}

  @action.bound
  fetchVehicles = async () => {
    this.VehiclesContentState.isLoading = true
    if (this.VehiclesContentState.isLoading) {
      const { data } = await Axios.get('/vehicle')
      this.VehiclesContentState.vehicles = data
    }
    this.VehiclesContentState.isLoading = false
  }

  @action.bound
  QRModalClose = () => {
    this.QRCodeModalState.isOpen = false
  }

  @action.bound
  QRModalOpen = (id: string) => {
    this.QRCodeModalState.currentVehicleID = id
    this.QRCodeModalState.isOpen = true
  }
}

export const AppStore = createContext(new Action())
