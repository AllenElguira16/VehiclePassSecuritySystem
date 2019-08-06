import { chatReducer } from 'Reducers'
import { combineReducers } from 'redux';
import { createStore } from 'redux';

export const rootReducer = combineReducers({
  chat: chatReducer
})



export default createStore(rootReducer);


// export type AppState = ReturnType<typeof rootReducer>