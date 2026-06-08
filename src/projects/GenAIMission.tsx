import { useState, useEffect } from 'react'
import { Team } from './components/AITeam'
import { MissionTimeline } from './components/MissionTimeline'
import { AIHallucinations } from './components/AIHallucinations'

export default function GenAIMission() {
  const [deploymentPercent, setDeploymentPercent] = useState(0)
  const [easterEggCount, setEasterEggCount] = useState(0)
  
  // Konami code easter egg
  useEffect(() => {
    let keySequence: string[] = []
    const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a']
    
    const handleKeyDown = (e: KeyboardEvent) => {
      keySequence.push(e.key.toLowerCase())
      if (keySequence.length > 10) keySequence.shift()
      
      if (keySequence.join(',') === konamiCode.join(',')) {
        setEasterEggCount(c => c + 1)
        keySequence = []
      }
    }
    
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  // Simulate deployment progress
  useEffect(() => {
    const timer = setInterval(() => {
      setDeploymentPercent(prev => {
        if (prev >= 100) return 100
        return prev + Math.random() * 15
      })
    }, 2000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100 overflow-hidden">
      {/* Animated background grid */}
      <div className="fixed inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-grid-pattern" style={{
          backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(0, 200, 255, 0.1) 25%, rgba(0, 200, 255, 0.1) 26%, transparent 27%, transparent 74%, rgba(0, 200, 255, 0.1) 75%, rgba(0, 200, 255, 0.1) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(0, 200, 255, 0.1) 25%, rgba(0, 200, 255, 0.1) 26%, transparent 27%, transparent 74%, rgba(0, 200, 255, 0.1) 75%, rgba(0, 200, 255, 0.1) 76%, transparent 77%, transparent)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Easter egg counter */}
      {easterEggCount > 0 && (
        <div className="fixed top-4 right-4 px-4 py-2 bg-purple-600/50 border border-purple-400 rounded text-sm z-50 animate-pulse">
          🎮 Easter Eggs Found: {easterEggCount}
        </div>
      )}

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center animate-fade-in">
          <div className="mb-6 inline-block">
            <div className="px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-300 font-mono text-sm">
              <span className="animate-pulse">█</span> MISSION INITIALIZED
            </div>
          </div>

          <h1 className="text-6xl md:text-7xl font-black mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent leading-tight">
            Operation: GenAI Ascension
          </h1>

          <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Three engineers. One Fortune 50 company. Infinite hallucinations. 
            <br />
            <span className="text-cyan-400 font-mono">Watch as Jonathan, Pan, and Jake build the future.</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 hover:-translate-y-1 transition-all text-lg">
              📡 Begin Transmission
            </button>
            <button className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-bold rounded-lg hover:bg-cyan-500/10 transition-all text-lg">
              🔍 View Status
            </button>
          </div>

          {/* Deployment Progress */}
          <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-6 max-w-2xl mx-auto backdrop-blur">
            <div className="flex justify-between mb-2">
              <span className="text-sm font-mono text-cyan-400">DEPLOYMENT PROGRESS</span>
              <span className="text-sm font-mono text-slate-400">{Math.floor(deploymentPercent)}%</span>
            </div>
            <div className="w-full bg-slate-800 rounded-full h-3 overflow-hidden">
              <div 
                className="bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 h-full transition-all duration-300"
                style={{ width: `${Math.min(deploymentPercent, 100)}%` }}
              />
            </div>
            <p className="text-xs text-slate-400 mt-3 font-mono">
              {deploymentPercent < 50 && '🔨 Building the future...'}
              {deploymentPercent >= 50 && deploymentPercent < 80 && '⚡ Training neural networks...'}
              {deploymentPercent >= 80 && deploymentPercent < 95 && '🧠 Praying it doesn\'t hallucinate...'}
              {deploymentPercent >= 95 && '🚀 Almost there... (fingers crossed)'}
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
        <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
          The Dream Team
        </h2>
        <Team />
      </section>

      {/* Mission Timeline */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          The Journey
        </h2>
        <MissionTimeline />
      </section>

      {/* AI Hallucinations Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
          Lessons Learned (Hallucinations Edition)
        </h2>
        <AIHallucinations />
      </section>

      {/* Footer Stats */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-700">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">3</div>
              <p className="text-slate-400">Lead Engineers</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">∞</div>
              <p className="text-slate-400">Hallucinations</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">1</div>
              <p className="text-slate-400">Fortune 50 Company</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent mb-2">📡</div>
              <p className="text-slate-400">Vibes: Immaculate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Hidden easter egg text */}
      <div className="opacity-0 text-xs pointer-events-none select-none">
        psst... try the konami code (↑↑↓↓←→←→BA) for a surprise!
      </div>
    </div>
  )
}
