export interface User {
  id: string
  licenseId: string
  type: 'Employee' | 'Student' | 'Visitor'
  firstname: string
  lastname: string
  dateCreated: Date
}

export type UserInput = Omit<User, 'dateCreated'>

export type History = {
  id: string
  type: 'success' | 'error'
  msg: string
  dateCreated: Date
}

export interface AdminInput {
  username: string
  password: string
}

export interface TableHeader<T> {
  key: keyof Omit<T, 'id'>
  name: string
}

export interface UserState {
  isLoading: boolean
  page: number
  rowsPerPage: number
  users: User[]
}

export type SortType = 'asc' | 'desc'

export type CheckSorted<T> = {
  [k in keyof Omit<T, 'id'>]: SortType
}

export interface FormState {
  isOpen: boolean
  userInput: UserInput
  type: 'add' | 'edit' | 'delete'
  currentKey: null | number
}

export interface HistoryFormState {
  isOpen: boolean
  type: 'delete'
  currentKey: null | number
}

export interface Alert {
  isOpen: boolean
  type: '' | 'success' | 'error'
  msg: string
}

export interface AlertComponentProps {
  type: 'success' | 'error' | ''
  open: boolean
  onClose: () => void
}
