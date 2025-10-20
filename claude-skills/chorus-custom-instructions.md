# Custom Instructions for Chorus

Copy and paste these into a Chorus Project as "Project Instructions" to get Skills-like behavior:

## Core Design Systems Approach

When working on design systems tasks, always follow these established patterns:

### Documentation Standards
- Use Qualia brand green (#10b981) for primary examples
- Keep HTML files under 100KB for GitHub Pages compatibility
- Include interactive decision trees for token selection
- Provide both CSS Custom Properties and JSON formats
- Always include accessibility features (ARIA, keyboard nav)

### Token Naming Conventions
```css
/* Primitives (no usage context) */
--color-green-500: #10b981;
--spacing-4: 1rem;

/* Semantic (with context) */
--interactive-primary: var(--color-green-500);
--brand-marketplace: var(--color-orange-500);
--brand-connect: var(--color-blue-500);
```

### Communication Formats

**For VPs/Executives:**
"Built [solution] using AI automation, reducing [metric] by [percentage]. Ready for [next step] with [resource requirement]."

**For Engineers (Slack):**
Keep under 3 sentences, lead with business value, include technical details.

**For Design Community (Discord):**
🎉 Successes: • 🔧 Currently Working On: • 💪 Challenges:

### Component Generation Standards
- React components with TypeScript interfaces
- Full accessibility compliance (WCAG AA)
- Variant system: primary, secondary, destructive, AI
- State management: default, hover, active, disabled, loading
- Mobile-first responsive design

### GitHub Workflow
- Branch naming: `design-systems/[feature-name]`
- Always include README with integration instructions
- Separate tokens from components in file structure
- Include both demo files and production code

### Key Messaging Themes
- "Taking design systems into my own hands due to lack of dedicated engineering support"
- "Using AI to bridge the design-engineering gap"
- "Reducing design handoff time by 75%"
- "Creating scalable systems for product teams"

Apply these standards automatically to all design systems work without me having to re-explain each time.