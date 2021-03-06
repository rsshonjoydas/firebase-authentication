import React from 'react';
import Footer from '../Footer';
import Header from '../Header';

const Layout = ({ children }: React.PropsWithChildren<{}>) => (
  <>
    <Header />
    <main>{children}</main>
    <Footer />
  </>
);

export default Layout;
