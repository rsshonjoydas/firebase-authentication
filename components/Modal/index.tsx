/* eslint-disable no-unused-vars */
/* eslint-disable react/require-default-props */
import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { useAppSelector } from '../../redux/hooks';
import { getFiles } from '../../redux/services/uploadServices';
import Backdrop from '../BackDrop';

const dropIn = {
  hidden: {
    y: '-100vh',
    opacity: 0,
  },
  visible: {
    y: '0',
    opacity: 1,
    transition: {
      duration: 0.1,
      type: 'spring',
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: '100vh',
    opacity: 0,
  },
};

interface IProps {
  multiple?: boolean;
  files: (File | string)[];
  setFiles: (image: (File | string)[]) => void;
  handleClose: any;
}

const ModalText: React.FC<IProps> = ({ multiple, files, setFiles, handleClose }) => {
  const [store, setStore] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const [imageSelect, setImageSelect] = useState<string[]>([]);

  const { currentUser } = useAppSelector((state) => state.auth);

  useEffect(() => {
    if (!currentUser) return;
    setLoading(true);
    getFiles(`images/${currentUser.uid}`, (urls) => {
      setStore(urls);
      setLoading(false);
    });

    setStore([]);
  }, [currentUser]);

  const handleSelectImage = (image: string) => {
    if (!multiple) return setImageSelect([image]);

    if (!imageSelect.includes(image)) return setImageSelect([...imageSelect, image]);

    const newArr = imageSelect.filter((file) => file !== image);
    return setImageSelect(newArr);
  };

  const isActive = (image: string) => {
    if (imageSelect.includes(image)) return 'scale-110 border-red-500';
    return '';
  };

  const handleSubmit = () => {
    handleClose();
    if (!multiple) return setFiles(imageSelect);

    return setFiles([...files, ...imageSelect]);
  };

  return (
    <div className="flex items-end justify-center h-full w-full px-4 pt-4 pb-20 text-center sm:block sm:p-0">
      <div className="inline-block overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:align-middle sm:max-w-2xl sm:w-full">
        <div className="px-4 pt-5 pb-4 bg-white sm:p-6 sm:pb-4">
          <div className="sm:flex overflow-y-auto h-80 sm:items-start">
            <div className="w-full mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
              <div className="min-h-[300px] mt-2 border-2 border-dotted">
                <div className="grid grid-cols-5 gap-2 p-2" aria-multiselectable>
                  {loading && <h2>Loading...</h2>}
                  {store.map((image) => (
                    <img
                      key={image}
                      src={image}
                      alt="img"
                      className={`object-cover w-full h-24 p-1 border rounded-sm cursor-pointer hover:scale-110 ${isActive(
                        image
                      )}`}
                      onClick={() => handleSelectImage(image)}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="px-4 py-3 bg-gray-50 sm:px-6 sm:flex sm:flex-row-reverse">
          <button
            type="button"
            className="inline-flex justify-center w-full px-4 py-2 text-base font-medium text-white bg-red-600 border border-transparent rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
            onClick={handleSubmit}
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
};

const ModalButton = ({ onClick, label }: any) => (
  <motion.button
    className="modal-button pt-6"
    type="button"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    onClick={onClick}
  >
    {label}
  </motion.button>
);

const Modal = ({ handleClose, type, files, setFiles }: any) => (
  <Backdrop onClick={handleClose}>
    {type === 'dropIn' && (
      <motion.div
        onClick={(e) => e.stopPropagation()} // Prevent click from closing modal
        className="modal orange-gradient"
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <ModalText files={files} setFiles={setFiles} handleClose={handleClose} />
        <ModalButton onClick={handleClose} label="Close" />
      </motion.div>
    )}
  </Backdrop>
);
export default Modal;
