import { setAsLoggedIn } from "Redux/Actions";
import { Dispatch } from "redux";
import { connect } from "react-redux";

const state = (state: combinedReducerInterface) => {
  return {
    isLoggedIn: state.auth.isLoggedIn
  };
};

const props = (dispatch: Dispatch<ReduxActionInterface>) => {
  return {
    setAsLoggedIn: () => dispatch(setAsLoggedIn())
  };
};

export default (Dashboard: any) =>
  connect(
    state,
    props
  )(Dashboard);
