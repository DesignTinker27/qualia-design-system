/**
 * Qualia Design System - Design Tokens
 * Central export for all design tokens
 */

export { colors, primary, interactive, neutral, semantic, text, background, border } from './colors.js';
export { spacing, space } from './spacing.js';
export { radius } from './radius.js';
export { typography, fontFamily, fontSize, fontWeight, lineHeight, letterSpacing } from './typography.js';

// Combined tokens object
export const tokens = {
  colors: await import('./colors.js'),
  spacing: await import('./spacing.js'), 
  radius: await import('./radius.js'),
  typography: await import('./typography.js')
};

export default tokens;