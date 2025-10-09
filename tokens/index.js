import { generateColorStyles, semanticColors } from './colors';
import { generateSpacingStyles, semanticSpacing } from './spacing';

export const tokens = {
  colors: semanticColors,
  spacing: semanticSpacing,
};

export const generateGlobalStyles = () => {
  return `:root {\n${generateColorStyles()}${generateSpacingStyles()}}`;
};
