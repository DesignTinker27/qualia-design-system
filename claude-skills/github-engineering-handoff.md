# GitHub Engineering Handoff Skill

## Overview
This skill manages the complete process of preparing design system assets for engineering integration, including PR creation, documentation, and stakeholder communication.

## When to Use
- Creating PRs for tokens, components, or documentation
- Preparing engineering handoff materials
- Setting up GitHub Pages for stakeholder sharing
- Writing JIRA tickets for engineering work

## Established Workflow

### Repository Structure
```
/tokens/
  - colors.css (CSS Custom Properties)
  - spacing.css
  - typography.css
  - tokens.json (Engineering backup format)
/components/
  - Button.jsx (React components)
  - Button.css
  - button-demo.html (Interactive examples)
/documentation/
  - index.html (Usage guidelines)
  - README.md (Integration guides)
```

### PR Creation Standards
- **Branch naming**: `design-systems/[feature-name]`
- **Commit messages**: "Add [component/token] for design system integration"
- **PR templates**: Always include business impact, testing notes, and review checklist
- **File size limits**: Keep HTML under 100KB for GitHub Pages compatibility

### Engineering Communication Format
**For VPs/Leadership:**
"Built [solution] using AI automation, reducing design handoff time by 75%. Ready for engineering integration with minimal dev overhead."

**For JIRA Tickets:**
- **Title**: Clear, actionable task
- **Description**: Technical requirements and acceptance criteria
- **Attachments**: Zip files with organized assets
- **Priority**: Based on business impact and engineering capacity

**For Slack Updates:**
- Keep under 3 sentences
- Lead with business value
- Include relevant links
- Tag appropriate stakeholders

### Stakeholder Sharing Process
1. **GitHub Pages Setup**: Enable for `gh-pages` branch
2. **File Optimization**: Ensure all assets load under 3 seconds
3. **Mobile Testing**: Verify responsive behavior
4. **Access Control**: Public for stakeholder feedback, private for internal work

## Quality Standards

### Code Generation Requirements
- **Accessibility**: Full ARIA support, keyboard navigation
- **Framework Compatibility**: Works with Meteor/Blaze and modern React
- **Performance**: Optimized assets, minimal dependencies
- **Documentation**: Inline comments explaining token usage

### File Organization
- Separate tokens from components
- Include both CSS and JSON formats
- Provide interactive examples
- Maintain consistent naming conventions

### Review Checklist
- [ ] Business impact clearly communicated
- [ ] All files under GitHub Pages size limits
- [ ] Interactive examples work across devices
- [ ] Engineering integration guide included
- [ ] JIRA ticket has acceptance criteria
- [ ] Stakeholder URLs are shareable and stable

## Integration Patterns

### Token Handoff
```css
/* Provide both formats for engineering flexibility */
:root {
  --interactive-primary: #10b981;
  --interactive-secondary: #6b7280;
  --spacing-xs: 0.25rem;
  --spacing-sm: 0.5rem;
}
```

### Component Handoff
- React component with TypeScript interfaces
- CSS module with token references
- Storybook-style demo for testing
- Usage documentation with examples

## Success Metrics
- Engineering adoption rate of provided components
- Time reduction in design-to-development handoff
- Consistency scores across product teams
- Stakeholder feedback quality and speed