import styled from 'styled-components';

const Container = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  box-sizing: border-box;
  display: block;
  padding: 0 32px;

  @media screen and (max-width: ${props => props.theme.breakpoints.md}) {
    padding: 0 16px;
  }
`;

export default Container;
