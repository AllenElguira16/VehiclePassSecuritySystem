import { connect } from "react-redux";
import SignIn from "App/Dashboard/SignIn";
import { signIn } from "Redux/Actions";

// import React from 'react';

export default connect(
  (state: combinedReducerInterface) => {
    return {
      isLoggedIn: state.auth.isLoggedIn
    };
  },
  { signIn }
)(SignIn);
