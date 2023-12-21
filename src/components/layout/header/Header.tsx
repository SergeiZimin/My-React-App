import React from 'react';
import {Button} from './Button';
import { headerButtons } from './ConstantsHeader';
import './Header.css';

export const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="parent-logo-container">
        <div className="logo-container">
          <img src="src/components/layout/header/imgHeader/blur.svg" alt="blur.svg" />
        </div>
      </div>
      <div className="buttons-container">
        {headerButtons.map((button, index) => (
          <Button
            key={index}
            className={button.className}
            text={button.text}
            imageSrc={button.imageSrc}
            alt={button.alt}
          />
        ))}
      </div>
    </header>
  );
};
