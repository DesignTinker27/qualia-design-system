---
status: ready
---

# Design Tokens: Spacing

Our spacing system provides a consistent rhythm and visual hierarchy across all Qualia products. It ensures predictable distances between elements, improving readability and perceived organization.

## Spacing Scale

We use a fixed, incremental scale for all spacing values, defined in pixels and exposed as CSS custom properties (variables).

| Token Name              | Value  | Description                                 | Example Visualization       |
| :---------------------- | :----- | :------------------------------------------ | :-------------------------- |
| `--qualia-spacing-none` | `0`    | No spacing.                                 |                             |
| `--qualia-spacing-xxs`  | `4px`  | Extra-extra small spacing.                  | ![][spacing-xxs]            |
| `--qualia-spacing-xs`   | `8px`  | Extra small spacing.                        | ![][spacing-xs]             |
| `--qualia-spacing-sm`   | `12px` | Small spacing.                              | ![][spacing-sm]             |
| `--qualia-spacing-md`   | `16px` | Medium spacing.                             | ![][spacing-md]             |
| `--qualia-spacing-lg`   | `24px` | Large spacing.                              | ![][spacing-lg]             |
| `--qualia-spacing-xl`   | `32px` | Extra large spacing.                        | ![][spacing-xl]             |
| `--qualia-spacing-xxl`  | `48px` | Extra-extra large spacing.                  | ![][spacing-xxl]            |
| `--qualia-spacing-xxxl` | `64px` | Extra-extra-extra large spacing.            | ![][spacing-xxxl]           |

## Usage Guidelines

*   **Always use spacing tokens:** Never hardcode pixel or `rem` values for margins, padding, or gaps directly in your CSS or components.
*   **Vertical vs. Horizontal:** Apply consistent spacing both vertically and horizontally.
*   **Container Padding:** Use spacing tokens to define internal padding for components and sections.
*   **Element Gaps:** Use spacing tokens for consistent gaps between sibling elements, especially within flexbox or grid containers.
*   **Hierarchy:** Larger spacing values generally indicate greater separation between logical groups of content, while smaller values are for elements within a group.

## Examples

```css
/* Correct usage for padding */
.card {
  padding: var(--qualia-spacing-lg) var(--qualia-spacing-md);
}

/* Correct usage for margins/gaps */
.form-field {
  margin-bottom: var(--qualia-spacing-sm);
}

.button-group {
  display: flex;
  gap: var(--qualia-spacing-xs);
}

/* Incorrect usage (hardcoded values) */
.bad-div {
  margin-top: 20px; /* Don't do this! */
  padding: 10px;    /* Don't do this! */
}
```

## Visualizing Spacing

To help visualize the spacing scale, consider the following:

---

### `--qualia-spacing-xxs` (4px)

![Spacing XXS](https://via.placeholder.com/100x4/cccccc?text=4px)

---

### `--qualia-spacing-xs` (8px)

![Spacing XS](https://via.placeholder.com/100x8/bbbbbb?text=8px)

---

### `--qualia-spacing-sm` (12px)

![Spacing SM](https://via.placeholder.com/100x12/aaaaaa?text=12px)

---

### `--qualia-spacing-md` (16px)

![Spacing MD](https://via.placeholder.com/100x16/999999?text=16px)

---

### `--qualia-spacing-lg` (24px)

![Spacing LG](https://via.placeholder.com/100x24/888888?text=24px)

---

### `--qualia-spacing-xl` (32px)

![Spacing XL](https://via.placeholder.com/100x32/777777?text=32px)

---

### `--qualia-spacing-xxl` (48px)

![Spacing XXL](https://via.placeholder.com/100x48/666666?text=48px)

---

### `--qualia-spacing-xxxl` (64px)

![Spacing XXXL](https://via.placeholder.com/100x64/555555?text=64px)

[spacing-xxs]: https://via.placeholder.com/100x4/cccccc?text=4px
[spacing-xs]: https://via.placeholder.com/100x8/bbbbbb?text=8px
[spacing-sm]: https://via.placeholder.com/100x12/aaaaaa?text=12px
[spacing-md]: https://via.placeholder.com/100x16/999999?text=16px
[spacing-lg]: https://via.placeholder.com/100x24/888888?text=24px
[spacing-xl]: https://via.placeholder.com/100x32/777777?text=32px
[spacing-xxl]: https://via.placeholder.com/100x48/666666?text=48px
[spacing-xxxl]: https://via.placeholder.com/100x64/555555?text=64px
