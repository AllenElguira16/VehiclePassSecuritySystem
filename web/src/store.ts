import { observable, action, configure } from "mobx";
import { createContext } from "react";
import { UserInput, IUser } from "types";
import Axios from "axios";

// configure({ enforceActions: true });

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

  // Actions
  @action.bound
  async login(input: IUser) {
    this.DashboardState.isLoading = true;
    let { data } = await Axios.post("/admin", input);
    if (data.success) this.DashboardState.isLoggedIn = true;
    this.DashboardState.isLoading = false;
  }

  @action.bound
  getLoginState = async () => {
    let { data } = await Axios.get("/admin/auth");
    if (!data.error) this.DashboardState.isLoggedIn = true;
    this.DashboardState.isLoading = false;
  };

  @action.bound
  fetchUsers = async () => {
    this.ContentState.isLoading = true;
    if (this.ContentState.isLoading) {
      const { data } = await Axios.get("/user");
      this.ContentState.users = data;
    }
    this.ContentState.isLoading = false;
  };

  @action.bound
  openFormInput = (
    type: UserFormComponentTypes["type"],
    title: string,
    userInput: UserInput
  ) => {
    this.UserFormComponentState.toggle = true;
    this.UserFormComponentState.title = title;
    this.UserFormComponentState.type = type;
    this.UserFormComponentState.userInput = userInput;
  };

  @action.bound
  closeFormInput = () => {};

  // @observable loggedIn() {}
  // checkLogInState = async () => {
  // };
  // @observable count: number = 0;
}

export const AppStore = createContext(new Store());
