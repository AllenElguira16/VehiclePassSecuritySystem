// /* eslint-disable @typescript-eslint/no-explicit-any */
// export interface Admin {
//   username: string;
//   password: string;
// }

export interface User {
  id: string
  schoolID: string
  type: 'Employee' | 'Student'
  firstname: string
  lastname: string
  dateCreated: Date
}

export type UserInput = Omit<User, 'id' | 'dateCreated'>

export type AdminInput = {
  _id: Partial<string>
  username: string
  password: string
  rePassword: string
}

export interface Setting {
  name: string
  value: any
}

export interface Response {
  success?: any
  error?: any
}

export interface SessionInterface {
  user: Omit<AdminInput, 'rePassword'>
}
// export interface UserInterface {
//   userId: string;
//   firstname: string;
//   lastname: string;
// }

// export interface VehicleInterface {
//   userId: string;
//   name: string;
//   plateNumber: string;
//   type: string;
//   color: string;
//   registrationNumber: string;
// }

// export interface AdminParams {
//   username: string;
//   password: string;
// }
