import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from './header/Header';
import Sidebar from './sidebar/SideBar';

const Layout = ({ children }) => {
  const location = useLocation();
  const isSignupPage = location.pathname === '/sign-up';

  return (
    <>
      {!isSignupPage}
      {!isSignupPage && <Sidebar />}
      {children}
    </>
  );
};

export default Layout;
