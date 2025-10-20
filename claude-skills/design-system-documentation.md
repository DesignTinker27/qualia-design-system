# Design System Documentation Skill

## Overview
This skill generates comprehensive design system documentation that matches Qualia's standards and your established format preferences.

## When to Use
- Creating token usage guidelines
- Building component documentation
- Generating interactive demos
- Preparing stakeholder-ready documentation

## Standards & Preferences

### Documentation Structure
1. **Executive Summary** - Business impact in 2-3 concise bullets
2. **Visual Examples** - Always include interactive demos when possible
3. **Decision Trees** - Help designers choose the right tokens/components
4. **Real-World Context** - Reference actual Qualia products (Marketplace, Connect, etc.)
5. **Engineering Handoff** - Include CSS Custom Properties and JSON formats

### Token Documentation Format
```css
/* Primitive Tokens - No usage descriptions for flexibility */
--color-green-500: #10b981;
--color-orange-500: #f97316;
--color-blue-500: #3b82f6;

/* Semantic Tokens - With usage context */
--interactive-primary: var(--color-green-500);
--brand-marketplace: var(--color-orange-500);
--brand-connect: var(--color-blue-500);
```

### Component Documentation Requirements
- **Accessibility**: ARIA labels, keyboard navigation, focus management
- **Variants**: Primary, Secondary, Destructive, AI-specific
- **States**: Default, hover, active, disabled, loading
- **Usage Guidelines**: When to use each variant
- **Code Examples**: React, HTML, CSS formats

### Visual Standards
- Use Qualia brand green (#10b981) for primary examples
- Display spacing as rectangles, not squares
- Show color tokens as clean swatches
- Include interactive controls for live demos
- Mobile-responsive layouts

### File Organization
- Keep HTML files under 100KB for GitHub Pages
- Separate concerns: tokens file, components file, demo file
- Use semantic naming: `index.html`, `tokens.html`, `components.html`

## Quality Checklist
- [ ] Executive summary highlights business value
- [ ] Interactive examples work on mobile
- [ ] All tokens reference established naming conventions
- [ ] Accessibility features documented and implemented
- [ ] Engineering handoff materials included
- [ ] File sizes optimized for GitHub Pages hosting
- [ ] Visual examples use actual Qualia brand colors