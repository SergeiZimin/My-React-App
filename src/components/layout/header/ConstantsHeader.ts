import avatarImage from './imgHeader/Avatar.png'; 
import searchNormalImage from './imgHeader/searchNormal.svg';

export const headerButtons = [
    {
      className: "normal-button",
      text: "Add New Customer",
      imageSrc: null,
      alt: null,
    },
    {
      className: "square-button with-image",
      text: null,
      imageSrc: searchNormalImage,
      alt: "search-normal.svg",
    },
    {
      className: "avatar-button with-image",
      text: null,
      imageSrc: avatarImage,
      alt: "Avatar.png",
    },
  ];
  