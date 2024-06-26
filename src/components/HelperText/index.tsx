import React from 'react';
import { HelperTextStyle, HelperTextStyleProps } from './styled';

export interface HelperTextProps extends HelperTextStyleProps {
  $helperText: string;
}

const HelperText = ({ $error, $helperText, ...rest }: HelperTextProps) => {
  return (
    <HelperTextStyle
      $error={$error}
      {...rest}
    >
      {$helperText}
    </HelperTextStyle>
  );
};

export default HelperText;
