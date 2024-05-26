import styled from 'styled-components';
import { ColorProps } from '@styles/Props';

export interface InputControlProps {
  fullWidth?: boolean;
}

export interface InputWrapperProps {
  color?: ColorProps;
  variant?: 'text' | 'contained' | 'outlined';
  error?: boolean;
}

export const InputControl = styled.div<InputControlProps>`
  display: inline-flex;
  flex-direction: column;
  position: relative;
  vertical-align: top;
  min-width: 0;
  padding: 0;
  border: 0;
  margin: 0;

  width: ${({ fullWidth = false }) => (fullWidth ? '100%' : '25ch')};
`;

export const InputWrapper = styled.div<InputWrapperProps>`
  /*  */
  display: inline-flex;
  align-items: center;
  overflow: hidden;
  border-width: 1px;
  border-style: solid;

  /* props */
  border-radius: ${({ theme }) => `${theme.shape.borderRadius}px`};
  border-color: ${({ theme, color, error }) =>
    error
      ? `${theme.palette.error.main}`
      : color
      ? `${theme.palette[color].main}`
      : `${theme.palette.divider}`};

  &:hover {
    border-color: ${({ theme, color, error }) =>
      !color && !error && `${theme.palette.action.active}`};
  }
  &:focus-within {
    border-color: ${({ theme, color, error }) =>
      !color && !error && `${theme.palette.primary.main}`};
    outline: ${({ theme, color, error }) =>
      error
        ? `2px solid ${theme.palette.error.main}`
        : color
        ? `2px solid ${theme.palette[color].main}`
        : `2px solid ${theme.palette.primary.main}`};
    outline-offset: -1px;
  }
`;

export const InputStyle = styled.input`
  width: 100%;
`;
