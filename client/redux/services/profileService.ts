/* eslint-disable import/prefer-default-export */
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';
import { database } from '../../firebase';
import { IAuth, IProfile } from '../../interface/authTypes';

export const changeProfiles = async (user: IAuth, data: IProfile) => {
  try {
    await setDoc(doc(database, 'users', user.uid), data);
    toast.success('Success.');
  } catch (err: any) {
    return toast.error(err.message);
  }
  return true;
};

export const getProfile = async (uid: string) => {
  try {
    const docRef = doc(database, `users/${uid}`);

    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) return docSnap.data();
  } catch (err: any) {
    return toast.error(err.message);
  }
  return true;
};
