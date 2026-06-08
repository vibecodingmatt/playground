import { ProjectShowcase } from '../types'

interface ProjectGridProps {
  projects: ProjectShowcase[]
  onSelectProject: (id: string) => void
}

export default function ProjectGrid({ projects, onSelectProject }: ProjectGridProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-sky-300 to-cyan-300 bg-clip-text text-transparent">
          Featured Projects
        </h2>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
          Explore interactive demonstrations and experiment with new ideas
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <button
            key={project.id}
            onClick={() => onSelectProject(project.id)}
            className="group bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700/50 rounded-lg p-6 hover:border-sky-500/50 hover:shadow-lg hover:shadow-sky-500/10 transition-all hover:-translate-y-2"
          >
            <div className="mb-4">
              <span className="inline-block px-3 py-1 bg-sky-500/10 border border-sky-500/30 rounded-full text-sky-300 text-xs font-medium">
                {project.category}
              </span>
              {project.featured && (
                <span className="ml-2 inline-block px-3 py-1 bg-amber-500/10 border border-amber-500/30 rounded-full text-amber-300 text-xs font-medium">
                  ★ Featured
                </span>
              )}
            </div>
            
            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-sky-300 transition-colors text-left">
              {project.name}
            </h3>
            
            <p className="text-slate-400 text-sm mb-4 text-left">
              {project.description}
            </p>
            
            <div className="flex items-center gap-2 text-sky-400 font-medium group-hover:gap-3 transition-all">
              <span>Open Project</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </button>
        ))}
      </div>

      <div className="mt-20 p-8 bg-gradient-to-r from-sky-900/20 to-blue-900/20 border border-sky-500/20 rounded-lg text-center">
        <h3 className="text-2xl font-bold text-white mb-2">Ready to build something new?</h3>
        <p className="text-slate-300 mb-4">Add your own projects to the playground in seconds</p>
        <button className="px-6 py-2 bg-sky-600 hover:bg-sky-700 text-white font-medium rounded-lg transition-colors">
          + Create New Project
        </button>
      </div>
    </div>
  )
}
