import styled from 'styled-components';

export interface HelperTextStyleProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {
  error?: boolean;
}

export const HelperTextStyle = styled.p<HelperTextStyleProps>`
  margin: 3px 14px 0px;
  color: ${({ theme, error = false }) =>
    error ? theme.palette.error.main : theme.palette.text.secondary};
`;
