import { Button } from '../../Button/Button';
import { classNames } from '../../../utils/classNames';
import './Header.css';

type HeaderButton = {
  variant: 'primary' | 'secondary';
  className: string;
  text: string | null;
  imageSrc: string | null;
  alt: string | null;
};

export const Header: React.FC = () => {

  const headerButtons: HeaderButton[] = [
    {
      variant: 'primary',
      className: 'normal-button',
      text: '',
      imageSrc: null,
      alt: null,
    },
    {
      variant: 'secondary',
      className: 'square-button with-image',
      text: null,
      imageSrc: 'src/components/layout/header/imgHeader/search-normal.svg',
      alt: 'search-normal.svg',
    },
    {
      variant: 'secondary',
      className: 'avatar-button with-image',
      text: null,
      imageSrc: 'src/components/layout/header/imgHeader/Avatar.png',
      alt: 'Avatar.png',
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
          />
        ))}
      </div>
    </header>
  );
};
