import React from 'react';

type CircleButtonProps = {
  imgSrc: string;
  alt: string;
};

export const CircleButton: React.FC<CircleButtonProps> = ({ imgSrc, alt }) => {
  return (
    <div className="circle-button">
      <img src={imgSrc} alt={alt} />
    </div>
  );
};
