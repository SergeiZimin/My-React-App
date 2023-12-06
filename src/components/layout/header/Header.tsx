import React from 'react';
import './Header.css';

export const Header: React.FC = () => {
  const buttons = [
    {
      className: "normal-button",
      text: "Add New Customer",
      imageSrc: null,
      alt: null,
    },
    {
      className: "square-button with-image",
      text: null,
      imageSrc: "src/components/layout/header/imgHeader/search-normal.svg",
      alt: "search-normal.svg",
    },
    {
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
          <button key={index} className={button.className}>
            {button.text && <span>{button.text}</span>}
            {button.imageSrc && (
              <img src={button.imageSrc} alt={button.alt} />
            )}
          </button>
        ))}
      </div>
    </header>
  );
};







