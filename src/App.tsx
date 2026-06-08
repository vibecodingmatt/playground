import { useState } from 'react'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import ProjectGrid from './components/ProjectGrid'
import { ProjectShowcase } from './types'
import GenAIMission from './projects/GenAIMission'
import ColorGradientPlayground from './projects/ColorGradient'
import AnimationLab from './projects/AnimationLab'
import InteractiveCardDemo from './projects/InteractiveCard'

const projects: ProjectShowcase[] = [
  {
    id: 'genai-mission',
    name: 'Operation: GenAI Ascension',
    description: 'The epic journey of Jonathan, Pan, and Jake bringing Fortune 50 GenAI to life',
    category: 'Featured Project',
    component: <GenAIMission />,
    featured: true,
  },
  {
    id: 'color-gradient',
    name: 'Color Gradient Lab',
    description: 'Create and explore beautiful color gradients with real-time preview',
    category: 'UI',
    component: <ColorGradientPlayground />,
    featured: true,
  },
  {
    id: 'animation-lab',
    name: 'Animation Lab',
    description: 'Experiment with CSS animations and transitions',
    category: 'Animation',
    component: <AnimationLab />,
    featured: true,
  },
  {
    id: 'interactive-card',
    name: 'Interactive Card',
    description: 'Interactive hover effects and card components',
    category: 'Components',
    component: <InteractiveCardDemo />,
    featured: false,
  },
]

export default function App() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null)

  const activeProject = projects.find(p => p.id === selectedProject)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Navigation onNavigate={() => setSelectedProject(null)} />
      
      {selectedProject && activeProject ? (
        <div className="pt-20 pb-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <button
              onClick={() => setSelectedProject(null)}
              className="mb-6 px-4 py-2 text-sm font-medium text-sky-400 hover:text-sky-300 flex items-center gap-2"
            >
              ← Back to Gallery
            </button>
            <div className="bg-white rounded-lg shadow-2xl overflow-hidden">
              {activeProject.component}
            </div>
          </div>
        </div>
      ) : (
        <>
          <Hero onStartExploring={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })} />
          <div id="gallery" className="py-20">
            <ProjectGrid projects={projects} onSelectProject={setSelectedProject} />
          </div>
        </>
      )}
    </div>
  )
}
