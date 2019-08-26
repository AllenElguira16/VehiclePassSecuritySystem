import { InputProps } from "reactstrap";
import { FC } from "react";

declare namespace Types {
  export interface ContentProps {
    employees: Array<Types.IEmployee>;
    confirmBoxToggler(msg: string): string;
    isOpen: boolean;
    fetchEmployees(): void;
    isLoading: boolean;
    onClick(id: string): void;
  }

  export interface IUser {
    _id?: string;
    username?: string;
    password?: string;
  }

  // store state
  export interface iStore {
    user?: IUser;
  }

  export interface ReduxActionInterface {
    type: string;
    data: any; //Payload
  }

  export interface combinedReducerInterface {
    auth: authState;
  }

  export interface SignInProps {
    auth: authReducerState;
    signIn(): any;
  }

  export interface DashboardProps {
    isLoggedIn: boolean;
    setAsLoggedIn(): any;
  }

  export interface authState {
    user: IUser;
    isLoggedIn: boolean;
  }

  export interface IEmployee {
    _id: string;
    employeeId: string;
    firstname: string;
    lastname: string;
    dateCreated: Date | null;
  }

  // Components Props
  export interface InputComponentProps {
    onChange?(e: React.FormEvent<HTMLInputElement>): void;
    tabIndex?: number;
    value?: InputProps["value"];
    type?: InputProps["type"];
    placeholder?: InputProps["placeholder"];
    icon?: { position: InputGroupAddonProps["addonType"]; iconName: string };
    name?: InputProps["name"];
  }

  export interface confirmBox {
    isOpen: boolean;
    msg: string;
  }
}

export default Types;
