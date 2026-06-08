interface HeroProps {
  onStartExploring: () => void
}

export default function Hero({ onStartExploring }: HeroProps) {
  return (
    <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8 flex items-center">
      <div className="max-w-4xl mx-auto text-center animate-fade-in">
        <div className="mb-8">
          <span className="inline-block px-4 py-2 bg-sky-500/10 border border-sky-500/30 rounded-full text-sky-300 font-medium text-sm">
            ✨ Welcome to Playground
          </span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-sky-300 via-blue-300 to-cyan-300 bg-clip-text text-transparent">
          Create. Experiment. Share.
        </h1>
        
        <p className="text-lg md:text-xl text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed">
          A modern playground for testing new ideas, building mini-projects, and exploring creative web concepts. 
          Fast, flexible, and ready for whatever you want to build.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <button
            onClick={onStartExploring}
            className="px-8 py-3 bg-gradient-to-r from-sky-500 to-blue-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-sky-500/50 hover:-translate-y-1 transition-all"
          >
            Explore Projects →
          </button>
          <button className="px-8 py-3 border border-slate-600 text-slate-300 font-semibold rounded-lg hover:bg-slate-800/50 hover:border-slate-500 transition-all">
            View Docs
          </button>
        </div>

        <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto text-center">
          <div>
            <div className="text-3xl font-bold text-sky-400 mb-2">3</div>
            <p className="text-sm text-slate-400">Featured Projects</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-400 mb-2">∞</div>
            <p className="text-sm text-slate-400">Possibilities</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-cyan-400 mb-2">⚡</div>
            <p className="text-sm text-slate-400">Lightning Fast</p>
          </div>
        </div>
      </div>
    </div>
  )
}
