---
status: ready
---

# Design Tokens: Overview

Design tokens are the visual atoms of our design system. They represent the foundational styling properties (colors, spacing, typography, etc.) that define the Qualia brand and ensure consistency across all products.

## Why Use Design Tokens?

*   **Consistency:** A single source of truth for all design values, reducing discrepancies between designs and code.
*   **Efficiency:** Faster design and development cycles by abstracting complex values into simple, reusable variables.
*   **Scalability:** Easily update and extend the design system across multiple platforms and products.
*   **Maintainability:** Centralized management of styles makes global changes straightforward and less error-prone.
*   **Theming:** Facilitates the creation of different themes (e.g., light/dark mode) or brand variations by simply updating token values.

## Types of Tokens

Our design tokens are categorized to provide a clear hierarchy and intent:

### 1. **Core Tokens (Foundational)**
These are the raw, immutable values representing our brand's basic visual properties. They are framework-agnostic and serve as the base for all other tokens.

*   **Colors:** Hex, RGBA, or HSL values for our brand palette, semantic colors (e.g., `--qualia-color-brand-primary`), and interactive states.
*   **Spacing:** Pixel or rem values for consistent margins, padding, and gaps (e.g., `--qualia-spacing-md`).
*   **Typography:** Font families, sizes, weights, and line heights.
*   **Border Radii:** Values for rounded corners.
*   **Shadows:** Definitions for elevation and depth.

### 2. **Semantic Tokens (Alias/Purpose-Driven)**
These tokens provide context and meaning. They reference core tokens and describe their intended use within the UI, rather than their literal value. This allows for easier theming and ensures consistency in specific contexts.

*   `--qualia-color-background-app`: Maps to a core color, but communicates its purpose as the primary application background.
*   `--qualia-color-interactive-primary-default`: Maps to a core color, indicating the default state of a primary interactive element.
*   `--qualia-spacing-component-gap`: References a core spacing token, explicitly for spacing between components.

### 3. **Component-Specific Tokens**
These tokens are used for specific components and can override or extend semantic tokens for fine-grained control. They should be used sparingly and only when a component has unique styling requirements not covered by global semantic tokens.

*   `--qualia-button-primary-background-color`: Could reference `--qualia-color-interactive-primary-default`.

## How to Use Tokens

### In Figma
Designers should use styles and variables that are linked to our design tokens. This ensures that designs are always working with the approved, codified values.

### In Code (CSS/SCSS)
Engineers will consume tokens as CSS custom properties (variables). This makes them easily accessible and dynamic.

```css
.my-component {
  background-color: var(--qualia-color-background-component);
  padding: var(--qualia-spacing-md);
  color: var(--qualia-color-text-default);
}

.my-button {
  background-color: var(--qualia-color-interactive-primary-default);
  color: var(--qualia-color-text-inverted);
}
```

### In Code (JavaScript/React)
For programmatic access, tokens can be imported directly from our token utility files.

```jsx
import { tokens } from '@qualia/design-system/tokens';

function MyComponent() {
  const backgroundColor = tokens.colors.background.component;
  const spacingMd = tokens.spacing.md;

  return (
    <div style={{ backgroundColor, padding: spacingMd }}>
      {/* ... */}
    </div>
  );
}
```

## Getting Started with Tokens

Refer to the [Colors](colors.md) and [Spacing](spacing.md) documentation for detailed information and examples of each token category.
