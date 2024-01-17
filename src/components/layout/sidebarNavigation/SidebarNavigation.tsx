import React from 'react';
import './SidebarNavigation.css';
import {CircleButton} from './CircleButton';
import { buttonData } from './buttonData';

export const SidebarNavigation: React.FC = () => {
  return (
    <div className="sidebar-navigation">
      {buttonData.map((button, index) => (
        <CircleButton key={index} {...button} />
      ))}
    </div>
  );
};
