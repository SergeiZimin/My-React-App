import { Button } from '../../Button/Button';
import { classNames } from '../../../utils/classNames';
import './Header.css';
import avatarImage from './imgHeader/Avatar.png'; 
import searchNormalImage from './imgHeader/searchNormal.svg';
import { Link } from 'react-router-dom';

type HeaderButton = {
  variant: 'primary' | 'secondary';
  className: string;
  text: string | null;
  imageSrc: string | null;
  alt: string | null;
};

export const Header: React.FC = () => {

  const handleDashboardButtonClic=()=>{
    return(
      <Link to='/Dashboard'></Link>
    )
  };

  const headerButtons: HeaderButton[] = [
    {
      variant: 'secondary',
      className: 'square-button with-image',
      text: null,
      imageSrc: searchNormalImage,
      alt: 'search-normal.svg',
    },
    {
      variant: 'secondary',
      className: 'avatar-button with-image',
      text: null,
      imageSrc: avatarImage,
      alt: 'Avatar.png',
    },
  ];

  return (
    <header className="header">
      <div className="parent-logo-container">
        <div className="logo-container">
          <img src="./imgHeader/blur.svg" alt="blur.svg" />
        </div>
      </div>
      <div className="buttons-container">
        {headerButtons.map((button, index) => (
          <Button
            key={index}
            variant={button.variant}
            className={classNames(
              button.className,
              button.variant === 'primary' ? 'normal-variant' : 'square-variant'
            )}
            text={button.text || ''}
            imageSrc={button.imageSrc || ''}
            alt={button.alt || ''}
            onClick={handleDashboardButtonClic}
          />
        ))}
      </div>
    </header>
  );
};
