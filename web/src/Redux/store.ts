import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import Reducers from "Redux/Reducers";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION__: any;
  }
}

export default createStore(
  Reducers,
  undefined,
  compose(
    applyMiddleware(...[thunk]),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
