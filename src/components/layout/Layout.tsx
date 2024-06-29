import React from 'react';
import { Header } from './header/Header';
import { SidebarNavigation } from './sidebarNavigation/SidebarNavigation';
import './layout.css';
import { Outlet } from 'react-router-dom';

type LayoutProps = object;

export const Layout: React.FC<LayoutProps> = () => {
  return (
    <div className="layout">
      <Header />
      <div className='layoutContent'>
        <SidebarNavigation />  
        <Outlet/>
        </div>
      </div>
  );
};
