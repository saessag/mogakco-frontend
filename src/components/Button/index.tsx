import React, { FC } from 'react';
import { ButtonStyle, ButtonStyleProps } from './styled';

// TODO: with Icon?
interface ButtonProps extends ButtonStyleProps {
  children: React.ReactNode;
}

const Button: FC<ButtonProps> = ({
  children,
  // button style
  size,
  variant,
  color,
}) => {
  return (
    <ButtonStyle size={size} variant={variant} color={color}>
      {children}
    </ButtonStyle>
  );
};

export default Button;
