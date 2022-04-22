/* eslint-disable import/prefer-default-export */
import { updateCurrentUser, updateProfile } from 'firebase/auth';
import { toast } from 'react-toastify';
import { auth } from '../../firebase';
import { IAuth } from '../../interface/authTypes';

export const changeAvatar = async (user: IAuth, url: string) => {
  try {
    await updateProfile(user, { photoURL: url });
    await updateCurrentUser(auth, user);
  } catch (err: any) {
    return toast.error(err.message);
  }
  return true;
};
