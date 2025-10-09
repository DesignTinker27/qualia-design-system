# Qualia Design System

> Modern, accessible, and consistent design system for Qualia applications

## 🎯 Overview

The Qualia Design System provides a comprehensive set of design tokens, components, and guidelines to ensure consistency across all Qualia products while enabling teams to build faster with confidence.

## 📦 Installation

```bash
npm install @qualia/design-system
```

## 🚀 Quick Start

### Using Design Tokens

```javascript
import { colors, spacing, typography } from '@qualia/design-system/tokens';

// Use in your CSS-in-JS or JavaScript
const styles = {
  backgroundColor: colors.primary[500],
  padding: spacing[4],
  fontFamily: typography.fontFamily.sans
};
```

### Using Components

```jsx
import { Button } from '@qualia/design-system';

function App() {
  return (
    <Button variant="primary" size="medium">
      Get Started
    </Button>
  );
}
```

## 📚 Documentation

- **[Design Tokens](./docs/tokens.md)** - Colors, spacing, typography, and more
- **[Components](./docs/components.md)** - React component library
- **[Usage Guidelines](./docs/guidelines.md)** - Best practices and patterns
- **[Migration Guide](./docs/migration.md)** - Moving from Semantic UI

## 🏗️ Project Structure

```
qualia-design-system/
├── tokens/          # Design tokens (colors, spacing, etc.)
├── src/             # React components
├── docs/            # Documentation site
├── stories/         # Storybook stories
└── dist/            # Built assets
```

## 🛠️ Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Run Storybook
npm run storybook

# Build for production
npm run build
```

## 🤝 Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) for development guidelines.

## 📄 License

MIT © Qualia