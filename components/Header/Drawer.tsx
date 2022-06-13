import MenuIcon from '@mui/icons-material/Menu';
import { Box, Drawer, IconButton, Typography } from '@mui/material';
import Link from 'next/link';
import { useState } from 'react';
import menuItems from '../../adapters/data/NavbarData';
import NavbarItem from './NavbarItem';

const MobileDrawer = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      <IconButton
        onClick={() => setIsDrawerOpen(true)}
        size="large"
        edge="start"
        color="inherit"
        aria-label="logo"
      >
        <MenuIcon />
      </IconButton>
      <Drawer anchor="left" open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
        <Box p={2} width="250px" role="presentation" textAlign="center">
          <Typography
            variant="h6"
            component="div"
            className="flex justify-center flex-col items-center p-4 text-lg"
          >
            <>
              <h1 className="link mb-4">RS Shonjoy</h1>
              {menuItems.map((menuItem) => (
                <span key={menuItem.id} className="mt-4">
                  <NavbarItem label={menuItem.label} href={menuItem.path} />
                </span>
              ))}
              <div className="flex items-center justify-end md:flex-1 lg:w-0 mt-8">
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
            </>
          </Typography>
        </Box>
      </Drawer>
    </>
  );
};
export default MobileDrawer;
