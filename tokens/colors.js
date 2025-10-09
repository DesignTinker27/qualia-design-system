/**
 * Qualia Design System - Color Tokens
 * Generated from Figma design system
 */

// Primary Brand Colors
export const primary = {
  50: '#f0f9ff',
  100: '#e0f2fe', 
  200: '#bae6fd',
  300: '#7dd3fc',
  400: '#38bdf8',
  500: '#0ea5e9', // Primary brand color
  600: '#0284c7',
  700: '#0369a1',
  800: '#075985',
  900: '#0c4a6e'
};

// Interactive Colors
export const interactive = {
  primaryHover: '#0284c7',
  primaryActive: '#0369a1',
  primaryDisabled: '#94a3b8',
  
  secondaryHover: '#f1f5f9', 
  secondaryActive: '#e2e8f0',
  secondaryDisabled: '#f8fafc',
  
  destructiveHover: '#dc2626',
  destructiveActive: '#b91c1c',
  destructiveDisabled: '#fca5a5'
};

// Neutral Colors
export const neutral = {
  50: '#f8fafc',
  100: '#f1f5f9',
  200: '#e2e8f0', 
  300: '#cbd5e1',
  400: '#94a3b8',
  500: '#64748b',
  600: '#475569',
  700: '#334155',
  800: '#1e293b',
  900: '#0f172a'
};

// Semantic Colors
export const semantic = {
  success: {
    50: '#f0fdf4',
    500: '#22c55e',
    700: '#15803d'
  },
  warning: {
    50: '#fffbeb', 
    500: '#f59e0b',
    700: '#a16207'
  },
  error: {
    50: '#fef2f2',
    500: '#ef4444', 
    700: '#b91c1c'
  },
  info: {
    50: '#f0f9ff',
    500: '#3b82f6',
    700: '#1d4ed8'
  }
};

// Text Colors
export const text = {
  primary: neutral[900],
  secondary: neutral[600], 
  tertiary: neutral[500],
  inverse: neutral[50],
  disabled: neutral[400],
  link: primary[600],
  linkHover: primary[700]
};

// Background Colors
export const background = {
  primary: neutral[50],
  secondary: neutral[100],
  tertiary: neutral[200], 
  inverse: neutral[900],
  overlay: 'rgba(15, 23, 42, 0.8)'
};

// Border Colors
export const border = {
  primary: neutral[200],
  secondary: neutral[300],
  focus: primary[500],
  error: semantic.error[500],
  success: semantic.success[500]
};

// Export all colors
export const colors = {
  primary,
  interactive,
  neutral,
  semantic, 
  text,
  background,
  border
};

export default colors;