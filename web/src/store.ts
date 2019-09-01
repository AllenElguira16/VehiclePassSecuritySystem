import { observable } from "mobx";
import { createContext } from "react";
import { UserInput } from "types";

type UserFormComponentTypes = {
  title: string;
  toggle: boolean;
  type: "create" | "update" | "delete";
  userInput: UserInput;
};

class Store {
  // @observable isLoading: boolean = false;
  @observable DashboardState = {
    isLoading: true,
    isLoggedIn: false
  };

  @observable ContentState = {
    isLoading: true,
    users: []
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

  // @observable loggedIn() {}
  // checkLogInState = async () => {
  // };
  // @observable count: number = 0;
}

export const AppStore = createContext(new Store());
