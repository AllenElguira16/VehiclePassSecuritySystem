import { setAsLoggedIn } from "Actions";
import { Dispatch } from "redux";

export default (dispatch: Dispatch<ReduxActionInterface>) => {
  return {
    setAsLoggedIn: () => dispatch(setAsLoggedIn())
  };
};
