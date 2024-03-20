import React from 'react';
import { Button } from '../../../components/Button/Button';
import { buttonData } from './buttonData';
import { classNames } from '../../../utils/classNames';
import './SidebarNavigation.css'

export const SidebarNavigation: React.FC = () => {
  return (
    <div className={classNames('sidebar-navigation')}>
      {buttonData.map((button, index) => (
        <Button
          key={index}
          imageSrc={button.imgSrc}
          alt={button.alt}
          text=""
          className={classNames('circle-button')}
          variant={'circle'}
        >
        </Button>
      ))}
    </div>
  );
};
