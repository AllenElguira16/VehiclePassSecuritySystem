import Axios from 'axios';
import { Dispatch } from 'redux';

export const signIn = (user: IUser, callback: callbackWithError) => async (dispatch: Dispatch<ReduxActionInterface>) => {
  let {data} = await Axios.post('/user', user);
  if(!data.error) {
    dispatch({
      type: 'setAsLoggedIn',
      data: true
    })
    callback();
  } else {
    callback(data.error);
  }
}

export const getUser = () => async (dispatch: any) => {
  let {data} = await Axios.get('/user');
  if(!data.error) {
    dispatch({
      type: 'getUser',
      data
    });
  }
}

export const createUser = (user: IUser) => {
  return {
    type: 'createUser',
    payload: user
  }
}