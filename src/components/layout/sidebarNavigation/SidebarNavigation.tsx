import React from 'react';
import { Button } from '../../../components/Button/Button';
import { buttonData } from './buttonData';
import { classNames } from '../../../utils/classNames';
import { useNavigate } from 'react-router-dom';
import './SidebarNavigation.css'

export const SidebarNavigation: React.FC = () => {
  const navigate = useNavigate();

  const handleButtonsClick=(route: string)=>{
    navigate(route)
  }

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
          onClick={()=>handleButtonsClick(button.route)}
        >
        </Button>
      ))}
    </div>
  );
};
