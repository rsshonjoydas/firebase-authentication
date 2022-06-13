import { Popover } from '@headlessui/react';
import Image from 'next/image';
import Link from 'next/link';
import menuItems from '../../adapters/data/NavbarData';
import { useAppSelector } from '../../redux/hooks';
import MobileDrawer from './Drawer';
import NavbarItem from './NavbarItem';
import NavProfile from './NavProfile';

const Header = () => {
  const { currentUser } = useAppSelector((state) => state.auth);
  return (
    <Popover className="relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <div className="-my-2 mr-3 md:hidden">
              <div className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400  focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                <span className="sr-only">Open menu</span>
                <div className="h-6 w-6" aria-hidden="true">
                  <MobileDrawer />
                </div>
              </div>
            </div>
            <Link href="/">
              <a href="">
                <Image
                  height={40}
                  width={40}
                  className="h-8 w-auto sm:h-10 cursor-pointer"
                  src="https://res.cloudinary.com/dmgbtukr2/image/upload/v1642085457/avatar/rs_xedovq.jpg"
                  alt=""
                />
              </a>
            </Link>
          </div>
          <Popover.Group as="nav" className="hidden md:flex space-x-10">
            {menuItems.map((menuItem) => (
              <NavbarItem key={menuItem.id} label={menuItem.label} href={menuItem.path} />
            ))}
          </Popover.Group>
          {!currentUser ? (
            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
              <Link href="login">
                <span className="cursor-pointer whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
                  Sign in
                </span>
              </Link>
              <Link href="/register">
                <span className="cursor-pointer ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
                  Sign up
                </span>
              </Link>
            </div>
          ) : (
            <NavProfile />
          )}
        </div>
      </div>
    </Popover>
  );
};

export default Header;
