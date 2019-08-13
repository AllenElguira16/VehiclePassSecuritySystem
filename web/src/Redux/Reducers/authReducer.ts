let initialState = {
  user: {
    _id: "",
    username: "",
    password: ""
  },
  isLoggedIn: false
};

const authReducer = (
  state: authState = initialState,
  action: ReduxActionInterface
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
