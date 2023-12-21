import React from 'react';

type ButtonProps = {
  className: string;
  text?: string | null;
  imageSrc?: string | null;
  alt?: string | null;
};

export const Button: React.FC<ButtonProps> = ({ className, text, imageSrc, alt }) => {
  return (
    <button className={className}>
      {text && <span>{text}</span>}
      {imageSrc && <img src={imageSrc} alt={alt || undefined} />}
    </button>
  );
};

