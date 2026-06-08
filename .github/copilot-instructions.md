# Copilot Instructions for Playground

## Project Overview

This is a modern vibe-coded playground website built with React, TypeScript, Vite, and Tailwind CSS. It's designed to be a flexible repository for testing new ideas and creating mini-projects.

## Project Stack

- **Frontend**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Development**: HMR enabled, ESLint configured

## Key Directories

- `/src/components` - Reusable UI components
- `/src/projects` - Mini-project playgrounds
- `/src/types` - TypeScript type definitions
- `/src/index.css` - Global Tailwind styles

## Common Tasks

### Adding a New Project

1. Create a new `.tsx` file in `src/projects/`
2. Add the project to the projects array in `App.tsx`
3. The component will automatically appear in the gallery

### Running Development Server

```bash
npm run dev
```

### Building for Production

```bash
npm run build
```

### Type Checking

```bash
npm run type-check
```

## Design Patterns

- Use TypeScript interfaces for prop typing
- Leverage Tailwind CSS utility classes for styling
- Follow the component structure in existing projects
- Use path aliases (@components, @projects, etc.) for imports

## Styling Guidelines

- Dark mode by default (`bg-slate-900`, `text-slate-100`)
- Accent colors: Sky blue (`sky-500`) and related shades
- Use Tailwind animations for smooth transitions
- Mobile-first responsive design approach

---

For more details, see the main [README.md](../README.md)
