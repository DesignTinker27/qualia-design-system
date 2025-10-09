# Design Tokens Usage Guidelines

> **Comprehensive guide for using Qualia Design System tokens in your applications**

---

## 🎯 Overview

Design tokens are the foundational building blocks of the Qualia Design System. They ensure consistency, maintainability, and scalability across all Qualia products while providing a single source of truth for design decisions.

### ✅ Benefits of Using Tokens
- **Consistency**: Visual harmony across all products
- **Maintainability**: Update values in one place, reflect everywhere
- **Scalability**: Easy to extend and modify as the system grows
- **Developer Experience**: Semantic names improve code readability
- **Design-Dev Alignment**: Shared vocabulary between teams

---

## 🎨 Color Tokens

### Primary Colors
Used for key brand elements, primary actions, and interactive states.

```javascript
// JavaScript/React
import { colors } from '@qualia/design-system/tokens';

backgroundColor: colors.primary[500]  // Main brand color
backgroundColor: colors.primary[600]  // Hover state
backgroundColor: colors.primary[700]  // Active state
```

```css
/* CSS */
background-color: var(--qds-color-primary-500);
background-color: var(--qds-color-primary-600); /* hover */
background-color: var(--qds-color-primary-700); /* active */
```

#### Usage Guidelines
- **Primary 500**: Main brand color for buttons, links, highlights
- **Primary 50-200**: Light backgrounds, subtle accents
- **Primary 600-900**: Darker variants for hover/active states
- **Limit usage**: Don't overuse primary colors - reserve for important actions

### Interactive Colors
Pre-defined colors for consistent interaction states.

```javascript
// Use these for consistent interactive behavior
colors.interactive.primaryHover     // #0284c7
colors.interactive.primaryActive    // #0369a1
colors.interactive.primaryDisabled  // #94a3b8
```

#### When to Use
- **Hover**: User hovers over interactive element
- **Active**: User is actively clicking/touching element
- **Disabled**: Element is not interactive

### Neutral Colors
For text, borders, backgrounds, and structural elements.

```javascript
// Text hierarchy
color: colors.text.primary    // Main content text
color: colors.text.secondary  // Supporting text
color: colors.text.tertiary   // Subtle text

// Backgrounds
backgroundColor: colors.background.primary    // Page background
backgroundColor: colors.background.secondary  // Card backgrounds

// Borders
borderColor: colors.border.primary   // Subtle borders
borderColor: colors.border.secondary // More prominent borders
```

#### Best Practices
- **Text Contrast**: Always ensure WCAG AA compliance
- **Hierarchy**: Use darker colors for more important content
- **Backgrounds**: Layer backgrounds using neutral scale
- **Borders**: Use subtle borders unless emphasis is needed

### Semantic Colors
For status communication and feedback.

```javascript
// Status indicators
colors.semantic.success[500]  // Success states, confirmations
colors.semantic.warning[500]  // Warnings, cautions
colors.semantic.error[500]    // Errors, destructive actions
colors.semantic.info[500]     // Information, neutral alerts
```

#### Usage Context
- **Success**: Form submissions, completed tasks, positive feedback
- **Warning**: Potential issues, confirmations needed
- **Error**: Form validation, failed actions, critical alerts
- **Info**: Helpful information, tips, neutral notifications

---

## 📏 Spacing Tokens

### 8px Grid System
All spacing follows a consistent 8px base unit for visual rhythm.

```javascript
// JavaScript/React
import { spacing, space } from '@qualia/design-system/tokens';

// Numeric scale
padding: spacing[4]        // 16px
margin: spacing[6]         // 24px
gap: spacing[2]            // 8px

// Semantic scale (recommended)
padding: space.md          // 16px
margin: space.lg           // 24px
gap: space.sm              // 8px
```

```css
/* CSS */
padding: var(--qds-space-4);     /* 16px */
margin: var(--qds-space-6);      /* 24px */
gap: var(--qds-space-2);         /* 8px */

/* Semantic (recommended) */
padding: var(--qds-space-md);    /* 16px */
margin: var(--qds-space-lg);     /* 24px */
gap: var(--qds-space-sm);        /* 8px */
```

### Spacing Scale Reference

| Token | Value | Use Case |
|-------|-------|----------|
| `space.xs` (1) | 4px | Icon gaps, fine adjustments |
| `space.sm` (2) | 8px | Small component padding |
| `space.md` (4) | 16px | Standard component padding |
| `space.lg` (6) | 24px | Section spacing |
| `space.xl` (8) | 32px | Large component gaps |
| `space.2xl` (10) | 40px | Major layout spacing |
| `space.3xl` (12) | 48px | Hero sections, major gaps |

### Common Patterns

#### Component Spacing
```javascript
// Button padding
padding: `${space.sm} ${space.md}`  // 8px 16px (small button)
padding: `${space.md} ${space.lg}`  // 16px 24px (large button)

// Card spacing
padding: space.lg    // 24px internal padding
margin: space.md     // 16px between cards

// Form elements
marginBottom: space.md  // 16px between form fields
gap: space.sm          // 8px between related elements
```

#### Layout Spacing
```javascript
// Page sections
marginBottom: space['2xl']  // 40px between sections
padding: space.lg          // 24px section padding

// Grid layouts
gap: space.md             // 16px grid gap
padding: space.md         // 16px container padding
```

---

## ✏️ Typography Tokens

### Font Families
```javascript
// Primary font (Inter)
fontFamily: typography.fontFamily.sans

// Monospace (code)
fontFamily: typography.fontFamily.mono
```

```css
/* CSS */
font-family: var(--qds-font-family-sans);
font-family: var(--qds-font-family-mono);
```

### Font Sizes & Hierarchy

```javascript
// Headings
fontSize: typography.fontSize['4xl']  // 36px - Page titles
fontSize: typography.fontSize['3xl']  // 30px - Section titles
fontSize: typography.fontSize['2xl']  // 24px - Subsection titles
fontSize: typography.fontSize.xl      // 20px - Component titles

// Body text
fontSize: typography.fontSize.lg      // 18px - Large body text
fontSize: typography.fontSize.base    // 16px - Standard body text
fontSize: typography.fontSize.sm      // 14px - Small text, captions
```

### Typography Combinations

#### Heading Styles
```javascript
// Page title
{
  fontSize: typography.fontSize['4xl'],
  fontWeight: typography.fontWeight.bold,
  lineHeight: typography.lineHeight.tight,
  color: colors.text.primary
}

// Section heading
{
  fontSize: typography.fontSize['2xl'],
  fontWeight: typography.fontWeight.semibold,
  lineHeight: typography.lineHeight.normal,
  color: colors.text.primary
}
```

#### Body Text Styles
```javascript
// Primary body text
{
  fontSize: typography.fontSize.base,
  fontWeight: typography.fontWeight.normal,
  lineHeight: typography.lineHeight.normal,
  color: colors.text.primary
}

// Secondary text
{
  fontSize: typography.fontSize.sm,
  fontWeight: typography.fontWeight.normal,
  lineHeight: typography.lineHeight.normal,
  color: colors.text.secondary
}
```

---

## 🔄 Border Radius Tokens

```javascript
// Component corners
borderRadius: radius.sm    // 2px - Small elements
borderRadius: radius.md    // 4px - Buttons, inputs
borderRadius: radius.lg    // 8px - Cards, modals
borderRadius: radius.xl    // 12px - Large containers
borderRadius: radius.full  // 9999px - Pills, avatars
```

### Usage Guidelines
- **Small (2px)**: Badges, small buttons, fine details
- **Medium (4px)**: Standard buttons, form inputs, small cards
- **Large (8px)**: Cards, containers, modal dialogs
- **XL (12px)**: Hero sections, major containers
- **Full**: Circular avatars, pill buttons, tags

---

## 🎭 Shadow Tokens

```javascript
// Elevation levels
boxShadow: '--qds-shadow-sm'   // Subtle elevation
boxShadow: '--qds-shadow-md'   // Standard card elevation
boxShadow: '--qds-shadow-lg'   // Prominent elevation
boxShadow: '--qds-shadow-xl'   // Maximum elevation
```

### When to Use
- **SM**: Hover states, subtle separation
- **MD**: Cards, buttons, interactive elements
- **LG**: Modals, dropdowns, overlays
- **XL**: Page-level overlays, major UI elements

---

## ⚡ Transition Tokens

```javascript
// Animation timing
transition: 'all var(--qds-transition-fast)'    // 150ms - Quick interactions
transition: 'all var(--qds-transition-normal)'  // 250ms - Standard transitions
transition: 'all var(--qds-transition-slow)'    // 350ms - Larger movements
```

---

## ✅ Best Practices

### DO ✅
- **Always use tokens** instead of hardcoded values
- **Use semantic names** (`space.md`) over numeric values (`spacing[4]`)
- **Follow the scales** - don't create custom values
- **Test accessibility** - ensure proper contrast ratios
- **Be consistent** - use the same token for the same purpose

### DON'T ❌
- **Don't hardcode values** like `color: '#0ea5e9'`
- **Don't skip scale values** - use consecutive spacing values
- **Don't mix systems** - stick to 8px grid
- **Don't ignore semantics** - `colors.primary[500]` over `colors.blue[500]`
- **Don't create one-off tokens** - use existing scale

### Migration from Hardcoded Values

```javascript
// ❌ Before (hardcoded)
backgroundColor: '#0ea5e9'
padding: '16px 24px'
fontSize: '18px'
fontWeight: 600
borderRadius: '8px'

// ✅ After (tokens)
backgroundColor: colors.primary[500]
padding: `${space.md} ${space.lg}`
fontSize: typography.fontSize.lg
fontWeight: typography.fontWeight.semibold
borderRadius: radius.lg
```

---

## 🛠️ Development Workflow

### 1. Design Handoff
- Designers specify token names in designs
- Developers implement using exact token references
- QA verifies token usage matches design

### 2. Code Reviews
- Check for hardcoded values
- Verify proper token usage
- Ensure accessibility compliance

### 3. Token Updates
- Tokens can be updated centrally
- All components automatically reflect changes
- No need to update individual components

---

## 🧪 Testing & Validation

### Automated Checks
```javascript
// Example ESLint rule to prevent hardcoded values
// eslint-plugin-design-tokens
"design-tokens/no-hardcoded-colors": "error",
"design-tokens/no-hardcoded-spacing": "error"
```

### Manual Testing
- **Color Contrast**: Use tools like WebAIM contrast checker
- **Responsive**: Test spacing scales on different screen sizes
- **Accessibility**: Verify with screen readers and keyboard navigation

---

## 📚 Additional Resources

- [Design Token Specification](https://design-tokens.github.io/community-group/)
- [WCAG Color Contrast Guidelines](https://webaim.org/resources/contrastchecker/)
- [8-Point Grid System](https://spec.fm/specifics/8-pt-grid)
- [Typography Guidelines](https://material.io/design/typography/the-type-system.html)

---

*These guidelines ensure consistent, maintainable, and accessible implementations of the Qualia Design System across all products.*