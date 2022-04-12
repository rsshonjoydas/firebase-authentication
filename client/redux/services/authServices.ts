/* eslint-disable import/prefer-default-export */
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { toast } from 'react-toastify';
import { auth } from '../../firebase';
import { IRegister } from '../../interface/authTypes';

export const register = async (user: IRegister) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, user.email, user.password);

    // await sendEmailVerification(auth.currentUser);

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
