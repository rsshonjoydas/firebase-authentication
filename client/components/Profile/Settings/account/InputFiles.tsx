/* eslint-disable no-unused-vars */
/* eslint-disable react/require-default-props */
import React, { ChangeEvent } from 'react';
import { AiFillDelete } from 'react-icons/ai';
import { toast } from 'react-toastify';
import useModal from '../../../../hooks/useModal';
import Modal from '../../../Modal';

interface IProps {
  multiple?: boolean;
  files: (File | string)[];
  setFiles: (files: (File | string)[]) => void;
}

const InputFiles: React.FC<IProps> = ({ multiple, files, setFiles }) => {
  const { modalOpen, close, open } = useModal();

  const checkImages = (fls: FileList) => {
    const newFiles: File[] = [];

    Array.from(fls).map((file) => {
      if (!file) return toast.error('File does not exist.');

      const types = ['image/png', 'image/jpeg', 'image/gif'];
      if (!types.includes(file.type)) {
        return toast.error('The image type is png / jpeg / gif.');
      }

      if (file.size > 1024 * 1024) {
        return toast.error('The largest image size is 1mb.');
      }

      return newFiles.push(file);
    });
    setFiles(newFiles);
  };

  const handleChange = (e: ChangeEvent) => {
    e.preventDefault();

    const target = e.target as HTMLInputElement;
    const file = target.files;
    if (!file) return;

    checkImages(file);
  };

  const removeImage = (i: number) => {
    const newArr = files.filter((_, index) => index !== i);
    setFiles(newArr);
  };

  const showImage = (url: string, index: number) => (
    <div key={index} className="flex flex-col items-center">
      <img src={url} alt="avatar" className="object-cover w-12 h-12 mx-1 border rounded-full" />
      <AiFillDelete className="w-5 cursor-pointer" onClick={() => removeImage(index)} />
    </div>
  );

  const allowDrag = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const drop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const dt = e.dataTransfer;
    const dropFiles = dt.files;
    console.log('🚀 ~ file: InputFiles.tsx ~ line 58 ~ drop ~ dropFiles', dropFiles);
    if (!files) return;
    checkImages(dropFiles);
  };

  return (
    <div className="w-full my-3">
      {modalOpen && (
        <Modal
          modalOpen={modalOpen}
          multiple={multiple}
          setFiles={setFiles}
          type="dropIn"
          handleClose={close}
        />
      )}
      <div
        onDrop={drop}
        onDragOver={allowDrag}
        className="flex justify-center px-6 pt-5 pb-6 mt-1 border-2 border-gray-200 border-dashed rounded-md"
      >
        <div className="space-y-1 text-center">
          <div className="flex justify-center">
            {!files.length && (
              <svg
                className="w-12 h-12 mx-auto text-gray-400"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 48 48"
                aria-hidden="true"
              >
                <path
                  d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}

            {files.map((file, index) =>
              typeof file === 'string'
                ? showImage(file, index)
                : showImage(URL.createObjectURL(file), index)
            )}
          </div>

          <div className="flex justify-center text-sm text-gray-600">
            <label
              htmlFor="file-upload"
              className="relative font-medium text-indigo-600 bg-white rounded-md cursor-pointer hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
            >
              <span>Upload a file</span>
              <input
                id="file-upload"
                name="file-upload"
                type="file"
                className="sr-only"
                accept=".jpg, .png, .gif"
                multiple
                onChange={handleChange}
              />
            </label>
            <p className="pl-1">or</p>
            <p className="pl-1 font-semibold text-red-500 cursor-pointer" onClick={open}>
              My Storage
            </p>
            <p className="pl-1">or drag and drop</p>
          </div>
          <p className="text-xs text-gray-500">PNG, JPG, GIF up to 1MB</p>
        </div>
      </div>
    </div>
  );
};

export default InputFiles;
