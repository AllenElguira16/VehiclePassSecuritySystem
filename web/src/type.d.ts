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

export interface UserState {
  isLoading: boolean
  page: number
  rowsPerPage: number
  users: User[]
}

export type SortType = 'asc' | 'desc'

export type CheckSorted = {
  [k in keyof Omit<User, 'id'>]: SortType
}

export interface FormState {
  isOpen: boolean
  userInput: UserInput
  type: 'add' | 'edit' | 'delete'
  currentKey: null | number
}

export interface Alert {
  isOpen: boolean
  type: '' | 'success' | 'error'
  msg: string
}
