import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { authLogout } from '../../redux/slice/authSlice';

const NavProfile = () => {
  const { currentUser } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const router = useRouter();

  return (
    <div className="flex items-center cursor-pointer">
      <Link href="/profile" replace>
        <span className="flex items-center">
          <div className="w-10 h-10 overflow-hidden rounded-full">
            {currentUser?.photoURL ? (
              <Image
                height={44}
                width={44}
                src={currentUser.photoURL}
                alt="avatar"
                className="object-cover w-full h-full"
              />
            ) : (
              <FontAwesomeIcon icon={faUser} className="w-full h-full" />
            )}
          </div>
          <span className="mr-4 ml-2 font-semibold capitalize">{currentUser?.displayName}</span>
        </span>
      </Link>
      <button
        type="button"
        className="px-5 py-2 text-white bg-red-400 rounded-lg hover:bg-red-600"
        onClick={() => dispatch(authLogout(router))}
      >
        Sign out
      </button>
    </div>
  );
};

export default NavProfile;
