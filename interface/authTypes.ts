import * as FireAuth from 'firebase/auth';
import { NextRouter } from 'next/router';
import { ChangeEvent } from 'react';

export type ChangeInput = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

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

export interface IAuth extends FireAuth.User {}
export interface AuthState {
  currentUser?: IAuth;
  loading: boolean;
}

export interface IProfile {
  fullName: string;
  contactEmail: string;
  phone: string;
  website: string;
  address: string;
  about: string;
}
