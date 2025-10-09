export const colors = {
  brand: {
    primary: "#0070f3",
    secondary: "#6c757d",
    accent: "#17a2b8",
  },
  interactive: {
    primary: {
      default: "var(--qualia-color-brand-primary)",
      hover: "#0056b3",
      pressed: "#004085",
      focus: "#0056b3",
      disabled: "#a0c8f9",
    },
    secondary: {
      default: "var(--qualia-color-brand-secondary)",
      hover: "#5a6268",
      pressed: "#494f54",
      focus: "#5a6268",
      disabled: "#c4c8cb",
    },
    destructive: {
      default: "#dc3545",
      hover: "#c82333",
      pressed: "#bd2130",
      focus: "#c82333",
      disabled: "#f2b1b6",
    },
    outline: {
      default: "transparent",
      hover: "rgba(0, 112, 243, 0.1)",
      pressed: "rgba(0, 112, 243, 0.2)",
      focus: "rgba(0, 112, 243, 0.1)",
      disabled: "transparent",
      border: {
        default: "var(--qualia-color-brand-primary)",
        hover: "var(--qualia-color-brand-primary)",
        pressed: "var(--qualia-color-brand-primary)",
        focus: "var(--qualia-color-brand-primary)",
        disabled: "#a0c8f9",
      },
    },
  },
  text: {
    default: "#212529",
    light: "#6c757d",
    inverted: "#ffffff",
    disabled: "#adb5bd",
  },
  background: {
    app: "#f8f9fa",
    component: "#ffffff",
    overlay: "rgba(0, 0, 0, 0.5)",
  },
  border: {
    default: "#dee2e6",
    light: "#e9ecef",
    dark: "#ced4da",
  },
};

export const semanticColors = {
  "--qualia-color-brand-primary": colors.brand.primary,
  "--qualia-color-brand-secondary": colors.brand.secondary,
  "--qualia-color-brand-accent": colors.brand.accent,

  "--qualia-color-interactive-primary-default": colors.interactive.primary.default,
  "--qualia-color-interactive-primary-hover": colors.interactive.primary.hover,
  "--qualia-color-interactive-primary-pressed": colors.interactive.primary.pressed,
  "--qualia-color-interactive-primary-focus": colors.interactive.primary.focus,
  "--qualia-color-interactive-primary-disabled": colors.interactive.primary.disabled,

  "--qualia-color-interactive-secondary-default": colors.interactive.secondary.default,
  "--qualia-color-interactive-secondary-hover": colors.interactive.secondary.hover,
  "--qualia-color-interactive-secondary-pressed": colors.interactive.secondary.pressed,
  "--qualia-color-interactive-secondary-focus": colors.interactive.secondary.focus,
  "--qualia-color-interactive-secondary-disabled": colors.interactive.secondary.disabled,

  "--qualia-color-interactive-destructive-default": colors.interactive.destructive.default,
  "--qualia-color-interactive-destructive-hover": colors.interactive.destructive.hover,
  "--qualia-color-interactive-destructive-pressed": colors.interactive.destructive.pressed,
  "--qualia-color-interactive-destructive-focus": colors.interactive.destructive.focus,
  "--qualia-color-interactive-destructive-disabled": colors.interactive.destructive.disabled,

  "--qualia-color-interactive-outline-default": colors.interactive.outline.default,
  "--qualia-color-interactive-outline-hover": colors.interactive.outline.hover,
  "--qualia-color-interactive-outline-pressed": colors.interactive.outline.pressed,
  "--qualia-color-interactive-outline-focus": colors.interactive.outline.focus,
  "--qualia-color-interactive-outline-disabled": colors.interactive.outline.disabled,
  "--qualia-color-interactive-outline-border-default": colors.interactive.outline.border.default,
  "--qualia-color-interactive-outline-border-hover": colors.interactive.outline.border.hover,
  "--qualia-color-interactive-outline-border-pressed": colors.interactive.outline.border.pressed,
  "--qualia-color-interactive-outline-border-focus": colors.interactive.outline.border.focus,
  "--qualia-color-interactive-outline-border-disabled": colors.interactive.outline.border.disabled,

  "--qualia-color-text-default": colors.text.default,
  "--qualia-color-text-light": colors.text.light,
  "--qualia-color-text-inverted": colors.text.inverted,
  "--qualia-color-text-disabled": colors.text.disabled,

  "--qualia-color-background-app": colors.background.app,
  "--qualia-color-background-component": colors.background.component,
  "--qualia-color-background-overlay": colors.background.overlay,

  "--qualia-color-border-default": colors.border.default,
  "--qualia-color-border-light": colors.border.light,
  "--qualia-color-border-dark": colors.border.dark,
};

export const generateColorStyles = () => {
  let styles = ':root {\n';
  for (const [key, value] of Object.entries(semanticColors)) {
    styles += `  ${key}: ${value};\n`;
  }
  styles += '}\n';
  return styles;
};
