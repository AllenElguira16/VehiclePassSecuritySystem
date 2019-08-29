import { InputProps } from "reactstrap";
import { FC } from "react";

// PropTypes
export interface ContentProps {
  setFormType(type: FormProps["type"]): void;
  confirmBoxToggler(msg: string): string;
  setUserInput(value: UserInput): void;
  users: Array<Types.IEmployee>;
  setFormToggle(boolean: boolean): void;
  onClick(id: string): void;
  fetchUsers(): void;
  isOpen: boolean;
  isLoading: boolean;
}

export interface SignInProps {
  auth: authReducerState;
  signIn(): any;
}

export interface DashboardProps {
  isLoggedIn: boolean;
  setAsLoggedIn(): any;
}

export interface AddFormProps {
  setUser(user: UserInput): void;
  onSubmit(event: React.FormEvent<HTMLFormElement>): void;
  response: Response;
  user: UserInput;
}

export interface FormProps {
  setUser(user: UserInput): void;
  setFormType(type: FormProps["type"]);
  setToggle(boolean: boolean): void;
  toggle: boolean;
  user: UserInput;
  type: "create" | "update";
}

export interface InputComponentProps {
  onChange?(e: React.FormEvent<HTMLInputElement>): void;
  tabIndex?: number;
  value?: InputProps["value"];
  type?: InputProps["type"];
  placeholder?: InputProps["placeholder"];
  icon?: { position: InputGroupAddonProps["addonType"]; iconName: string };
  name?: InputProps["name"];
}

export interface ConfirmBox {
  isOpen: boolean;
  msg: string;
}

export interface SettingsProps {
  setFormType(type: FormProps["type"]): void;
  setFormToggle(boolean: boolean): void;
  setUserInput(value: UserInput): void;
  toggle(msg: string): string;
  fetchData(): void;
  isOpen: boolean;
  user: User;
}
// End Prop

// Miscs
export interface IUser {
  _id?: string;
  username?: string;
  password?: string;
}

export interface authState {
  user: IUser;
  isLoggedIn: boolean;
}

export interface User {
  _id: string;
  userId: string;
  firstname: string;
  lastname: string;
  dateCreated: Date | null;
}

export interface UserInput {
  userId: User["userId"];
  firstname: User["firstname"];
  lastname: User["lastname"];
}

export interface User {
  id: string;
  userId: string;
  firstname: string;
  lastname: string;
}

export interface Vehicle {
  id: string;
  name: string;
  type: string;
  color: string;
  registrationNumber: string;
}

export interface Response {
  type: "success" | "error";
  msg: string;
}
