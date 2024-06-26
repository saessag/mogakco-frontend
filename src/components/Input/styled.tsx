import styled from 'styled-components';
import { ColorProps, SizeProps } from '@styles/Props';

export interface InputControlStyleProps {
  $fullWidth?: boolean;
}

export interface InputWrapperStyleProps {
  $color?: ColorProps;
  $error?: boolean;
  $fullWidth?: boolean;
}

export interface InputStyleProps {
  $size?: SizeProps;
}

export const InputControlStyle = styled.div<InputControlStyleProps>`
  display: inline-flex;
  flex-direction: column;
  position: relative;
  vertical-align: top;
  min-width: 0;
  padding: 0;
  border: 0;
  margin: 0;

  width: ${({ $fullWidth = false }) => ($fullWidth ? '100%' : undefined)};
`;

export const InputWrapperStyle = styled.div<InputWrapperStyleProps>`
  /*  */
  display: inline-flex;
  align-items: center;
  overflow: hidden;
  border-width: 1px;
  border-style: solid;

  /* props */
  width: ${({ $fullWidth = false }) => ($fullWidth ? '100%' : undefined)};
  border-radius: ${({ theme }) => `${theme.shape.borderRadius}px`};
  border-color: ${({ theme, $color, $error }) =>
    $error
      ? `${theme.palette.error.main}`
      : $color
      ? `${theme.palette[$color].main}`
      : `${theme.palette.divider}`};

  &:hover {
    border-color: ${({ theme, color, $error }) =>
      !color && !$error && `${theme.palette.action.active}`};
  }
  &:focus-within {
    border-color: ${({ theme, $color, $error }) =>
      !$color && !$error && `${theme.palette.primary.main}`};
    outline: ${({ theme, $color, $error }) =>
      $error
        ? `2px solid ${theme.palette.error.main}`
        : $color
        ? `2px solid ${theme.palette[$color].main}`
        : `2px solid ${theme.palette.primary.main}`};
    outline-offset: -1px;
  }
`;

export const InputStyle = styled.input<InputStyleProps>`
  width: 100%;
  min-width: 0;
  /* props */
  padding: ${({ $size = 'medium' }) =>
    $size === 'large'
      ? '16px 14px'
      : $size === 'small'
      ? '4px 14px'
      : '8px 14px'};
`;
