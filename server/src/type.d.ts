/* eslint-disable @typescript-eslint/no-explicit-any */
export interface Admin {
  username: string;
  password: string;
}

export interface User {
  userId: string;
  firstname: string;
  lastname: string;
}

export interface Setting {
  name: string;
  value: any;
}

export interface Response {
  success?: any;
  error?: any;
}

export interface AdminParams {
  username: string;
  password: string;
}

export interface SessionInterface {
  user: Admin;
}
