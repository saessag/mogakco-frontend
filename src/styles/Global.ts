import { createGlobalStyle } from 'styled-components';

// https://github.com/zacanger/styled-reset/blob/master/src/index.ts
import reset from 'styled-reset';

/**
 * Prettier is looking for the styled identifier.
 * 프리티어의 포맷팅 사용을 위해 사용
 * https://github.com/prettier/prettier/issues/11196
 */
const styled = { createGlobalStyle };

const GlobalStyle = styled.createGlobalStyle`
  ${reset}
  /* 아래에 추가적으로 적용할 전역 스타일 작성 */
  *, *::before, *::after {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  body,
  button,
  h1,
  h2,
  h3,
  h4,
  h5,
  input,
  select,
  table,
  textarea {
    font-family: 'Pretendard Variable', Pretendard, -apple-system,
      BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI',
      'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic',
      'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5em;
  }

  input {
    margin: 0;
    padding: 0;
    border: 0;
    outline: none;
  }

  button {
    cursor: pointer;
  }
`;

export default GlobalStyle;
