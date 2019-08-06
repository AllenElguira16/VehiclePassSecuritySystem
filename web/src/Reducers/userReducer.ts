

const userReducer = (state: IUser | undefined, action: any) => {
  state = {
    username: '',
    password: ''
  };

  switch (action.type) {
    case 'getUser':
      return state;
    default: 
      return state;
  }
}

export default userReducer;