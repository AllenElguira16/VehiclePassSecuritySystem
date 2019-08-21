const initialState = {
  isOpenConfirmBox: false,
  msg: ""
};

const confirmReducer = (state = initialState, action: ReduxActionInterface) => {
  // console.log(state);
  if (action.type === "toggleConfirmBox") {
    return { ...state, isOpenConfirmBox: !state.isOpenConfirmBox, msg: action.data };
  } else if (action.type === "setMsg") {
    return { ...state, msg: action.data };
  }
  return state;
};

export default confirmReducer;
