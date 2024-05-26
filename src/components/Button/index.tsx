import React, { ForwardRefRenderFunction, forwardRef } from 'react';
import { ButtonStyle, ButtonStyleProps } from './styled';

// TODO: with Icon?
interface ButtonProps extends ButtonStyleProps {
  children: React.ReactNode;
}

const Button: ForwardRefRenderFunction<HTMLButtonElement, ButtonProps> = (
  {
    children,
    // button style
    size,
    variant,
    color,
    ...rest
  },
  ref
) => {
  return (
    <ButtonStyle
      size={size}
      variant={variant}
      color={color}
      ref={ref}
      {...rest}
    >
      {children}
    </ButtonStyle>
  );
};

export default forwardRef(Button);
