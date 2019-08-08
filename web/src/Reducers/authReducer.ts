let initialState = {
  user: {
    _id: '',
    username: '',
    password: ''
  },
  isLoggedIn: false
};

const authReducer = (state: authState = initialState, action: ReduxActionInterface) => {
  
  switch (action.type) {
    case 'getUser':
      return {...state, user: action.data};
    case 'setAsLoggedIn': 
    return {...state, isLoggedIn: action.data}
    default: 
      return state;
  }
}

export default authReducer;