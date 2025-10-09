export const spacing = {
  none: "0",
  xxs: "4px",
  xs: "8px",
  sm: "12px",
  md: "16px",
  lg: "24px",
  xl: "32px",
  xxl: "48px",
  xxxl: "64px",
};

export const semanticSpacing = {
  "--qualia-spacing-none": spacing.none,
  "--qualia-spacing-xxs": spacing.xxs,
  "--qualia-spacing-xs": spacing.xs,
  "--qualia-spacing-sm": spacing.sm,
  "--qualia-spacing-md": spacing.md,
  "--qualia-spacing-lg": spacing.lg,
  "--qualia-spacing-xl": spacing.xl,
  "--qualia-spacing-xxl": spacing.xxl,
  "--qualia-spacing-xxxl": spacing.xxxl,
};

export const generateSpacingStyles = () => {
  let styles = '';
  for (const [key, value] of Object.entries(semanticSpacing)) {
    styles += `  ${key}: ${value};\n`;
  }
  return styles;
};
