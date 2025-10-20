# Figma-to-Code Automation Skill

## Overview
This skill manages the complete workflow for extracting design tokens from Figma and converting them into production-ready React components and CSS.

## When to Use
- Extracting tokens from Figma files
- Creating React components from Figma designs
- Setting up MCP workflows
- Converting designs to interactive demos

## Established Technical Stack

### MCP Configuration
- **Server**: `figma-developer-mcp`
- **Port**: `http://127.0.0.1:3845/mcp`
- **Authentication**: Personal access token in environment variables
- **Connection**: Figma Desktop app required for live connection

### Token Extraction Process
1. **Access Figma file** using node-id format (e.g., "123:456")
2. **Extract design variables** (colors, spacing, typography, effects)
3. **Convert to token formats** (CSS Custom Properties, JSON, JavaScript)
4. **Apply naming conventions** (primitive vs semantic tokens)

### Component Generation Standards
```jsx
// React Component Template
import React from 'react';
import './Component.css';

const Component = ({ 
  variant = 'primary', 
  size = 'medium', 
  disabled = false,
  children,
  ...props 
}) => {
  return (
    <element
      className={`component component--${variant} component--${size}`}
      disabled={disabled}
      aria-label={props['aria-label']}
      {...props}
    >
      {children}
    </element>
  );
};

export default Component;
```

### CSS Token Integration
```css
/* Always reference tokens, never hardcode values */
.component {
  background-color: var(--interactive-primary);
  color: var(--text-primary);
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: var(--radius-sm);
  font-family: var(--font-family-primary);
  font-size: var(--font-size-md);
  transition: all 0.2s ease;
}

.component:hover {
  background-color: var(--interactive-primary-hover);
  box-shadow: var(--shadow-sm);
}
```

## Token Naming Conventions

### Primitive Tokens (No Usage Context)
```css
--color-green-500: #10b981;
--color-gray-100: #f7fafc;
--spacing-4: 1rem;
--radius-sm: 0.125rem;
```

### Semantic Tokens (With Usage Context)
```css
--interactive-primary: var(--color-green-500);
--interactive-secondary: var(--color-gray-600);
--brand-marketplace: var(--color-orange-500);
--brand-connect: var(--color-blue-500);
--text-primary: var(--color-gray-900);
--surface-primary: var(--color-white);
```

### Product-Specific Tokens
```css
/* For multi-brand navigation scenarios */
--nav-marketplace: var(--color-orange-500);
--nav-connect: var(--color-blue-500);
--nav-default: var(--interactive-primary);
```

## Quality Standards

### Accessibility Requirements
- **ARIA Labels**: All interactive elements properly labeled
- **Keyboard Navigation**: Full tab order and focus management
- **Color Contrast**: WCAG AA compliance minimum
- **Screen Readers**: Semantic HTML with proper roles

### Component Architecture
- **Props Interface**: TypeScript definitions for all props
- **Variant System**: Consistent naming (primary, secondary, destructive)
- **State Management**: Default, hover, active, disabled, loading
- **Responsive Behavior**: Mobile-first approach

### Interactive Demo Standards
```html
<!-- Demo Template -->
<div class="demo-container">
  <div class="demo-controls">
    <!-- Interactive controls panel -->
  </div>
  <div class="demo-preview">
    <!-- Live component preview -->
  </div>
  <div class="demo-code">
    <!-- Code examples (React, HTML, CSS) -->
  </div>
</div>
```

## File Organization
```
~/qualia-design-system/
├── tokens/
│   ├── colors.js
│   ├── spacing.js
│   ├── typography.js
│   └── index.js
├── components/
│   ├── Button.jsx
│   ├── Button.css
│   └── button-demo.html
└── documentation/
    ├── index.html
    └── usage-guidelines.md
```

## Validation Checklist
- [ ] Tokens extracted match Figma variables exactly
- [ ] Component variants cover all design states
- [ ] Interactive demo works across devices
- [ ] Code examples are copy-pasteable
- [ ] Accessibility features implemented and tested
- [ ] File sizes optimized for GitHub Pages
- [ ] Token references never hardcoded values

## Integration with Engineering
- **Handoff Format**: Zip file with organized assets
- **Documentation**: README with integration instructions
- **Testing**: Interactive examples for validation
- **Formats**: Both CSS Custom Properties and JSON available