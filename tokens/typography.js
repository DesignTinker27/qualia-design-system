/**
 * Qualia Design System - Typography Tokens
 */

// Font families
export const fontFamily = {
  sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
  mono: ['Monaco', 'Menlo', 'monospace']
};

// Font sizes
export const fontSize = {
  xs: '0.75rem',    // 12px
  sm: '0.875rem',   // 14px 
  base: '1rem',     // 16px
  lg: '1.125rem',   // 18px
  xl: '1.25rem',    // 20px
  '2xl': '1.5rem',  // 24px
  '3xl': '1.875rem', // 30px
  '4xl': '2.25rem',  // 36px
  '5xl': '3rem'     // 48px
};

// Font weights
export const fontWeight = {
  light: 300,
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700
};

// Line heights
export const lineHeight = {
  tight: 1.2,
  normal: 1.5,
  relaxed: 1.75
};

// Letter spacing
export const letterSpacing = {
  tight: '-0.025em',
  normal: '0em', 
  wide: '0.025em'
};

export const typography = {
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight,
  letterSpacing
};

export default typography;