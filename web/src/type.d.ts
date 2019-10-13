export interface User {
  id: string
  licenseId: string
  type: 'Employee' | 'Student' | 'Visitor'
  firstname: string
  lastname: string
  dateCreated: Date
}

export type UserInput = Omit<User, 'dateCreated'>

export interface AdminInput {
  username: string
  password: string
}

export interface UsersTableHeader {
  key: keyof Omit<User, 'id'>
  name: string
}
