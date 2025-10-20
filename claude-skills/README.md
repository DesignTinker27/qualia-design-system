# Claude Skills Setup Instructions

## Overview
This repository contains 4 custom Claude Skills based on your design systems work. These Skills will automatically apply your established approaches and standards whenever you work with Claude.

## Skills Included

1. **Design System Documentation Skill** - Generates comprehensive design system docs with your format preferences
2. **GitHub Engineering Handoff Skill** - Manages PR creation, documentation, and engineering communication
3. **Stakeholder Communication Skill** - Formats updates for different audiences (VPs, engineers, design community)
4. **Figma-to-Code Automation Skill** - Handles token extraction and component generation workflows

## How to Set Up These Skills in Claude

### Step 1: Access Skills Settings
1. Open Claude and navigate to `Settings` > `Capabilities` > `Skills`
2. Toggle on the Skills preview feature if not already enabled

### Step 2: Create Custom Skills
For each skill file in this repository:

1. Click "Create Skill" in Claude's Skills interface
2. Copy the content from the respective `.md` file
3. Paste into the skill editor
4. Save with the appropriate skill name

### Step 3: Skill Names to Use
- `Design System Documentation`
- `GitHub Engineering Handoff`
- `Stakeholder Communication`
- `Figma-to-Code Automation`

## How These Skills Work

### Automatic Activation
Skills activate automatically when you mention related tasks:
- "Create token documentation" → Loads Design System Documentation skill
- "Prepare a PR for engineering" → Loads GitHub Engineering Handoff skill
- "Write an executive summary" → Loads Stakeholder Communication skill
- "Extract tokens from Figma" → Loads Figma-to-Code Automation skill

### Cross-Skill Coordination
Multiple skills can work together automatically:
- Documentation + Engineering Handoff = Complete stakeholder package
- Figma Automation + Documentation = Interactive token guides
- All skills together = Full design system delivery pipeline

## What You'll Notice

### Before Skills
- Constantly re-explaining your preferences
- Inconsistent output formats
- Starting from scratch each conversation
- Manual coordination of different work types

### With Skills
- Automatic application of your standards
- Consistent professional output
- Building on established expertise
- Seamless workflow coordination

## Usage Examples

### Creating Token Documentation
Just say: "Create usage guidelines for our spacing tokens"
→ Claude loads Design System Documentation skill and generates guidelines with your established format, decision trees, and interactive examples.

### Preparing Engineering Handoff
Just say: "Set up a PR for the button components"
→ Claude loads GitHub Engineering Handoff skill and creates properly formatted PRs, documentation, and communication materials.

### Executive Updates
Just say: "Write a summary for my VP about this week's progress"
→ Claude loads Stakeholder Communication skill and formats using your business-focused language and concise structure.

## Maintenance

These Skills are living documents. Update them as your processes evolve:
1. Edit the skill files in this repository
2. Copy updated content to Claude Skills interface
3. Skills immediately apply new standards across all conversations

## Success Indicators

You'll know the Skills are working when:
- Claude mentions "Reading [Skill Name]" in its thinking process
- Output matches your established standards without explanation
- Multiple work types coordinate seamlessly
- Quality remains consistent across all conversations