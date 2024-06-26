import React, { useId } from 'react';
import {
  InputWrapperStyle,
  InputStyle,
  InputWrapperStyleProps,
  InputStyleProps,
  InputControlStyle,
} from './styled';
import HelperText from '@components/HelperText';

interface InputBaseProps extends InputWrapperStyleProps, InputStyleProps {
  $inputProps?: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >;
}

interface InputControlProps extends InputBaseProps {
  $label?: string;
  $helperText?: string;
}

export const InputBase: React.FC<InputBaseProps> = ({
  $color,
  $error,
  $size,
  $fullWidth,
  $inputProps = {},
}) => {
  return (
    <InputWrapperStyle
      $color={$color}
      $error={$error}
      $fullWidth={$fullWidth}
    >
      <InputStyle
        $size={$size}
        {...$inputProps}
      />
    </InputWrapperStyle>
  );
};

export const InputControl: React.FC<InputControlProps> = ({
  $color,
  $error,
  $fullWidth,
  $size,
  $helperText,
  $label,
  $inputProps,
}) => {
  const generatedId = useId();
  const id = $inputProps?.id || generatedId;
  return (
    <InputControlStyle $fullWidth={$fullWidth}>
      <label htmlFor={id}>{$label}</label>
      <InputBase
        $error={$error}
        $fullWidth={$fullWidth}
        $color={$color}
        $size={$size}
        $inputProps={$inputProps}
      />
      {$helperText && (
        <HelperText
          $helperText={$helperText}
          $error={$error}
        />
      )}
    </InputControlStyle>
  );
};
