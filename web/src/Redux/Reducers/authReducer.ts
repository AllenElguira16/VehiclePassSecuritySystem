import Types from "types";

let initialState = {
  user: {
    _id: "",
    username: "",
    password: ""
  },
  isLoggedIn: false
};

const authReducer = (
  state: Types.authState = initialState,
  action: Types.ReduxActionInterface
) => {
  if (action.type === "getUser") {
    return { ...state, user: action.data };
  } else if (action.type === "setAsLoggedIn") {
    return { ...state, isLoggedIn: action.data };
  }
  return state;
  // switch (action.type) {
  //   case "getUser":
  //   case "setAsLoggedIn":
  //   default:
  //     return state;
  // }
};

export default authReducer;
