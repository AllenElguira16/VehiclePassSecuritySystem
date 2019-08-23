import { connect } from "react-redux";
import SignIn from "App/Dashboard/SignIn";
import { signIn } from "Redux/Actions";
import Types from "types";

// import React from 'react';

export default connect(
  (state: Types.combinedReducerInterface) => {
    return {
      isLoggedIn: state.auth.isLoggedIn
    };
  },
  { signIn }
)(SignIn);
