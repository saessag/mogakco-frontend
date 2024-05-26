import React, {
  ForwardRefRenderFunction,
  InputHTMLAttributes,
  forwardRef,
} from 'react';
import {
  InputControl,
  InputControlProps,
  InputStyle,
  InputWrapper,
  InputWrapperProps,
} from './styled';
import { SizeProps } from '@styles/Props';
import HelperText from '@components/HelperText';

interface InputProps extends InputWrapperProps, InputControlProps {
  size?: SizeProps;
  inputProps?: React.DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >;
  helperText?: string;
}

const Input: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { color, size = 'medium', variant, inputProps, fullWidth, helperText, error },
  ref
) => {
  const padding =
    size === 'large' ? '16px 14px' : size === 'small' ? '4px 14px' : '8px 14px';

  return (
    <InputControl fullWidth={fullWidth}>
      <InputWrapper color={color} variant={variant} error={error}>
        <InputStyle
          style={{
            padding,
          }}
          {...inputProps}
          ref={ref}
        />
      </InputWrapper>
      {helperText && <HelperText helperText={helperText} error={error} />}
    </InputControl>
  );
};

export default forwardRef(Input);
