import React from 'react';
import styled from 'styled-components';
import { ColorProps, SizeProps } from '@styles/Props';

export interface ButtonStyleProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  $color?: ColorProps;
  $size?: SizeProps;
  $variant?: 'text' | 'contained' | 'outlined';
}

export const ButtonStyle = styled.button<ButtonStyleProps>`
  /* common */
  display: inline-flex;
  align-items: center;
  justify-content: center;
  outline: 0;
  user-select: none;
  box-sizing: border-box;
  transition: all 200ms ease-in-out;
  font-weight: 500;
  vertical-align: middle;
  margin: 0;

  /* props */
  font-size: ${({ $size = 'medium' }) => {
    switch ($size) {
      case 'small':
        return '14px';
      case 'medium':
      default:
        return '16px';
      case 'large':
        return '18px';
    }
  }};
  padding: ${({ $size = 'medium', $variant = 'contained' }) => {
    if ($variant === 'text') {
      switch ($size) {
        case 'small':
          return '4px 5px';
        case 'medium':
        default:
          return '6px 8px';
        case 'large':
          return '8px 11px';
      }
    } else if ($variant === 'outlined') {
      switch ($size) {
        case 'small':
          return '3px 9px';
        case 'medium':
        default:
          return '5px 15px';
        case 'large':
          return '7px 21px';
      }
    } else if ($variant === 'contained') {
      switch ($size) {
        case 'small':
          return '4px 10px';
        case 'medium':
        default:
          return '6px 16px';
        case 'large':
          return '8px 22px';
      }
    }
  }};
  border-radius: ${({ theme }) => `${theme.shape.borderRadius}px`};
  border: ${({ theme, $color = 'primary', $variant = 'contained' }) =>
    $variant === 'outlined'
      ? `1px solid ${theme.palette[$color].main}`
      : 'none'};
  background-color: ${({ theme, $color = 'primary', $variant = 'contained' }) =>
    $variant === 'contained' ? theme.palette[$color].main : 'transparent'};
  color: ${({ theme, $color = 'primary', $variant = 'contained' }) =>
    $variant === 'contained'
      ? theme.palette.primary.contrastText
      : theme.palette[$color].main};

  &:hover {
    filter: brightness(0.85);
    background-color: ${({ theme, $variant = 'contained' }) =>
      $variant !== 'contained' && theme.palette.action.hover};
  }
  &:disabled {
    cursor: default;
    background-color: ${({ theme, $variant = 'contained' }) =>
      $variant === 'contained'
        ? theme.palette.action.disabledBackground
        : 'transparent'};
    color: ${({ theme }) => theme.palette.action.disabled};
    border: ${({ theme, $variant = 'contained' }) =>
      $variant === 'outlined'
        ? `1px solid ${theme.palette.action.disabledBackground}`
        : 'none'};
  }
`;
