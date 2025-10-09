# Design Tokens Usage Guidelines

> **A comprehensive guide for effectively utilizing Qualia Design System tokens in your applications, ensuring consistency, scalability, and seamless collaboration between design and engineering.**

---

## 🎯 Overview: The Power of Design Tokens

Design tokens are the atomic building blocks of the Qualia Design System. They are named entities that store visual design attributes (like color, spacing, typography) and serve as a single source of truth for design decisions across all Qualia products. By abstracting raw values into semantic, platform-agnostic tokens, we ensure consistency, maintainability, and scalability.

### ✅ Benefits of a Token-Based System
- **Consistency**: Guarantees visual harmony and predictability across all Qualia applications and platforms.
- **Maintainability**: Update a token's value in one central place, and the change automatically propagates everywhere the token is used, significantly reducing manual updates and potential errors.
- **Scalability**: Facilitates easy extension and modification of the design system as products evolve, supporting new themes, features, or platforms.
- **Developer Experience**: Semantic naming conventions make code more readable, understandable, and easier to work with, enhancing developer productivity.
- **Design-Dev Alignment**: Establishes a shared language and single source of truth between design and engineering teams, alleviating handoff issues and fostering seamless collaboration.
- **Theming**: Provides the underlying structure to easily implement global themes like light mode/dark mode, or brand variations, enabling a more personalized and accessible user experience.

---

## 🎨 Color Tokens: Semantic & Structured

Our color system offers a structured approach to help designers and engineers decide which color to use, ensuring better communication to our users. Naming is based on color usage (e.g., `interactive`, `background`) rather than raw color values (e.g., `blue-400`).

### The Architecture: From Palette to Application
Qualia's foundational systems, including our semantic color system, rely on a three-tiered model to enable scalability:

1.  **Palette**: The *foundational* collection of raw color choices (e.g., `primary[500]`, `neutral[100]`). These are the base colors defined in our Figma library and token files.
2.  **Semantic Tokens**: The *framework* to help guide teams to the right decision. These tokens map abstract concepts (e.g., `text.primary`, `background.surface`, `interactive.hover`) to specific palette colors.
3.  **Components**: Encapsulate color *application* to simplify usage, enshrine design decisions, and provide convenience. Components directly consume semantic tokens.

This abstraction at the foundational level allows us to scale our color systems across products and brands. If we need to change a color at the palette layer (e.g., `primary[500]` hex value) or at the semantic token layer (e.g., `interactive.primaryHover` maps to a different palette color), we can do so with system-wide impact, globally, or targeted and intentionally.

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
- **Primary 500**: The core brand color for primary buttons, important links, and focal highlights.
- **Primary 50-200**: Ideal for light backgrounds, subtle accents, and secondary text on primary elements.
- **Primary 600-900**: Darker variants specifically for hover, active, and pressed states, or for text on lighter primary backgrounds.
- **Limit Usage**: Reserve primary colors for truly important actions and brand elements to maintain visual hierarchy and impact. Avoid overuse, which can diminish their effectiveness.

### Interactive Colors
Pre-defined colors for consistent interactive states across all components.

```javascript
// Use these semantic tokens for consistent interactive behavior
colors.interactive.primaryHover     // Hex: #0284c7
colors.interactive.primaryActive    // Hex: #0369a1
colors.interactive.primaryDisabled  // Hex: #94a3b8

colors.interactive.secondaryHover
colors.interactive.secondaryActive
colors.interactive.secondaryDisabled

colors.interactive.destructiveHover
colors.interactive.destructiveActive
colors.interactive.destructiveDisabled
```

#### When to Use
- **Hover**: Applied when a user's pointer is over an interactive element, indicating it's actionable.
- **Active**: Applied when a user is actively clicking, pressing, or touching an interactive element.
- **Disabled**: Applied to elements that are temporarily or permanently non-interactive, providing visual feedback that an action cannot be taken.

### Neutral Colors
Used for general text, borders, backgrounds, and structural UI elements to ensure readability and clear visual separation.

```javascript
// Text hierarchy using semantic text tokens
color: colors.text.primary      // Main content text, high contrast
color: colors.text.secondary    // Supporting text, less prominent
color: colors.text.tertiary     // Subtle text, captions, lowest hierarchy
color: colors.text.inverse      // Text on dark backgrounds

// Backgrounds using semantic background tokens
backgroundColor: colors.background.primary    // Default page background
backgroundColor: colors.background.secondary  // Card backgrounds, distinct sections
backgroundColor: colors.background.tertiary   // Subtle alternate backgrounds

// Borders using semantic border tokens
borderColor: colors.border.primary   // Subtle decorative borders
borderColor: colors.border.secondary // More prominent dividing borders
borderColor: colors.border.focus     // Outline for interactive elements on focus
```

#### Best Practices
- **Text Contrast**: Always ensure text colors achieve WCAG AA contrast ratios against their background colors for readability and accessibility.
- **Hierarchy**: Utilize the neutral color scale to establish clear visual hierarchy, with darker values for more important content and lighter values for supporting elements.
- **Backgrounds**: Layer backgrounds using the neutral scale to create depth and visual separation between different UI regions.
- **Borders**: Employ subtle borders for separation unless explicit emphasis or interaction affordance (e.g., focus state) is required.

### Semantic Status Colors
Dedicated colors for communicating status, feedback, and important states (e.g., success, warning, error, info).

```javascript
// Status indicators using semantic colors
colors.semantic.success[500]  // Success states, positive confirmations, valid inputs
colors.semantic.warning[500]  // Warnings, cautions, pending states, soft errors
colors.semantic.error[500]    // Errors, destructive action confirmations, invalid inputs, critical alerts
colors.semantic.info[500]     // Information, tips, neutral notifications, auxiliary data
```

#### Usage Context
- **Success**: Apply to messages or icons indicating successful operations, completed tasks, or positive confirmations. Ensure it conveys a sense of achievement.
- **Warning**: Use for potential issues, actions requiring caution, or confirmations needed before proceeding. It should prompt user attention without immediate alarm.
- **Error**: Reserve for critical issues, failed actions, invalid input, or destructive action confirmations. It must clearly communicate a problem requiring user intervention.
- **Info**: Utilize for helpful information, tips, neutral alerts, or supplementary data that doesn't convey a specific status of success, warning, or error.

---

## 📏 Spacing Tokens: The 8px Grid System

All spacing within the Qualia Design System adheres to a consistent 8px base unit. This disciplined approach ensures visual rhythm, consistent alignment, and predictable layouts across all components and pages.

```javascript
// JavaScript/React
import { spacing, space } from '@qualia/design-system/tokens';

// Use the numeric scale for fine-grained control or direct mapping
padding: spacing[4]        // Translates to 16px
margin: spacing[6]         // Translates to 24px
gap: spacing[2]            // Translates to 8px

// **Recommended: Use the semantic scale for better readability and maintainability**
padding: space.md          // Translates to 16px
margin: space.lg           // Translates to 24px
gap: space.sm              // Translates to 8px
```

```css
/* CSS */
padding: var(--qds-space-4);     /* 16px */
margin: var(--qds-space-6);      /* 24px */
gap: var(--qds-space-2);         /* 8px */

/* **Recommended: Use semantic CSS custom properties** */
padding: var(--qds-space-md);    /* 16px */
margin: var(--qds-space-lg);     /* 24px */
gap: var(--qds-space-sm);        /* 8px */
```

### Spacing Scale Reference

| Token | Numeric Scale | Value | Use Case |
|-------|---------------|-------|----------|
| `space.xs` | `spacing[1]` | 4px | Micro spacing, icon gaps, very tight elements |
| `space.sm` | `spacing[2]` | 8px | Small component padding, inline element separation |
| `space.md` | `spacing[4]` | 16px | Standard component padding, vertical rhythm between related blocks |
| `space.lg` | `spacing[6]` | 24px | Section spacing, larger component separation, horizontal gutters |
| `space.xl` | `spacing[8]` | 32px | Large component gaps, major layout breaks |
| `space.2xl` | `spacing[10]` | 40px | Significant vertical separation between page sections |
| `space.3xl` | `spacing[12]` | 48px | Hero sections, prominent banners, large vertical content gaps |

### Common Patterns

#### Component Spacing
```javascript
// Button padding - defines internal space
padding: `${space.sm} ${space.md}`  // 8px vertical, 16px horizontal (e.g., for small buttons)
padding: `${space.md} ${space.lg}`  // 16px vertical, 24px horizontal (e.g., for large buttons)

// Card spacing - internal and external
padding: space.lg    // 24px internal padding for content within a card
margin: space.md     // 16px margin between individual cards in a grid/list

// Form elements - vertical rhythm and alignment
marginBottom: space.md  // 16px vertical spacing between individual form fields
gap: space.sm          // 8px horizontal gap between related inline form elements (e.g., a text input and a button)
```

#### Layout Spacing
```javascript
// Page sections - major content blocks
marginBottom: space['2xl']  // 40px vertical spacing between distinct page sections
padding: space.lg          // 24px internal padding for the content within a page section

// Grid layouts - spacing between grid items
gap: space.md             // 16px uniform gap between grid columns and rows
padding: space.md         // 16px padding for the container holding the grid
```

---

## ✏️ Typography Tokens: Expressive & Readable

Our typography system is built on a clear hierarchy, ensuring readability and visual consistency. We use the Inter font family for its versatility and legibility.

### Font Families
```javascript
// Primary font family for UI text (Inter)
fontFamily: typography.fontFamily.sans

// Monospace font family for code snippets and technical text
fontFamily: typography.fontFamily.mono
```

```css
/* CSS */
font-family: var(--qds-font-family-sans); /* Primary UI font */
font-family: var(--qds-font-family-mono); /* Code/technical font */
```

### Font Sizes & Hierarchy
Qualia's font sizes are carefully selected to create a clear visual hierarchy, guiding users through content and emphasizing important information.

```javascript
// Headings - for titles and prominent text
fontSize: typography.fontSize['4xl']  // 36px - Extra large, typically for main page titles
fontSize: typography.fontSize['3xl']  // 30px - Large, for major section titles
fontSize: typography.fontSize['2xl']  // 24px - Medium, for subsection titles or key component headings
fontSize: typography.fontSize.xl      // 20px - Small, for component titles or emphasized text

// Body text - for primary content and supporting information
fontSize: typography.fontSize.lg      // 18px - Larger body text, for emphasis or readability in certain contexts
fontSize: typography.fontSize.base    // 16px - Standard body text, default for most content
fontSize: typography.fontSize.sm      // 14px - Small text, captions, helper text
fontSize: typography.fontSize.xs      // 12px - Extra small text, very subtle labels or legal disclaimers
```

### Typography Combinations (Semantic Text Styles)
Combine font sizes, weights, and line heights to create semantic text styles that are consistently applied.

#### Heading Styles
```javascript
// Page Title (e.g., H1 equivalent)
{
  fontSize: typography.fontSize['4xl'],
  fontWeight: typography.fontWeight.bold,
  lineHeight: typography.lineHeight.tight, // Tighter for large headings
  color: colors.text.primary
}

// Section Heading (e.g., H2 equivalent)
{
  fontSize: typography.fontSize['2xl'],
  fontWeight: typography.fontWeight.semibold,
  lineHeight: typography.lineHeight.normal,
  color: colors.text.primary
}
```

#### Body Text Styles
```javascript
// Primary Body Text
{
  fontSize: typography.fontSize.base,
  fontWeight: typography.fontWeight.normal,
  lineHeight: typography.lineHeight.normal,
  color: colors.text.primary
}

// Secondary Supporting Text
{
  fontSize: typography.fontSize.sm,
  fontWeight: typography.fontWeight.normal,
  lineHeight: typography.lineHeight.normal,
  color: colors.text.secondary
}
```

---

## 🔄 Border Radius Tokens: Shape & Form

Our border radius tokens provide a consistent way to round corners, influencing the perceived softness and friendliness of our UI elements.

```javascript
// Component corners
borderRadius: radius.sm    // 2px - Very subtle rounding for small elements
borderRadius: radius.md    // 4px - Standard rounding for buttons, inputs, badges
borderRadius: radius.lg    // 8px - More pronounced rounding for cards, modals, larger containers
borderRadius: radius.xl    // 12px - Significant rounding for hero sections or distinct blocks
borderRadius: radius['2xl'] // 16px - Even more rounded, for specific aesthetic needs
borderRadius: radius['3xl'] // 24px - Heavily rounded corners for unique elements
borderRadius: radius.full  // 9999px - Perfect circles/pills for avatars, tags, or pill buttons
```

### Usage Guidelines
- **Small (2px)**: Badges, very small interactive elements, fine details where a subtle touch of rounding is desired.
- **Medium (4px)**: Standard buttons, form inputs, small cards, and other common interactive components. This is often the default.
- **Large (8px)**: Cards, larger containers, modal dialogs, and elements where a more noticeable soft edge is appropriate.
- **XL (12px)**: Hero sections, prominent banners, or major UI components that require a distinct, softer aesthetic.
- **2XL (16px)**, **3XL (24px)**: Reserved for specific design treatments where a very rounded, friendly appearance is desired for larger containers or unique elements.
- **Full**: Perfect for creating circular avatars, pill-shaped tags, or fully rounded button elements. Effectively makes a circle or stadium shape.

---

## 🎭 Shadow Tokens: Depth & Hierarchy

Shadow tokens are used to create visual depth and establish hierarchy between UI elements, guiding the user's eye and indicating interactivity or elevation.

```javascript
// Elevation levels using semantic shadow tokens
boxShadow: '--qds-shadow-sm'   // Subtle elevation for minor interactive elements
boxShadow: '--qds-shadow-md'   // Standard elevation for cards, buttons, dropdowns
boxShadow: '--qds-shadow-lg'   // Prominent elevation for modals, important overlays
boxShadow: '--qds-shadow-xl'   // Maximum elevation for critical alerts or full-page overlays
```

### When to Use
- **SM**: Applied for subtle emphasis on hover states, small dropdown menus, or to create minor separation without heavy visual weight.
- **MD**: The default shadow for interactive cards, standard buttons, context menus, and tooltips. It indicates a clear separation from the background.
- **LG**: Reserved for significant overlays like modal dialogs, larger dropdowns, or popovers that need to stand out prominently from the content below.
- **XL**: Used sparingly for critical alerts, full-page overlays, or hero elements that require maximum visual elevation and user attention.

---

## ⚡ Transition Tokens: Smooth Interactions

Transition tokens ensure consistent and performant animations for interactive UI elements, enhancing the user experience with smooth visual feedback.

```javascript
// Animation timing with semantic transition tokens
transition: 'all var(--qds-transition-fast)'    // 150ms ease-in-out - Quick, snappy interactions (e.g., button hover)
transition: 'all var(--qds-transition-normal)'  // 250ms ease-in-out - Standard, balanced transitions (e.g., modal open/close)
transition: 'all var(--qds-transition-slow)'    // 350ms ease-in-out - Slower, more deliberate animations (e.g., complex layout changes)
```

---

## ✅ Best Practices for Token Usage

### DO ✅
- **Always use tokens**: Prioritize using design tokens over hardcoded values (e.g., hex codes, px values) to maintain consistency and enable system-wide updates.
- **Use semantic names**: Opt for semantic tokens (e.g., `space.md`, `text.primary`) over generic numeric values (e.g., `spacing[4]`, `neutral[900]`) for better code readability and design intent clarity.
- **Follow the scales**: Adhere strictly to the defined token scales (e.g., 8px grid for spacing, established color ramps). Avoid creating one-off custom values.
- **Test accessibility**: Regularly verify that token combinations (especially colors) meet WCAG AA contrast ratio guidelines for all users.
- **Be consistent**: Apply the same token for the same purpose across your application. For example, always use `space.md` for standard button padding if that's its defined role.

### DON'T ❌
- **Don't hardcode values**: Avoid direct CSS values like `background-color: '#0ea5e9'` or `margin: '16px'`. Use their token equivalents.
- **Don't skip scale values**: When using numeric spacing (e.g., `spacing[2]`, `spacing[4]`), use values that exist in the predefined scale. Avoid `spacing[3.5]` for example.
- **Don't mix systems**: If using CSS custom properties, stick to them consistently. If using JavaScript token exports, use those. Avoid intermixing raw values with tokens.
- **Don't ignore semantics**: Do not use a `primary` color token for an `error` state, even if the hex value looks similar. Always respect the semantic meaning.
- **Don't create one-off tokens**: If a specific value is needed, try to fit it into an existing scale or discuss with the design system team before creating new, non-standard tokens.

### Migration from Hardcoded Values to Tokens

```javascript
// ❌ Before (hardcoded example in React/JavaScript)
const legacyStyles = {
  backgroundColor: '#0ea5e9',      // Hardcoded hex color
  padding: '16px 24px',            // Hardcoded pixel values
  fontSize: '18px',
  fontWeight: 600,
  borderRadius: '8px',
  boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
};

// ✅ After (using Qualia Design System tokens)
import { colors, space, typography, radius, shadow } from '@qualia/design-system/tokens';

const newStyles = {
  backgroundColor: colors.primary[500],             // Semantic color token
  padding: `${space.md} ${space.lg}`,               // Semantic spacing tokens
  fontSize: typography.fontSize.lg,                 // Semantic typography token
  fontWeight: typography.fontWeight.semibold,
  borderRadius: radius.lg,                          // Semantic border radius token
  boxShadow: shadow.md                              // Semantic shadow token
};
```

---

## 🛠️ Development Workflow: Integrating Tokens

### 1. Design Handoff
- **Designers**: Specify the exact token names (e.g., `colors.primary[500]`, `space.md`) directly in Figma design specifications or annotations.
- **Developers**: Implement UI elements by referencing these precise token names, ensuring a 1:1 match with design intent.
- **QA**: Verify that the implemented UI accurately uses the specified design tokens and visually matches the design.

### 2. Code Reviews
- **Reviewers**: Actively look for hardcoded values (hex codes, pixel values, magic numbers). Flag and request replacement with appropriate design tokens.
- **Verification**: Ensure that the correct semantic tokens are being used for their intended purpose (e.g., `colors.semantic.error` for error messages, not `colors.neutral[700]`).
- **Accessibility**: Conduct quick checks for contrast, focus states, and responsive behavior, ensuring tokens support an accessible experience.

### 3. Token Updates & Evolution
- **Centralized Updates**: When a design token needs to change (e.g., brand color adjustment, new spacing value), it is updated in the central token source file.
- **Automatic Propagation**: All components and styles consuming that token automatically reflect the change without requiring individual component updates.
- **Efficient Theming**: This architecture enables future theming capabilities (e.g., dark mode) by simply adjusting token mappings rather than rewriting styles across the codebase.

---

## 🧪 Testing & Validation

### Automated Checks
Integrate linting rules and build-time checks to enforce token usage.

```javascript
// Example: ESLint rules to prevent hardcoded values (using a hypothetical plugin)
// .eslintrc.cjs
module.exports = {
  // ... other ESLint configs
  plugins: ['design-tokens'], // Ensure your custom plugin is loaded
  rules: {
    'design-tokens/no-hardcoded-colors': 'error',    // Flags direct hex/rgb values
    'design-tokens/no-hardcoded-spacing': 'warn',    // Warns on direct px values for spacing
    'design-tokens/prefer-semantic-tokens': 'error', // Encourages semantic over raw palette tokens
  }
};
```

### Manual Testing
- **Color Contrast**: Utilize tools like WebAIM Contrast Checker to ensure all text and interactive elements meet WCAG AA contrast ratio requirements.
- **Responsive**: Test the application on various screen sizes and devices to confirm that spacing scales, typography, and component layouts adapt correctly using tokens.
- **Accessibility**: Perform comprehensive testing with screen readers (e.g., VoiceOver, NVDA) and strictly keyboard-only navigation to verify a fully accessible user experience.

---

## 📚 Additional Resources

- [Design Token Community Group Specification](https://design-tokens.github.io/community-group/) - The official specification for design tokens.
- [WCAG 2.1 Guidelines](https://www.w3.org/TR/WCAG21/) - Web Content Accessibility Guidelines for inclusive design.
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/) - Tool to verify color contrast ratios.
- [8-Point Grid System Explained](https://spec.fm/specifics/8-pt-grid) - A deep dive into the foundational spacing system.
- [Material Design Typography](https://material.io/design/typography/the-type-system.html) - Principles for effective typographic systems.

---

*These guidelines ensure consistent, maintainable, and accessible implementations of the Qualia Design System across all products, fostering a unified and efficient workflow between design and engineering.*