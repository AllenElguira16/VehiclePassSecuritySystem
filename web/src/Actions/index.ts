export const getUser = (id: string) => {
  return {
    type: 'getUser',
    payload: id
  }
}

export const createUser = (user: IUser) => {
  return {
    type: 'createUser',
    payload: user
  }
}