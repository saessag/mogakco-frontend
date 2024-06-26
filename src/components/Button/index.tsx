import React, { ForwardRefRenderFunction, forwardRef } from 'react';
import { ButtonStyle, ButtonStyleProps } from './styled';

// TODO: with Icon?
interface ButtonProps extends ButtonStyleProps {
  children?: React.ReactNode;
}

const Button: ForwardRefRenderFunction<HTMLButtonElement, ButtonProps> = (
  { children, ...rest },
  ref
) => {
  return (
    <ButtonStyle
      ref={ref}
      {...rest}
    >
      {children}
    </ButtonStyle>
  );
};

export default forwardRef(Button);
