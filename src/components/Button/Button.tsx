import React from 'react';
import { classNames } from '../../utils/classNames';

type ButtonProps = {
  variant: "primary" | "secondary";
  className: string;
  text?: string | null;
  imageSrc?: string | null;
  alt?: string | null;
};

export const Button: React.FC<ButtonProps> = ({ variant, className, text, imageSrc, alt }) => {
  const variantClass = variant === "primary" ? "primary-button" : "secondary-button";

  return (
    <button className={classNames(className, variantClass)}>
      {text && <span>{text}</span>}
      {imageSrc && <img src={imageSrc} alt={alt || undefined} />}
    </button>
  );
};
