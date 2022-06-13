/* eslint-disable import/prefer-default-export */
import {
  browserLocalPersistence,
  browserSessionPersistence,
  createUserWithEmailAndPassword,
  FacebookAuthProvider,
  GoogleAuthProvider,
  sendPasswordResetEmail,
  setPersistence,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from 'firebase/auth';
import { toast } from 'react-toastify';
import { auth } from '../../firebase';
import { ILogin, IRegister } from '../../interface/authTypes';
import firebaseError from '../../utils/firebaseError';

export const register = async (user: IRegister) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, user.email, user.password);

    toast.success('Activate your email');

    await updateProfile(res.user, {
      displayName: user.name,
    });

    return res.user;
  } catch (err: any) {
    return firebaseError(err);
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
    return firebaseError(err);
  }
};

export const google = async () => {
  try {
    const res = await signInWithPopup(auth, new GoogleAuthProvider());
    return res.user;
  } catch (err: any) {
    return firebaseError(err);
  }
};

export const facebook = async () => {
  try {
    const res = await signInWithPopup(auth, new FacebookAuthProvider());
    return res.user;
  } catch (err: any) {
    return firebaseError(err);
  }
};

export const forgotPassword = async (email: string) => {
  try {
    await sendPasswordResetEmail(auth, email);
    return toast.success('Success! Check your email.');
  } catch (err: any) {
    return firebaseError(err);
  }
};

export const logOut = async (router: any) => {
  try {
    await signOut(auth);
    router.push('/login');
  } catch (err: any) {
    return firebaseError(err);
  }
  return true;
};
