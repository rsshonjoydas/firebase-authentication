import * as FireAuth from 'firebase/auth';

export interface IParams {
  page: string;
  id: string;
}

export interface IRegister {
  name: string;
  email: string;
  password: string;
  confirmPassword?: string;
}

export interface IAuth extends FireAuth.User {}
