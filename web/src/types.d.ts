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

type callbackWithError = (error?: any) => any;

interface SignInProps {
  auth: authReducerState;
  signIn(user: IUser, callback: callbackWithError): any;
}

interface authState {
  user: IUser;
  isLoggedIn: boolean;
}
