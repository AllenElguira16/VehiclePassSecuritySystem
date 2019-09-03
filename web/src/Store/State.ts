import { observable } from "mobx";
import { UserFormComponentTypes, VehiclesFormComponentTypes } from "types";

class State {
  // @observable isLoading: boolean = false;
  @observable DashboardState = {
    isLoading: true,
    isLoggedIn: false
  };

  @observable UserContentState = {
    isLoading: true,
    users: []
  };

  @observable VehiclesContentState = {
    isLoading: true,
    vehicles: []
  };

  @observable UserFormComponentState: UserFormComponentTypes = {
    title: "",
    type: "create",
    toggle: false,
    userInput: {
      id: "",
      userId: "",
      firstname: "",
      lastname: ""
    }
  };

  @observable VehiclesFormComponentState: VehiclesFormComponentTypes = {
    title: "",
    type: "create",
    toggle: false,
    vehicles: {
      id: "",
      plateNumber: "",
      name: "",
      type: "",
      color: "",
      registrationNumber: ""
    }
  };
}

export default State;
