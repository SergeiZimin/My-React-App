import React, { ReactNode } from 'react';
import { classNames } from '../../utils/classNames';
import './Button.css';

type ButtonProps = {
  variant: 'primary' | 'secondary' | 'success' | 'danger' | 'circle' | 'modal-save' | 'modal-cancel';
  onClick?: () => void;
  children?: ReactNode;
  imageSrc?: string;
  alt?: string;
  className?: string;
  text?: string; 
};

export const Button: React.FC<ButtonProps> = ({ variant, onClick, children, imageSrc, alt, className, text }) => {
  const getClassName = () => {
    switch (variant) {
      case 'primary':
        return 'normal-button';
      case 'secondary':
        return 'square-button';
      case 'success':
      case 'circle':
        return 'circle-button';
      case 'danger':
        return 'edit-button';
      case 'modal-save':
        return 'modal-save-button';
      case 'modal-cancel':
        return 'modal-cancel-button';
      default:
        return 'normal-button';
    }
  };

  return (
    <button className={classNames('button', getClassName(), className)} onClick={onClick}>
      {imageSrc && <img src={imageSrc} alt={alt || undefined} />}
      {text ? <span>{text}</span> : children}
    </button>
  );
};
