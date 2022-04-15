import Image from 'next/image';
import { FaRegBell, FaSearch, FaUserCircle } from 'react-icons/fa';
import { useAppSelector } from '../../redux/hooks';

const Search = () => (
  <div className="search">
    <input className="search-input" type="text" placeholder="Search..." />
    <FaSearch size="18" className="text-secondary my-auto" />
  </div>
);

const UserCircle = () => {
  const { currentUser } = useAppSelector((state: { auth: any }) => state.auth);

  return (
    <div>
      {currentUser?.photoURL ? (
        <Image height={44} width={44} src={currentUser.photoURL} alt="avatar" />
      ) : (
        <FaUserCircle size="24" className="top-navigation-icon" />
      )}
    </div>
  );
};

const BellIcon = () => <FaRegBell size="24" className="top-navigation-icon" />;
const Title = () => {
  const { currentUser } = useAppSelector((state: { auth: any }) => state.auth);
  return (
    <div>
      {currentUser?.displayName ? (
        <h5 className="title-text link">{currentUser.displayName}</h5>
      ) : (
        <h5 className="title-text link">RS Shonjoy</h5>
      )}
    </div>
  );
};

const TopNavigation = () => (
  <div className="top-navigation">
    <Title />
    <Search />
    <BellIcon />
    <UserCircle />
  </div>
);

export default TopNavigation;
