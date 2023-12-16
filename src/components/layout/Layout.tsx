import React, { ReactNode } from 'react';
import { Header } from './header/Header';
import { SidebarNavigation } from './sidebarNavigation/SidebarNavigation';
import { Users } from '../../pages/users/Users.tsx';
import './layout.css';

type LayoutProps = {
  children: ReactNode;
};

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <div className='layoutContent'>
      <SidebarNavigation />
      <Users />
      </div>
      {children}
    </div>
  );
};











