const initialState = {
  isOpenConfirmBox: false,
  msg: ""
};

const confirmReducer = (state = initialState, action: ReduxActionInterface) => {
  if (action.type === "toggleConfirmBox") {
    return { ...state, isOpenConfirmBox: !state.isOpenConfirmBox };
  } else if (action.type === "setMsg") {
    return { ...state, msg: action.data };
  }
  return state;
  // switch (action.type) {
  //   case "getUser":
  //   case "setAsLoggedIn":
  //   default:
  //     return state;
  // }
};

export default confirmReducer;
