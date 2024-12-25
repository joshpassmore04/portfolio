import React from 'react';
import { IconType } from 'react-icons';
import { useNavigate } from 'react-router-dom';
import { cva } from 'class-variance-authority';

// ChatGPT helped with this file!
interface LanguageButtonProps {
  Icon: IconType; // Specify the react-icons Icon type
  size?: number;  // Size of the icon
  route: string;  // Route to navigate to
}

const languageButtonStyles = cva(
  'group flex items-center justify-center cursor-pointer transition-all'
);

const iconWrapperStyles = cva(
  'relative p-2 rounded-xl', // Padding adjusted dynamically
  {
    variants: {
      hover: {
        true: 'group-hover:shadow-md',
      },
    },
    defaultVariants: {
      hover: true,
    },
  }
);

const backgroundFadeStyles = cva(
  'absolute inset-0 rounded-xl bg-white opacity-0 transition-opacity duration-300',
  {
    variants: {
      hover: {
        true: 'group-hover:opacity-100',
      },
    },
    defaultVariants: {
      hover: true,
    },
  }
);

const iconStyles = cva(
  'relative filter transition-transform duration-500 delay-500 group-hover:invert group-hover:brightness-150'
);

const LanguageButton: React.FC<LanguageButtonProps> = ({ Icon, size = 32, route }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(route);
  };

  return (
    <div
      className={languageButtonStyles()}
      onClick={handleClick}
    >
      <div className={iconWrapperStyles()}>
        {/* Background fade rectangle */}
        <div className={backgroundFadeStyles()} />
        {/* Icon */}
        <Icon size={size} className={iconStyles()} />
      </div>
    </div>
  );
};

export default LanguageButton;
