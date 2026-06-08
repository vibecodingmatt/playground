# 🎨 Playground

A modern, vibe-coded website for testing new ideas and creating mini-projects. Built with React, TypeScript, Vite, and Tailwind CSS for lightning-fast development and deployment.

## ✨ Features

- **⚡ Lightning Fast** - Powered by Vite with instant HMR (Hot Module Replacement)
- **🎯 Modern Stack** - React 18 + TypeScript + Tailwind CSS
- **🎨 Beautifully Designed** - Dark mode by default with gradient accents
- **🧩 Modular Architecture** - Easy to add new projects and features
- **📱 Responsive** - Mobile-first responsive design
- **🔧 Developer Friendly** - TypeScript support, ESLint, and Tailwind CSS

## 🚀 Quick Start

### Prerequisites

- Node.js 16+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The development server will open automatically at `http://localhost:5173`

## 📁 Project Structure

```
playground/
├── src/
│   ├── components/        # Reusable UI components
│   │   ├── Navigation.tsx
│   │   ├── Hero.tsx
│   │   └── ProjectGrid.tsx
│   ├── projects/          # Mini-project playgrounds
│   │   ├── ColorGradient.tsx
│   │   ├── AnimationLab.tsx
│   │   └── InteractiveCard.tsx
│   ├── types/             # TypeScript type definitions
│   ├── App.tsx            # Main app component
│   ├── main.tsx           # Entry point
│   └── index.css          # Global styles
├── index.html             # HTML template
├── vite.config.ts         # Vite configuration
├── tsconfig.json          # TypeScript configuration
└── tailwind.config.ts     # Tailwind CSS configuration
```

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build locally
- `npm run type-check` - Run TypeScript type checking

## 🎮 Current Projects

### 1. Color Gradient Lab
Create and explore beautiful color gradients with real-time preview. Includes preset palettes and CSS output.

### 2. Animation Lab
Experiment with CSS animations, speeds, and easing functions. Great for understanding animation timing.

### 3. Interactive Card
Explore interactive hover effects and card component patterns with Tailwind CSS.

## 🚀 Creating New Projects

To add a new project to the playground:

1. **Create a new component** in `src/projects/`:
```tsx
// src/projects/YourProject.tsx
export default function YourProject() {
  return (
    <div className="min-h-screen bg-slate-100 p-8">
      {/* Your project content */}
    </div>
  )
}
```

2. **Add it to the App.tsx** projects array:
```tsx
import YourProject from './projects/YourProject'

const projects: ProjectShowcase[] = [
  // ... existing projects
  {
    id: 'your-project',
    name: 'Your Project',
    description: 'Description of your project',
    category: 'Category',
    component: <YourProject />,
    featured: false,
  },
]
```

## 🎨 Customization

### Colors
Edit `tailwind.config.ts` to customize the color scheme. The default uses a custom `primary` color set.

### Fonts
Update imports and Tailwind config to use your preferred fonts.

### Layout
The main layout is responsive and uses Tailwind's grid system. Modify `tailwind.config.ts` for global changes.

## 🔧 Development

### Type Checking
```bash
npm run type-check
```

### Linting
```bash
npm run lint
```

### Building
```bash
npm run build
```

The build output will be in the `dist/` directory.

## 📦 Dependencies

- **react** - UI library
- **react-dom** - React DOM rendering
- **typescript** - Type safety
- **vite** - Build tool and dev server
- **tailwindcss** - Utility-first CSS framework
- **autoprefixer** - PostCSS plugin for vendor prefixes

## 🚀 Deployment

### Build
```bash
npm run build
```

### Deploy
Deploy the `dist/` folder to your hosting provider:
- Vercel
- Netlify
- GitHub Pages
- AWS S3
- Any static hosting service

## 📝 Path Aliases

Use these path aliases to simplify imports:
- `@/*` - src/
- `@components/*` - src/components/
- `@pages/*` - src/pages/
- `@projects/*` - src/projects/

Example:
```tsx
import Navigation from '@components/Navigation'
import ColorGradient from '@projects/ColorGradient'
```

## 🤝 Contributing

Feel free to fork this project and create your own versions. Add new projects, improve existing ones, or enhance the overall design!

## 📄 License

MIT License - Feel free to use this as a base for your own projects!

## 🎯 Future Ideas

- [ ] Project templates generator
- [ ] Theme switcher
- [ ] Dark/light mode toggle
- [ ] Code snippet export
- [ ] Project sharing/export functionality
- [ ] Built-in code editor for quick tweaks
- [ ] Analytics dashboard
- [ ] API integration examples
- [ ] Database connection demos

## 🙏 Acknowledgments

Built with:
- [React](https://react.dev)
- [Vite](https://vitejs.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [TypeScript](https://www.typescriptlang.org)

---

**Ready to start building?** Run `npm run dev` and open http://localhost:5173 to see your playground in action!
