interface NavigationProps {
  onNavigate?: () => void
}

export default function Navigation({ onNavigate }: NavigationProps) {
  return (
    <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md border-b border-slate-700/50 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <button
            onClick={onNavigate}
            className="flex items-center gap-2 group cursor-pointer"
          >
            <div className="w-8 h-8 bg-gradient-to-br from-sky-400 to-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
              <span className="text-white font-bold text-lg">▶</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">
              Playground
            </span>
          </button>
          
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-slate-300 hover:text-sky-400 font-medium transition-colors"
            >
              Docs
            </a>
            <a
              href="#"
              className="text-slate-300 hover:text-sky-400 font-medium transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
