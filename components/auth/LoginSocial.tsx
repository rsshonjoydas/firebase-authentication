import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useAppDispatch } from '../../redux/hooks';
import { authFacebookLogin, authGoogleLogin } from '../../redux/slice/authSlice';

const LoginSocial = () => {
  const dispatch = useAppDispatch();

  return (
    <div className="flex justify-center items-center gap-4">
      <button
        type="button"
        className="col-span-5 w-full p-3 my-2 font-semibold text-white rounded-lg transition bg-red-400 hover:bg-red-500"
        onClick={() => dispatch(authGoogleLogin())}
      >
        <FontAwesomeIcon icon={faGoogle} />
        oogle
      </button>

      <button
        type="button"
        className="col-span-5 w-full p-3 my-2 font-semibold text-white rounded-lg transition bg-blue-400 hover:bg-blue-500"
        onClick={() => dispatch(authFacebookLogin())}
      >
        <FontAwesomeIcon icon={faFacebookF} />
        acebook
      </button>
    </div>
  );
};

export default LoginSocial;
