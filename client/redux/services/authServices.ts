/* eslint-disable import/prefer-default-export */
import {
  browserLocalPersistence,
  browserSessionPersistence,
  createUserWithEmailAndPassword,
  setPersistence,
  signInWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';
import { toast } from 'react-toastify';
import { auth } from '../../firebase';
import { ILogin, IRegister } from '../../interface/authTypes';

export const register = async (user: IRegister) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, user.email, user.password);

    toast.success('Activate your email');

    await updateProfile(res.user, {
      displayName: user.name,
    });

    return res.user;
  } catch (error: any) {
    // if (error.code === 'auth/email-already-in-use') {
    //   toast.error('Email Already in Use');
    // }
    // if (error.code === 'auth/invalid-email') {
    //   toast.error('invalid email address');
    // }
    // if (error.code === 'auth/weak-password') {
    //   toast.error('Password should be at least 6 character');
    // }
    return toast.error(error.message);
  }
};

export const login = async (user: ILogin) => {
  try {
    const { email, password, remember } = user;

    await setPersistence(auth, remember ? browserLocalPersistence : browserSessionPersistence);

    const res = await signInWithEmailAndPassword(auth, email, password);

    toast.success('Login Successfully!');

    user.router?.push('./');

    return res.user;
  } catch (err: any) {
    return toast.error(err.message);
  }
};
