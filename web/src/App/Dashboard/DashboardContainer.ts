import { setAsLoggedIn } from "Redux/Actions";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import Types from "types";

const state = (state: Types.combinedReducerInterface) => {
  return {
    isLoggedIn: state.auth.isLoggedIn
  };
};

const props = (dispatch: Dispatch<Types.ReduxActionInterface>) => {
  return {
    setAsLoggedIn: () => dispatch(setAsLoggedIn())
  };
};

export default (Dashboard: any) =>
  connect(
    state,
    props
  )(Dashboard);
