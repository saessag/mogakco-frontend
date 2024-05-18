import { BreakPoints } from './BreakPoint';
import { Palette } from './Palette';

export type ColorProps = keyof Pick<
  Palette,
  'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success'
>;

export type BreakPointsProps = keyof BreakPoints;

export type SizeProps = 'small' | 'medium' | 'large';
