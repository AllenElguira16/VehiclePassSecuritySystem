import { combineReducers } from "redux";
import authReducer from "./authReducer";
import confirmReducer from "./confirmReducer";

export default combineReducers<any>({
  auth: authReducer,
  confirm: confirmReducer
});
