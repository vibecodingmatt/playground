# 🚀 Playground Quick Reference

## GitHub & Deployment
- **Repo**: `git@github.com:vibecodingmatt/playground.git`
- **Live Site**: `https://vibecodingmatt.github.io/playground/` ✅ Auto-deploys!

## Push Changes (Standard Workflow)
```bash
git add .
git commit -m "Your message"
git push origin main
# Wait 1-2 min for GitHub Actions → Site updates automatically
```

## Development
```bash
npm run dev         # Start local dev server (http://localhost:5173)
npm run build       # Build for production
npm run type-check  # Check TypeScript
npm run lint        # Lint code
```

## Add New Project
1. Create file: `src/projects/YourProject.tsx`
2. Add to `App.tsx` projects array
3. Auto-appears in gallery!

## Key Files
- `vite.config.ts` - Has `base: '/playground/'` (don't remove!)
- `.github/workflows/deploy.yml` - Handles auto-deployment
- `src/App.tsx` - Main app with project registry
- `src/components/` - Reusable components
- `src/projects/` - Your playgrounds

## Design System
- Colors: Slate dark + Sky blue accents
- Typography: Tailwind defaults
- Layout: Responsive grid system
- Animations: Fade-in, slide-up

## Troubleshooting
- **Build fails**: Check `npm run build` locally first
- **Deploy fails**: Check GitHub Actions tab
- **Site shows 404**: Ensure `base: '/playground/'` in vite.config.ts
- **Styles missing**: Run `npm install` to get Tailwind CSS

---
**For detailed settings, see** [.github/copilot-instructions.md](.github/copilot-instructions.md)
