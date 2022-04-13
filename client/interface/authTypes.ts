import * as FireAuth from 'firebase/auth';
import { NextRouter } from 'next/router';

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
export interface ILogin {
  email: string;
  password: string;
  remember?: boolean;
  router?: NextRouter;
}

interface IAuth extends FireAuth.User {}
export interface AuthState {
  currentUser?: IAuth;
  loading: boolean;
}
