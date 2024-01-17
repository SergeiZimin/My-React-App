import React from 'react';
import { Button } from './Button';
import { classNames } from '../../../utils/classNames';
import './Header.css';

export const Header: React.FC = () => {
  const buttons = [
    {
      variant: "primary",
      className: "normal-button",
      text: "Add New Customer",
      imageSrc: null,
      alt: null,
    },
    {
      variant: "secondary",
      className: "square-button with-image",
      text: null,
      imageSrc: "src/components/layout/header/imgHeader/search-normal.svg",
      alt: "search-normal.svg",
    },
    {
      variant: "secondary",
      className: "avatar-button with-image",
      text: null,
      imageSrc: "src/components/layout/header/imgHeader/Avatar.png",
      alt: "Avatar.png",
    },
  ];

  return (
    <header className="header">
      <div className="parent-logo-container">
        <div className="logo-container">
          <img src="src/components/layout/header/imgHeader/blur.svg" alt="blur.svg" />
        </div>
      </div>
      <div className="buttons-container">
        {buttons.map((button, index) => (
          <Button key={index} {...button} className={classNames(button.className, button.variant === "primary" ? "primary-button" : "secondary-button")} />
        ))}
      </div>
    </header>
  );
};
