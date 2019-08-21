interface IUser {
  _id?: string;
  username?: string;
  password?: string;
}

// store state
interface iStore {
  user?: IUser;
}

interface ReduxActionInterface {
  type: string;
  data: any; //Payload
}

interface combinedReducerInterface {
  auth: authState;
}

interface SignInProps {
  auth: authReducerState;
  signIn(): any;
}

interface DashboardProps {
  isLoggedIn: boolean;
  setAsLoggedIn(): any;
}

interface authState {
  user: IUser;
  isLoggedIn: boolean;
}

interface IEmployee {
  _id: string;
  employeeId: string;
  firstname: string;
  lastname: string;
  dateCreated: Date | null;
}
