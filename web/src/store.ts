import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import Reducers from "Reducers";

export default createStore(
  Reducers,
  undefined,
  compose(applyMiddleware(...[thunk]))
);
