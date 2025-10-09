/**
 * Qualia Design System - Spacing Tokens
 * Based on 8px grid system
 */

// Base spacing unit (8px)
const baseUnit = 8;

// Spacing scale
export const spacing = {
  0: '0px',
  1: `${baseUnit * 0.5}px`, // 4px
  2: `${baseUnit}px`,       // 8px  
  3: `${baseUnit * 1.5}px`, // 12px
  4: `${baseUnit * 2}px`,   // 16px
  5: `${baseUnit * 2.5}px`, // 20px
  6: `${baseUnit * 3}px`,   // 24px
  8: `${baseUnit * 4}px`,   // 32px
  10: `${baseUnit * 5}px`,  // 40px
  12: `${baseUnit * 6}px`,  // 48px
  16: `${baseUnit * 8}px`,  // 64px
  20: `${baseUnit * 10}px`, // 80px
  24: `${baseUnit * 12}px`, // 96px
  32: `${baseUnit * 16}px`, // 128px
};

// Semantic spacing
export const space = {
  none: spacing[0],
  xs: spacing[1],
  sm: spacing[2], 
  md: spacing[4],
  lg: spacing[6],
  xl: spacing[8],
  '2xl': spacing[10],
  '3xl': spacing[12]
};

export default spacing;