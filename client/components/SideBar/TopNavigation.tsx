import { FaHashtag, FaRegBell, FaSearch, FaUserCircle } from 'react-icons/fa';

const Search = () => (
  <div className="search">
    <input className="search-input" type="text" placeholder="Search..." />
    <FaSearch size="18" className="text-secondary my-auto" />
  </div>
);

const BellIcon = () => <FaRegBell size="24" className="top-navigation-icon" />;
const UserCircle = () => <FaUserCircle size="24" className="top-navigation-icon" />;
const HashtagIcon = () => <FaHashtag size="20" className="title-hashtag" />;
const Title = () => <h5 className="title-text ml-14 link">RS Shonjoy</h5>;

const TopNavigation = () => (
  <div className="top-navigation">
    <HashtagIcon />
    <Title />
    <Search />
    <BellIcon />
    <UserCircle />
  </div>
);

export default TopNavigation;
