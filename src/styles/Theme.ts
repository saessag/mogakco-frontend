// https://www.codevertiser.com/styled-components-folder-structure/
// https://medium.com/@songforthemute/typescript-styled-components%EB%A5%BC-%EC%82%AC%EC%9A%A9%ED%95%A0-%EB%95%8C-%ED%83%80%EC%9E%85-%EC%A0%95%EC%9D%98%EB%A5%BC-%EC%9D%B8%EC%8B%9D%ED%95%98%EC%A7%80-%EB%AA%BB%ED%95%98%EB%8A%94-%EA%B2%BD%EC%9A%B0-37af2310a823
// https://1-blue.github.io/posts/styled-components/

import { breakpoints } from './BreakPoint';
import { palette } from './Palette';
import { spacing } from './Spacing';

/** 폰트 크기 */
const fontSize = {
  xs: '0.75rem',
  sm: '0.875rem',
  md: '1rem',
  lg: '1.125rem',
  xl: '1.25rem',
  '2xl': '1.5rem',
};

/** 그 외의 크기 */
const size = {
  xs: '0.2em',
  sm: '0.4em',
  md: '0.6em',
  lg: '1em',
  xl: '1.4em',
  '2xl': '1.6em',
};

const shape = {
  borderRadius: 4,
};

const theme = {
  breakpoints,
  palette,
  spacing,
  shape,
};

export default theme;

/** 타입 재정의를 위함 ( "styled-components" 변수 타입 추론을 위함( 자동완성 ) ) */
export type Theme = typeof theme;
