/* eslint-disable consistent-return */
/* eslint-disable import/prefer-default-export */
import {
  EmailAuthProvider,
  FacebookAuthProvider,
  GoogleAuthProvider,
  reauthenticateWithCredential,
  reauthenticateWithPopup,
  updateCurrentUser,
  updateEmail,
  updatePassword,
  updateProfile,
} from 'firebase/auth';
import { toast } from 'react-toastify';
import { auth } from '../../firebase';
import { IAuth } from '../../interface/authTypes';
import firebaseError from '../../utils/firebaseError';

export const changeAvatar = async (user: IAuth, url: string) => {
  try {
    await updateProfile(user, { photoURL: url });
    await updateCurrentUser(auth, user);
  } catch (err: any) {
    return firebaseError(err);
  }
  return true;
};

export const changeDisplayName = async (user: IAuth, name: string) => {
  try {
    await updateProfile(user, { displayName: name });
    await updateCurrentUser(auth, user);
  } catch (err: any) {
    return firebaseError(err);
  }
  return true;
};

const reAuth = async (user: IAuth, pass: string) => {
  try {
    const { providerId } = user.providerData[0];
    // ? Password
    if (providerId === 'password') {
      if (!user.email) return;

      const credential = EmailAuthProvider.credential(user.email, pass);
      await reauthenticateWithCredential(user, credential);
    }
    // ? Google
    if (providerId === 'google.com') {
      await reauthenticateWithPopup(user, new GoogleAuthProvider());
    }
    // ? Facebook
    if (providerId === 'facebook.com') {
      await reauthenticateWithPopup(user, new FacebookAuthProvider());
    }
  } catch (err: any) {
    return toast.error(err.message);
  }
};

export const changeEmail = async (user: IAuth, newEmail: string, password: string) => {
  try {
    const result = await reAuth(user, password);
    if (result) return toast.error(result);

    await updateEmail(user, newEmail);
    await updateCurrentUser(auth, user);

    return toast.success('Updated New Email.');
  } catch (err: any) {
    return firebaseError(err);
  }
};

export const changePassword = async (user: IAuth, oldPassword: string, newPassword: string) => {
  try {
    const res = await reAuth(user, oldPassword);
    if (res) return toast.error(res);

    await updatePassword(user, newPassword);

    return toast.success('Updated New Password.');
  } catch (err: any) {
    return firebaseError(err);
  }
};
