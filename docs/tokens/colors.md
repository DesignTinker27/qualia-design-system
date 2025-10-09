---
status: ready
---

# Design Tokens: Colors

Our color system is built to provide a robust and flexible palette for all Qualia products, ensuring brand consistency and accessibility.

## Color Categories

We categorize our colors to reflect their purpose and usage within the UI.

### 1. **Brand Colors**
These are the core colors that define the Qualia brand identity.

*   **Primary:** Used for primary actions, key brand elements, and prominent UI features.
    *   `--qualia-color-brand-primary`: `#0070f3` (Blue)
*   **Secondary:** Used for secondary actions, less prominent UI elements, and complementary accents.
    *   `--qualia-color-brand-secondary`: `#6c757d` (Gray)
*   **Accent:** Used for highlighting, notifications, and areas requiring visual emphasis.
    *   `--qualia-color-brand-accent`: `#17a2b8` (Teal)

### 2. **Interactive Colors**
These colors are used for interactive elements like buttons, links, and form controls, and are defined with different states (default, hover, pressed, focus, disabled).

#### **Primary Interactive**
Used for high-emphasis actions.

*   `--qualia-color-interactive-primary-default`: `#0070f3`
*   `--qualia-color-interactive-primary-hover`: `#0056b3`
*   `--qualia-color-interactive-primary-pressed`: `#004085`
*   `--qualia-color-interactive-primary-focus`: `#0056b3`
*   `--qualia-color-interactive-primary-disabled`: `#a0c8f9`

#### **Secondary Interactive**
Used for medium-emphasis actions.

*   `--qualia-color-interactive-secondary-default`: `#6c757d`
*   `--qualia-color-interactive-secondary-hover`: `#5a6268`
*   `--qualia-color-interactive-secondary-pressed`: `#494f54`
*   `--qualia-color-interactive-secondary-focus`: `#5a6268`
*   `--qualia-color-interactive-secondary-disabled`: `#c4c8cb`

#### **Destructive Interactive**
Used for actions with potentially negative consequences (e.g., delete).

*   `--qualia-color-interactive-destructive-default`: `#dc3545`
*   `--qualia-color-interactive-destructive-hover`: `#c82333`
*   `--qualia-color-interactive-destructive-pressed`: `#bd2130`
*   `--qualia-color-interactive-destructive-focus`: `#c82333`
*   `--qualia-color-interactive-destructive-disabled`: `#f2b1b6`

#### **Outline Interactive**
Used for low-emphasis actions, typically with a border.

*   `--qualia-color-interactive-outline-default`: `transparent`
*   `--qualia-color-interactive-outline-hover`: `rgba(0, 112, 243, 0.1)`
*   `--qualia-color-interactive-outline-pressed`: `rgba(0, 112, 243, 0.2)`
*   `--qualia-color-interactive-outline-focus`: `rgba(0, 112, 243, 0.1)`
*   `--qualia-color-interactive-outline-disabled`: `transparent`
*   `--qualia-color-interactive-outline-border-default`: `#0070f3`
*   `--qualia-color-interactive-outline-border-hover`: `#0070f3`
*   `--qualia-color-interactive-outline-border-pressed`: `#0070f3`
*   `--qualia-color-interactive-outline-border-focus`: `#0070f3`
*   `--qualia-color-interactive-outline-border-disabled`: `#a0c8f9`

### 3. **Text Colors**
For various text elements in the UI.

*   `--qualia-color-text-default`: `#212529` (Dark text for most content)
*   `--qualia-color-text-light`: `#6c757d` (Lighter text for secondary information)
*   `--qualia-color-text-inverted`: `#ffffff` (White text, typically on dark backgrounds)
*   `--qualia-color-text-disabled`: `#adb5bd` (For disabled text fields or elements)

### 4. **Background Colors**
For application backgrounds, component containers, and overlays.

*   `--qualia-color-background-app`: `#f8f9fa` (Overall application background)
*   `--qualia-color-background-component`: `#ffffff` (Background for cards, modals, etc.)
*   `--qualia-color-background-overlay`: `rgba(0, 0, 0, 0.5)` (For modal backdrops, tooltips)

### 5. **Border Colors**
For outlines, separators, and subtle distinctions.

*   `--qualia-color-border-default`: `#dee2e6` (Standard border color)
*   `--qualia-color-border-light`: `#e9ecef` (Lighter border for subtle divisions)
*   `--qualia-color-border-dark`: `#ced4da` (Darker border for emphasis)

## Usage Guidelines

*   **Always use color tokens:** Never hardcode color values (hex, rgba, etc.) directly in your CSS or components.
*   **Prioritize semantic tokens:** Use `var(--qualia-color-interactive-primary-default)` instead of `var(--qualia-color-brand-primary)` for interactive elements to ensure future flexibility.
*   **Accessibility:** Ensure sufficient contrast ratios for all text and interactive elements. Our tokens are designed with accessibility in mind, but always double-check against WCAG guidelines, especially for custom usage.
*   **Intent over literal value:** Think about the *purpose* of the color, not just its visual appearance.

## Examples

```css
/* Correct usage */
.card-header {
  background-color: var(--qualia-color-background-component);
  border-bottom: 1px solid var(--qualia-color-border-light);
}

.primary-button {
  background-color: var(--qualia-color-interactive-primary-default);
  color: var(--qualia-color-text-inverted);
}

/* Incorrect usage (hardcoded values) */
.bad-button {
  background-color: #0070f3; /* Don't do this! */
  color: white;
}
```
