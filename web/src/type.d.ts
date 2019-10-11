export interface User {
  _id: string
  userId: string
  firstname: string
  lastname: string
  dateCreated: Date
}

export interface UserInput {
  username: string
  password: string
}

export interface UsersTableHeader {
  key: keyof Omit<User, '_id'>
  name: string
}