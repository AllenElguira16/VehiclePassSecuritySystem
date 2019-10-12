// /* eslint-disable @typescript-eslint/no-explicit-any */
// export interface Admin {
//   username: string;
//   password: string;
// }

export interface User {
  _id: string;
  licenseId: string;
  type: 'Employee' | 'Student' | 'Visitor';
  firstname: string;
  lastname: string;
  dateCreated: Date;
}

export type UserInput = Omit<User, '_id' | 'dateCreated'>;

export type AdminInput = {
  username: string;
  password: string;
};

export interface Setting {
  name: string;
  value: any;
}

export interface Response {
  success?: any;
  error?: any;
}

export interface SessionInterface {
  user: AdminInput;
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
