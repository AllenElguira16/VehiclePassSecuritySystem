import Axios from "axios";
import { Dispatch } from "redux";

export const signIn = (user: IUser, callback: callbackWithError) => async (
  dispatch: Dispatch<ReduxActionInterface>
) => {
  let { data } = await Axios.post("/user", user);
  if (!data.error) {
    dispatch({
      type: "setAsLoggedIn",
      data: true
    });
    callback();
  } else {
    callback(data.error);
  }
};

export const setAsLoggedIn = () => {
  return {
    type: "setAsLoggedIn",
    data: true
  };
};