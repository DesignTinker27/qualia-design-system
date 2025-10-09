# Button Component Usage Guidelines

> **Complete guide for implementing and using Qualia Design System buttons effectively**

---

## 🎯 Overview

Buttons are fundamental interactive elements that enable users to trigger actions, submit forms, and navigate through applications. The Qualia Button component provides consistent styling, behavior, and accessibility across all Qualia products.

### ✅ Key Benefits
- **Consistent Experience**: Same look and behavior across all applications
- **Accessibility First**: WCAG AA compliant with keyboard and screen reader support
- **Token-Based**: Built with design system tokens for easy theming
- **Developer Friendly**: Simple API with TypeScript support
- **Performance Optimized**: Minimal bundle impact with tree shaking

---

## 🔘 Button Variants

### Primary Button
**Use for**: Main actions, primary CTAs, form submissions

```jsx
<Button variant="primary" size="medium">
  Save Changes
</Button>
```

#### Guidelines
- ✅ **Limit to 1 per screen section** - maintains clear hierarchy
- ✅ **Use for most important action** - "Save", "Submit", "Sign Up"
- ✅ **Place prominently** - users should easily find it
- ❌ **Don't use for destructive actions** - use destructive variant instead
- ❌ **Don't overuse** - too many primary buttons create confusion

#### Visual Examples
```jsx
// ✅ Good - Clear primary action
<div>
  <Button variant="secondary">Cancel</Button>
  <Button variant="primary">Save Changes</Button>
</div>

// ❌ Bad - Multiple primary buttons
<div>
  <Button variant="primary">Save Draft</Button>
  <Button variant="primary">Publish Now</Button>
</div>
```

### Secondary Button
**Use for**: Supporting actions, cancel buttons, alternative options

```jsx
<Button variant="secondary" size="medium">
  Cancel
</Button>
```

#### Guidelines
- ✅ **Use for secondary actions** - "Cancel", "Back", "Skip"
- ✅ **Pair with primary buttons** - creates clear action hierarchy
- ✅ **Safe for multiple usage** - won't compete with primary actions
- ❌ **Don't use alone** - when it's the only action, consider primary

### Outline Button
**Use for**: Subtle actions, tertiary options, less prominent CTAs

```jsx
<Button variant="outline" size="medium">
  Learn More
</Button>
```

#### Guidelines
- ✅ **Use for subtle actions** - "Learn More", "View Details", "See All"
- ✅ **Good for cards and lists** - less visual weight than solid buttons
- ✅ **Accessible alternative** - maintains interaction affordance
- ❌ **Avoid in forms** - prefer primary/secondary for form actions

### Destructive Button
**Use for**: Dangerous actions, deletion, irreversible operations

```jsx
<Button variant="destructive" size="medium">
  Delete Account
</Button>
```

#### Guidelines
- ✅ **Use for dangerous actions** - "Delete", "Remove", "Reset"
- ✅ **Require confirmation** - always confirm destructive actions
- ✅ **Use sparingly** - only for truly destructive operations
- ❌ **Don't use for regular actions** - reserve for actual danger

---

## 📏 Button Sizes

### Small Buttons
**Height**: 32px | **Use for**: Compact spaces, secondary actions

```jsx
<Button variant="primary" size="small">
  Edit
</Button>
```

#### When to Use
- **Table row actions** - Edit, Delete, View buttons
- **Card actions** - Quick actions within cards
- **Toolbar buttons** - Secondary toolbar functions
- **Mobile interfaces** - Space-constrained layouts

### Medium Buttons (Default)
**Height**: 40px | **Use for**: Standard interface actions

```jsx
<Button variant="primary" size="medium">
  Save Changes
</Button>
```

#### When to Use
- **Form buttons** - Submit, Cancel, Next, Previous
- **Modal actions** - Confirm, Close, Apply
- **Standard interactions** - Most common button usage

### Large Buttons
**Height**: 48px | **Use for**: Prominent CTAs, hero sections

```jsx
<Button variant="primary" size="large">
  Get Started Today
</Button>
```

#### When to Use
- **Hero CTAs** - "Sign Up", "Get Started", "Learn More"
- **Mobile touch targets** - Easier interaction on touch devices
- **Prominent actions** - When you need extra visual weight
- **Marketing pages** - Landing page primary actions

---

## 🎭 Button States

### Default State
Normal, ready-to-interact appearance.

```jsx
<Button variant="primary">
  Click Me
</Button>
```

### Hover State
Visual feedback when user hovers (automatic).

- **Color change** - Slightly darker background
- **Elevation** - Subtle shadow increase
- **Transform** - Small upward movement (-1px)

### Active State
Visual feedback during click/touch (automatic).

- **Color change** - Even darker background
- **Transform** - Returns to baseline position
- **Shadow** - Reduced shadow for "pressed" feel

### Focus State
Keyboard navigation indicator (automatic).

- **Outline** - 2px focus ring in primary color
- **Offset** - 2px gap between button and outline
- **High contrast** - Visible in high contrast mode

### Disabled State
**Use for**: Inactive buttons, form validation

```jsx
<Button variant="primary" disabled>
  Disabled Button
</Button>
```

#### Implementation
```jsx
// Form validation example
<Button 
  variant="primary" 
  disabled={!isFormValid}
  onClick={handleSubmit}
>
  {isFormValid ? 'Submit Form' : 'Complete Required Fields'}
</Button>
```

### Loading State
**Use for**: Async operations, API calls

```jsx
<Button variant="primary" loading={isSubmitting}>
  {isSubmitting ? 'Saving...' : 'Save Changes'}
</Button>
```

#### Best Practices
- ✅ **Update button text** - "Saving...", "Loading...", "Processing..."
- ✅ **Disable interaction** - Prevent double submissions
- ✅ **Show progress** - Loading spinner provides feedback
- ❌ **Don't use for instant actions** - Reserve for operations >500ms

---

## 🎨 Button Layouts

### Full Width
**Use for**: Mobile forms, prominent actions

```jsx
<Button variant="primary" fullWidth>
  Create Account
</Button>
```

#### When to Use
- **Mobile forms** - Easier touch interaction
- **Modal actions** - Full-width confirm buttons
- **Single action contexts** - When button is the only action

### Button Groups
**Use for**: Related actions, form controls

```jsx
// Horizontal group
<div style={{ display: 'flex', gap: '12px' }}>
  <Button variant="secondary">Cancel</Button>
  <Button variant="primary">Save Changes</Button>
</div>

// Vertical group (mobile)
<div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
  <Button variant="primary" fullWidth>Primary Action</Button>
  <Button variant="secondary" fullWidth>Secondary Action</Button>
</div>
```

#### Guidelines
- ✅ **Primary on right** - In horizontal layouts (Western reading)
- ✅ **Primary on top** - In vertical layouts (mobile)
- ✅ **Consistent spacing** - Use 12px gap for horizontal, 8px for vertical
- ✅ **Logical order** - Destructive actions furthest from primary

---

## ♿ Accessibility Guidelines

### Keyboard Navigation
```jsx
// Automatic keyboard support
<Button 
  variant="primary"
  onClick={handleClick}
  onKeyDown={(e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      handleClick();
    }
  }}
>
  Accessible Button
</Button>
```

### Screen Reader Support
```jsx
// Descriptive labels
<Button 
  variant="destructive"
  aria-label="Delete user account permanently"
>
  Delete
</Button>

// Loading state announcements
<Button 
  variant="primary"
  loading={isSubmitting}
  aria-label={isSubmitting ? 'Saving changes, please wait' : 'Save changes'}
>
  {isSubmitting ? 'Saving...' : 'Save'}
</Button>
```

### Focus Management
```jsx
// Auto-focus after modal opens
const Modal = ({ isOpen }) => {
  const firstButtonRef = useRef();
  
  useEffect(() => {
    if (isOpen) {
      firstButtonRef.current?.focus();
    }
  }, [isOpen]);
  
  return (
    <div>
      <Button ref={firstButtonRef} variant="primary">
        Primary Action
      </Button>
    </div>
  );
};
```

---

## 📱 Responsive Design

### Mobile Considerations
```jsx
// Responsive button sizing
const ResponsiveButton = () => {
  const [isMobile, setIsMobile] = useState(false);
  
  return (
    <Button 
      variant="primary"
      size={isMobile ? "large" : "medium"}
      fullWidth={isMobile}
    >
      Responsive Action
    </Button>
  );
};
```

### Touch Targets
- **Minimum 44px height** - Follow iOS/Android guidelines
- **Adequate spacing** - 8px minimum between touch targets
- **Full-width on mobile** - Easier interaction on small screens

---

## 🎯 Common Use Cases

### Form Actions
```jsx
// Standard form buttons
const FormActions = ({ onSubmit, onCancel, isSubmitting, isValid }) => (
  <div className="form-actions">
    <Button 
      variant="secondary" 
      onClick={onCancel}
      disabled={isSubmitting}
    >
      Cancel
    </Button>
    <Button 
      variant="primary"
      onClick={onSubmit}
      loading={isSubmitting}
      disabled={!isValid || isSubmitting}
    >
      {isSubmitting ? 'Saving...' : 'Save Changes'}
    </Button>
  </div>
);
```

### Modal Actions
```jsx
// Modal confirmation
const ConfirmModal = ({ onConfirm, onCancel, isLoading }) => (
  <div className="modal-actions">
    <Button variant="secondary" onClick={onCancel}>
      Cancel
    </Button>
    <Button 
      variant="destructive"
      onClick={onConfirm}
      loading={isLoading}
    >
      {isLoading ? 'Deleting...' : 'Delete Item'}
    </Button>
  </div>
);
```

### Navigation Actions
```jsx
// Pagination controls
const Pagination = ({ onPrevious, onNext, canGoPrevious, canGoNext }) => (
  <div className="pagination">
    <Button 
      variant="outline"
      onClick={onPrevious}
      disabled={!canGoPrevious}
    >
      Previous
    </Button>
    <Button 
      variant="outline"
      onClick={onNext}
      disabled={!canGoNext}
    >
      Next
    </Button>
  </div>
);
```

### Card Actions
```jsx
// Card with actions
const ActionCard = ({ item, onEdit, onDelete }) => (
  <div className="card">
    <h3>{item.title}</h3>
    <p>{item.description}</p>
    <div className="card-actions">
      <Button variant="outline" size="small" onClick={() => onEdit(item.id)}>
        Edit
      </Button>
      <Button variant="destructive" size="small" onClick={() => onDelete(item.id)}>
        Delete
      </Button>
    </div>
  </div>
);
```

---

## 🔄 Migration from Semantic UI

### Basic Migration
```jsx
// ❌ Before (Semantic UI)
<Button primary size="large" loading={loading}>
  Submit
</Button>

// ✅ After (Qualia Design System)
<Button variant="primary" size="large" loading={loading}>
  Submit
</Button>
```

### Complete Migration Map

| Semantic UI | Qualia Design System |
|-------------|---------------------|
| `primary` | `variant="primary"` |
| `secondary` | `variant="secondary"` |
| `basic` | `variant="outline"` |
| `negative` | `variant="destructive"` |
| `size="mini"` | `size="small"` |
| `size="medium"` | `size="medium"` |
| `size="big"` | `size="large"` |
| `fluid` | `fullWidth` |
| `loading` | `loading` |
| `disabled` | `disabled` |

---

## ✅ Best Practices

### DO ✅
- **Use semantic variants** - Choose based on action importance
- **Provide loading states** - For any async operations
- **Write descriptive labels** - "Save Changes" vs "Save"
- **Test keyboard navigation** - Ensure Tab/Enter/Space work
- **Consider mobile users** - Use appropriate sizes and spacing
- **Group related actions** - Keep related buttons together
- **Maintain hierarchy** - Primary → Secondary → Outline → Destructive

### DON'T ❌
- **Don't overuse primary** - Limit to 1 per section
- **Don't use tiny buttons** - Minimum 32px height
- **Don't skip loading states** - Always provide feedback
- **Don't use vague labels** - "Click here" vs "Download Report"
- **Don't ignore accessibility** - Test with keyboard and screen readers
- **Don't mix button styles** - Stay consistent within contexts

---

## 🧪 Testing Checklist

### Visual Testing
- [ ] **All variants render correctly** - Primary, Secondary, Outline, Destructive
- [ ] **All sizes display properly** - Small, Medium, Large
- [ ] **States work as expected** - Hover, Active, Focus, Disabled, Loading
- [ ] **Responsive behavior** - Mobile and desktop layouts

### Interaction Testing
- [ ] **Click/tap triggers action** - Mouse and touch interaction
- [ ] **Keyboard navigation works** - Tab, Enter, Space keys
- [ ] **Loading state prevents double-clicks** - Disabled during loading
- [ ] **Focus indicators visible** - Clear focus outline

### Accessibility Testing
- [ ] **Screen reader announces correctly** - Button role and label
- [ ] **Color contrast meets WCAG AA** - 4.5:1 minimum ratio
- [ ] **High contrast mode supported** - Visible in Windows high contrast
- [ ] **Reduced motion respected** - No animation if user prefers

---

## 📚 Resources

- [Button Component API Documentation](../src/components/Button/)
- [WCAG Button Guidelines](https://www.w3.org/WAI/ARIA/apg/patterns/button/)
- [Material Design Button Specs](https://material.io/components/buttons)
- [iOS Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/buttons)

---

*These guidelines ensure consistent, accessible, and effective button implementations across all Qualia products.*