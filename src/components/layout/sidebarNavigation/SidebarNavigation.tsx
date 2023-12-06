import React from 'react';
import './SidebarNavigation.css';

const buttonData = [
  { imgSrc: 'src/components/layout/sidebarNavigation/imgsidebarNavigation/element-4.svg', alt: 'element-4.svg' },
  { imgSrc: 'src/components/layout/sidebarNavigation/imgsidebarNavigation/briefcase.svg', alt: 'briefcase.svg' },
  { imgSrc: 'src/components/layout/sidebarNavigation/imgsidebarNavigation/profile-2user.svg', alt: 'profile-2user.svg' },
  { imgSrc: 'src/components/layout/sidebarNavigation/imgsidebarNavigation/task.svg', alt: 'task.svg' },
  { imgSrc: 'src/components/layout/sidebarNavigation/imgsidebarNavigation/calendar.svg', alt: 'calendar.svg' },
  { imgSrc: 'src/components/layout/sidebarNavigation/imgsidebarNavigation/notification.svg', alt: 'notification.svg' },
  { imgSrc: 'src/components/layout/sidebarNavigation/imgsidebarNavigation/setting-2.svg', alt: 'setting-2.svg' },
];

export const SidebarNavigation: React.FC = () => {
  return (
    <div className="sidebar-navigation">
      {buttonData.map((button, index) => (
        <div className="circle-button" key={index}>
          <img src={button.imgSrc} alt={button.alt} />
        </div>
      ))}
    </div>
  );
};









