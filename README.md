# Agentic Coding Terminology & Vibe-Coding Presentation

A comprehensive presentation covering AI-powered development workflows, featuring practical setup guides for Figma MCP and GitHub Copilot integration.

## 🎯 What's Inside

- **Interactive Presentations**: Two HTML-based slide decks covering agentic coding concepts
- **Complete Setup Guides**: Step-by-step instructions for Figma MCP and GitHub Copilot
- **Live Demos**: Real examples of design-to-code workflows
- **Component Library**: Chadcn UI components with Tailwind CSS

## 🚀 Quick Start

### Prerequisites
- Node.js (for package management)
- VS Code with GitHub Copilot
- Figma Desktop App (for MCP server)

### Installation

```bash
# Clone or download this repository
cd basic-ai-terminology

# Install dependencies
npm install

# Start local development server
npm run serve
```

Visit `http://localhost:3000` to view the presentations.

## 📁 File Structure

```
├── index.html                  # Main terminology presentation
├── agentic-vibe-coding.html    # Detailed setup & demo presentation
├── test-components.html        # Chadcn UI components test page
├── components/                 # UI component library
│   └── ui/
│       └── button.js          # Example button component
├── lib/
│   └── utils.js               # Utility functions
├── images/                    # Presentation assets
└── styles.css                 # Global styles
```

## 🎨 Features

### 1. Agentic Coding Terminology (`index.html`)
- **11 core concepts** explained with examples
- Clean, Apple-inspired design
- Keyboard navigation (arrow keys, spacebar)
- Mobile-responsive layout

### 2. Complete Setup Guide (`agentic-vibe-coding.html`)
- **GitHub Account & Copilot setup**
- **VS Code installation & configuration**
- **Figma MCP server connection**
- **Real-world demo examples**

### 3. Component System
- **Chadcn UI integration** with Tailwind CSS
- **Utility-first styling** approach
- **Reusable components** for rapid development

## 🛠️ Technologies Used

- **HTML5 & CSS3**: Core presentation structure
- **Tailwind CSS**: Utility-first styling framework
- **Chadcn UI**: Modern component library
- **JavaScript**: Interactive functionality
- **Figma MCP**: Design-to-code integration
- **GitHub Copilot**: AI-powered coding assistance

## 📖 Key Concepts Covered

### AI & Development Terms
- **AI Agent**: Smart assistants for coding tasks
- **Agentic Coding**: AI as active coding partner
- **Prompting**: Effective AI communication
- **Context**: Background information for AI
- **Iteration**: Refinement through feedback
- **Vibe-Coding**: Conversational development approach

### Technical Concepts
- **Chain of Thought**: AI reasoning explanation
- **Few-Shot Learning**: Learning from examples
- **Hallucination**: AI misinformation awareness

## 🔧 Setup Instructions

### GitHub Copilot Setup
1. Create free GitHub account
2. Enable Copilot (free trial/student pack)
3. Install VS Code + Copilot extensions
4. Sign in and start coding

### Figma MCP Setup
1. Download Figma Desktop App
2. Enable "Local MCP Server" in preferences
3. Add server to VS Code via Command Palette
4. Configure mcp.json with local server URL

### Complete Configuration
```json
{
  "servers": {
    "figma-desktop": {
      "type": "http",
      "url": "http://127.0.0.1:3845/mcp"
    }
  }
}
```

## 🎯 Usage Examples

### Design-to-Code Workflow
1. **Select** component in Figma
2. **Open** VS Code chat (`⌥⌘B` / `Ctrl+Alt+B`)
3. **Prompt**: "Generate React code for this button"
4. **Iterate** and refine as needed

### Sample Prompts
- "Create a dashboard based on my Figma design"
- "Extract all design tokens from this file"
- "Generate TypeScript interfaces from these components"

## 🎬 Live Demo

The presentation includes a live demo of the "Token Finder" project - a design system dashboard built through agentic coding workflows, showcasing:

- **873 design tokens** visualized with relationships
- **Rapid prototyping** from concept to working tool
- **Real-world application** of vibe-coding principles

## 🚀 Scripts

```bash
npm run dev      # Watch Tailwind CSS changes
npm run build    # Build production CSS
npm run serve    # Start local development server
```

## 🤝 Contributing

This project demonstrates agentic coding workflows. Feel free to:
- Fork and experiment with the concepts
- Add new presentation slides
- Extend the component library
- Share your own vibe-coding examples

## 📄 License

ISC License - Feel free to use for educational purposes.

## 👤 Author

**Samar Mustafa**
- Design System Lead & AI Advocate
- 8+ years frontend & full-stack development
- Early adopter of agentic coding practices

---

*Built with agentic coding workflows using GitHub Copilot and Figma MCP integration*
