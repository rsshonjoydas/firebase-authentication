/* eslint-disable no-return-assign */
/* eslint-disable no-return-await */
/* eslint-disable import/prefer-default-export */
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { toast } from 'react-toastify';
import { storage } from '../../firebase';

const downloadFile = async (path: string) => {
  let item: string = '';
  await getDownloadURL(ref(storage, path))
    .then((url) => (item = url))
    .catch((err) => toast.error(err.message));

  return item;
};

export const uploadFiles = async (folder: string, files: File[]) => {
  const promise: any[] = [];

  files.forEach((file) => {
    const storageRef = ref(storage, `${folder}/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);
    promise.push(uploadTask);
  });

  const result = await Promise.all(promise);
  const urlPromises = result.map(async (item) => {
    const path = item.ref.toString();
    return await downloadFile(path);
  });

  const urls = await Promise.all(urlPromises);
  return urls;
};
