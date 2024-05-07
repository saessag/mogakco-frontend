export interface BreakPoints {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  '2xl': string;
}

export const breakpoints: BreakPoints = {
  xs: '400px', // for small screen mobile
  sm: '640px', // for mobile screen
  md: '768px', // for tablets
  lg: '1024px', // for laptops
  xl: '1280px', // for desktop / monitors
  '2xl': '1536px', // for big screens
};
