# Design Tokens Integration Guide

## Overview
This document outlines how to integrate Qualia's design tokens into the existing codebase to establish a unified design system across all products.

## 🎯 What's Included
- **CSS Custom Properties** (`design-tokens.css`) - Ready to use in browsers
- **JSON Tokens** (`design-tokens.json`) - For build tools and token transformation
- **Interactive Documentation** (`index.html`) - Visual reference and decision tree

## 🚀 Quick Start

### Option 1: Direct CSS Import (Recommended)
```css
/* Import at the root of your main CSS file */
@import './path/to/design-tokens.css';

/* Use tokens in your components */
.button-primary {
  background-color: var(--interactive-01);
  color: var(--text-04);
  border-radius: var(--radius-s);
  padding: var(--space-08) var(--space-16);
}
```

### Option 2: Build Tool Integration
If you're using a CSS preprocessor or build tool:

```javascript
// webpack.config.js example
module.exports = {
  plugins: [
    new webpack.DefinePlugin({
      'process.env.DESIGN_TOKENS': JSON.stringify(require('./design-tokens.json'))
    })
  ]
};
```

## 📊 Token Categories

### Colors
- **Semantic tokens** (preferred): `--surface-01`, `--interactive-01`, `--text-error`
- **Brand colors**: `--brand-qualia-01`, `--brand-clear-01`
- **Primitive colors** (use sparingly): `--green-500`, `--black-100`

### Spacing
- **Micro** (0-8px): Component internals
- **Component** (12-24px): Between related elements  
- **Layout** (32-64px): Major sections
- **Page** (80-120px): Full-page breaks

### Typography
- **Headers**: `--header-xxl-size` through `--header-xs-size`
- **Body**: `--body-size`, `--body-dense-size`
- **Labels**: `--label-l-size` through `--label-xs-size`

### Corner Rounding
- **Interactive elements**: `--radius-xs` to `--radius-s`
- **Cards/panels**: `--radius-m` to `--radius-l` 
- **Hero elements**: `--radius-xl`

## 🔄 Migration Strategy

### Phase 1: High-Impact Components (Week 1-2)
1. **Buttons**: Replace hardcoded colors with `--interactive-*` tokens
2. **Form fields**: Use `--surface-*` and `--stroke-*` tokens
3. **Typography**: Implement `--text-*` tokens for consistency

### Phase 2: Layout & Spacing (Week 3-4)  
1. **Card components**: Apply `--space-*` tokens for padding/margins
2. **Grid systems**: Use spacing tokens for gaps and gutters
3. **Navigation**: Implement consistent spacing patterns

### Phase 3: Advanced Integration (Week 5-6)
1. **Theme support**: Leverage CSS custom properties for theme switching
2. **Component variants**: Use semantic tokens for state variations
3. **Responsive design**: Scale spacing tokens across breakpoints

## 🛠️ Implementation Examples

### Button Component
```css
.btn {
  /* Base styles using tokens */
  font-family: var(--font-family-lato);
  font-weight: var(--font-weight-medium);
  font-size: var(--label-m-size);
  line-height: var(--label-m-line-height);
  border-radius: var(--radius-s);
  padding: var(--space-08) var(--space-16);
  border: 1px solid transparent;
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn--primary {
  background-color: var(--interactive-01);
  color: var(--text-04);
  border-color: var(--interactive-01);
}

.btn--primary:hover {
  background-color: var(--interactive-pressed);
  border-color: var(--interactive-pressed);
}

.btn--primary:disabled {
  background-color: var(--interactive-fill-disabled);
  color: var(--interactive-text-disabled);
  cursor: not-allowed;
}

.btn--secondary {
  background-color: transparent;
  color: var(--interactive-02);
  border-color: var(--interactive-02);
}

.btn--destructive {
  background-color: var(--interactive-error);
  color: var(--text-04);
}
```

### Card Component
```css
.card {
  background-color: var(--surface-01);
  border: 1px solid var(--stroke-01);
  border-radius: var(--radius-m);
  padding: var(--space-24);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.card--elevated {
  background-color: var(--surface-02);
  border-color: var(--stroke-02);
}

.card__title {
  font-size: var(--header-s-size);
  font-weight: var(--font-weight-bold);
  color: var(--text-01);
  margin-bottom: var(--space-12);
}

.card__content {
  font-size: var(--body-size);
  line-height: var(--body-line-height);
  color: var(--text-02);
}
```

### Form Field Component
```css
.form-field {
  margin-bottom: var(--space-16);
}

.form-field__label {
  display: block;
  font-size: var(--label-m-size);
  font-weight: var(--font-weight-medium);
  color: var(--text-01);
  margin-bottom: var(--space-04);
}

.form-field__input {
  width: 100%;
  font-size: var(--body-size);
  line-height: var(--body-line-height);
  color: var(--text-01);
  background-color: var(--surface-01);
  border: 1px solid var(--stroke-01);
  border-radius: var(--radius-xs);
  padding: var(--space-08) var(--space-12);
  transition: border-color 0.2s ease;
}

.form-field__input:focus {
  outline: none;
  border-color: var(--interactive-01);
}

.form-field__input--error {
  border-color: var(--stroke-error);
}

.form-field__error {
  font-size: var(--label-s-size);
  color: var(--text-error);
  margin-top: var(--space-04);
}
```

## ⚡ Advanced Usage

### Theme Switching
```css
[data-theme="dark"] {
  --surface-01: var(--black-900);
  --surface-02: var(--black-800);
  --text-01: var(--black-25);
  --text-02: var(--black-100);
}
```

### Responsive Spacing
```css
.section-padding {
  padding: var(--space-32);
}

@media (max-width: 768px) {
  .section-padding {
    padding: var(--space-16);
  }
}
```

## ✅ Best Practices

### Do:
- **Use semantic tokens first** (`--text-01`, `--surface-02`)
- **Start with high-impact components** (buttons, forms)
- **Test thoroughly** across all supported browsers
- **Document component variations** using token combinations

### Don't:
- **Mix hardcoded values with tokens** - choose one approach
- **Use primitive tokens directly** unless absolutely necessary
- **Override token values** - extend the system instead
- **Skip the decision tree** when choosing tokens

## 🐛 Troubleshooting

### Common Issues:
1. **CSS Custom Properties not supported**: Add fallbacks or use a PostCSS plugin
2. **Token values don't match design**: Check if you're using semantic vs primitive tokens
3. **Build tool conflicts**: Ensure token files are properly imported in your build pipeline

### Browser Support:
- Chrome 49+, Firefox 31+, Safari 9.1+, Edge 16+
- For older browsers, consider using a PostCSS plugin to compile variables

## 📞 Support

- **Interactive Documentation**: Open `index.html` for visual examples
- **Decision Tree**: Use the interactive guide when unsure which tokens to choose
- **Questions**: Reach out to the Design Systems team

## 🔄 Next Steps

1. **Clone this repository** to your local development environment
2. **Review the interactive documentation** (`index.html`)
3. **Start with button component migration** as a proof of concept
4. **Create a PR** with your token integration for team review
5. **Iterate and expand** to other components

---

*This integration guide is part of Qualia's unified design system initiative. Last updated: October 2024*