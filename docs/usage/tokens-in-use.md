---
status: ready
---

# Usage Guidelines: Tokens in Use

This section provides practical guidance and best practices for applying our design tokens effectively across your designs and code. Consistent application of tokens is key to maintaining a cohesive and scalable Qualia Design System.

## Core Principles for Token Usage

1.  **Semantic over Literal:** Always prioritize using semantic tokens (e.g., `--qualia-color-interactive-primary-default`) over raw core tokens (e.g., `--qualia-color-brand-primary`) or hardcoded values. Semantic tokens provide context and flexibility for future changes or theming.
2.  **Consistency is King:** Strive for uniform application of tokens. If a standard spacing token exists for a particular context, use it everywhere that context applies.
3.  **Accessibility First:** Ensure that token choices contribute to accessible interfaces, particularly regarding color contrast for text and interactive elements. Our tokens are designed with accessibility in mind, but always validate your specific implementations.
4.  **Intent-Driven Naming:** Understand the intent behind each token's name. For example, `margin-bottom: var(--qualia-spacing-md);` clearly indicates medium vertical spacing, whereas `margin-bottom: 16px;` does not convey design intent.

## Applying Color Tokens

When applying colors, consider the element's role and state.

### Backgrounds

*   **App Background:** Use `--qualia-color-background-app` for the outermost container of your application.
*   **Component Backgrounds:** Use `--qualia-color-background-component` for cards, modals, dropdowns, and other distinct UI elements.

```css
.app-container {
  background-color: var(--qualia-color-background-app);
}

.card {
  background-color: var(--qualia-color-background-component);
  border: 1px solid var(--qualia-color-border-default);
}
```

### Text

*   **Default Text:** For most body copy, headings, and labels, use `--qualia-color-text-default`.
*   **Secondary Text:** For less prominent text, hints, or descriptions, use `--qualia-color-text-light`.
*   **Inverted Text:** When text appears on a dark background (e.g., a primary button), use `--qualia-color-text-inverted`.
*   **Disabled Text:** For non-interactive or unavailable text, use `--qualia-color-text-disabled`.

### Interactive Elements

*   **Buttons & Links:** Refer to the [Button Use Cases](button-use-cases.md) for detailed guidelines on interactive color states (default, hover, pressed, focus, disabled) for `primary`, `secondary`, `destructive`, and `outline` variants.

## Applying Spacing Tokens

Spacing tokens are essential for creating visual breathing room and organizing information.

### Padding

Use padding tokens to define the internal space within components, ensuring content isn't too close to the edges.

```css
.modal-content {
  padding: var(--qualia-spacing-lg);
}

.input-field {
  padding: var(--qualia-spacing-xs) var(--qualia-spacing-sm);
}
```

### Margins & Gaps

Use margin and gap tokens to define the external space between components or elements.

*   **Individual Elements:** Apply `margin` properties using tokens.
*   **Flexbox/Grid Gaps:** Utilize the `gap` property in CSS Grid or Flexbox for consistent spacing between items.

```css
.section-header {
  margin-bottom: var(--qualia-spacing-md);
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: var(--qualia-spacing-sm);
}

.button-cluster {
  display: flex;
  gap: var(--qualia-spacing-xs);
}
```

## Best Practices & Common Pitfalls

*   **Avoid Magic Numbers:** Never use arbitrary pixel values. Always find the nearest token value.
*   **Responsive Design:** Use tokens in conjunction with responsive techniques (e.g., media queries) to adapt spacing across different screen sizes. Our tokens remain consistent, but their application might change.
*   **Horizontal vs. Vertical Rhythm:** Ensure both horizontal and vertical spacing align with the token scale to create a balanced layout.
*   **Documenting Exceptions:** If a specific design requires a departure from the token system, document the reason clearly and consider if a new token is warranted.

By diligently applying these tokens, you'll contribute to a more maintainable, scalable, and visually harmonious Qualia product experience.