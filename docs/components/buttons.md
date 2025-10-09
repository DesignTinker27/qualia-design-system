---
status: ready
---

# Button Component

Buttons are used to trigger actions and navigate through the Qualia application. They are crucial for user interaction and play a key role in guiding users through workflows.

## When to Use

*   To initiate an immediate action (e.g., "Submit," "Save," "Delete").
*   To navigate to a different section or page (e.g., "View Details," "Back").
*   To confirm or cancel a decision (e.g., "Confirm," "Cancel").

## When Not to Use

*   For purely decorative purposes.
*   When a link (`<a>`) element is more semantically appropriate for navigation without an immediate action.
*   When another component (e.g., a checkbox, radio button) serves the purpose better.

## Variants

Buttons come in several variants to indicate different levels of emphasis and types of actions.

### Primary Button

*   **Purpose:** The most prominent action on a screen. Use for the single, most important action.
*   **Appearance:** Solid fill with brand primary color.
*   **Example:** "Save Changes," "Create New Project," "Sign In."

### Secondary Button

*   **Purpose:** For actions that are important but not the primary focus. Often used in conjunction with a primary button.
*   **Appearance:** Solid fill with secondary brand color.
*   **Example:** "Cancel," "Back," "Learn More."

### Destructive Button

*   **Purpose:** For actions that result in permanent deletion or irreversible changes.
*   **Appearance:** Solid fill with a red/danger color.
*   **Example:** "Delete Account," "Remove Item."

### Outline Button

*   **Purpose:** For low-emphasis actions or to provide an alternative without drawing too much attention. Often used with text links.
*   **Appearance:** Transparent background with a primary color border.
*   **Example:** "Skip," "Edit (when not primary action).

## Sizes

Buttons are available in three sizes: small, medium, and large.

*   **Small:** `qds-button--small` - For dense interfaces or minor actions.
*   **Medium:** `qds-button--medium` - The default size for most use cases.
*   **Large:** `qds-button--large` - For calls to action that require more emphasis.

## States

Buttons have various interactive states to provide visual feedback to users.

*   **Default:** The initial appearance of the button.
*   **Hover:** When the user's pointer is over the button.
*   **Pressed:** When the user clicks or taps the button.
*   **Focus:** When the button is tab-focused (important for accessibility).
*   **Disabled:** When the button is not interactive.

## Accessibility (A11y)

*   **Semantic HTML:** Always use a `<button>` element. If navigating, use a `<a>` styled as a button.
*   **Keyboard Navigation:** Ensure buttons are reachable and actionable via keyboard (Tab, Enter, Space).
*   **Focus States:** Clear visual focus indicators are provided by default.
*   **ARIA Attributes:** Automatically includes `aria-disabled` when `disabled` prop is `true`.
*   **Contrast:** All button variants meet WCAG AA contrast ratio requirements for text and background.

## Examples

Below are live examples of the button component with different variants and states.

```html
<div id="button-demo-root"></div>
<script type="module">
  import React from 'https://cdn.skypack.dev/react@17';
  import ReactDOM from 'https://cdn.skypack.dev/react-dom@17';
  import ButtonDemo from './components/Button/ButtonDemo.jsx';

  ReactDOM.render(
    React.createElement(ButtonDemo, null),
    document.getElementById('button-demo-root')
  );
</script>
```

[//]: # (This is where the live demo will be embedded by the docs site generator if it supports it)

---

### **Primary Button Examples**

```jsx live
<div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
  <Button variant="primary" size="small">Small Primary</Button>
  <Button variant="primary" size="medium">Medium Primary</Button>
  <Button variant="primary" size="large">Large Primary</Button>
  <Button variant="primary" disabled>Disabled Primary</Button>
</div>
```

### **Secondary Button Examples**

```jsx live
<div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
  <Button variant="secondary" size="small">Small Secondary</Button>
  <Button variant="secondary" size="medium">Medium Secondary</Button>
  <Button variant="secondary" size="large">Large Secondary</Button>
  <Button variant="secondary" disabled>Disabled Secondary</Button>
</div>
```

### **Destructive Button Examples**

```jsx live
<div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
  <Button variant="destructive" size="small">Small Destructive</Button>
  <Button variant="destructive" size="medium">Medium Destructive</Button>
  <Button variant="destructive" size="large">Large Destructive</Button>
  <Button variant="destructive" disabled>Disabled Destructive</Button>
</div>
```

### **Outline Button Examples**

```jsx live
<div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
  <Button variant="outline" size="small">Small Outline</Button>
  <Button variant="outline" size="medium">Medium Outline</Button>
  <Button variant="outline" size="large">Large Outline</Button>
  <Button variant="outline" disabled>Disabled Outline</Button>
</div>
```

## Layout Examples

### Hug Content vs. Fill Container

Buttons are designed to `hug-content` by default, meaning their width adjusts to the text and iconography within them plus padding.

```jsx live
<div style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '200px', border: '1px dashed #ccc', padding: '10px' }}>
  <p>Hug content:</p>
  <Button variant="primary" size="medium">Short Text</Button>
  <Button variant="primary" size="medium">A Button with Longer Text</Button>
</div>
```

To make a button `fill-container` (expand to 100% of its parent's width), you can apply a CSS utility class or style directly. This is common for primary actions in modals or forms.

```jsx live
<div style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '300px', border: '1px dashed #ccc', padding: '10px' }}>
  <p>Fill container:</p>
  <Button variant="primary" size="medium" style={{ width: '100%' }}>Full Width Button</Button>
  <Button variant="secondary" size="medium" style={{ width: '100%' }}>Another Full Width</Button>
</div>
```

When designing, consider the context: if a button is part of a form with other full-width inputs, `fill-container` might be appropriate. For a group of actions, `hug-content` is usually preferred.
