import { observable } from 'mobx'
import { UserFormComponentTypes, VehiclesFormComponentTypes, User, AccountSettingsStateInterface } from 'types'

class State {
  // @observable isLoading: boolean = false;
  @observable DashboardState = {
    isLoading: true,
    isLoggedIn: false,
  }

  @observable UserContentState: { isLoading: boolean; users: User[] } = {
    isLoading: true,
    users: [],
  }

  @observable VehiclesContentState = {
    isLoading: true,
    vehicles: [],
  }

  @observable UserFormComponentState: UserFormComponentTypes = {
    title: '',
    type: 'create',
    toggle: false,
    userInput: {
      id: '',
      userId: '',
      firstname: '',
      lastname: '',
    },
  }

  @observable VehiclesFormComponentState: VehiclesFormComponentTypes = {
    title: '',
    type: 'create',
    toggle: false,
    vehicles: {
      id: '',
      userId: '',
      plateNumber: '',
      name: '',
      type: '',
      color: '',
      registrationNumber: '',
    },
  }

  @observable QRCodeModalState = {
    isOpen: false,
    currentVehicleID: '',
  }

  @observable AccountSettingsState: AccountSettingsStateInterface = {
    isOpen: false,
    admin: {
      id: '',
      username: '',
      password: '',
    },
  }
}

export default State
