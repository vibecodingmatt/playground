import { useState, useEffect } from 'react'
import { Team } from './components/AITeam'
import { MissionTimeline } from './components/MissionTimeline'
import { AIHallucinations } from './components/AIHallucinations'
import { MissionBriefing } from './components/MissionBriefing'

export default function GenAIMission() {
  const [deploymentPercent, setDeploymentPercent] = useState(0)
  const [easterEggCount, setEasterEggCount] = useState(0)
  const [showBriefing, setShowBriefing] = useState(false)
  
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
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 text-slate-100 overflow-hidden">
      {/* Animated background grid */}
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0 bg-grid-pattern" style={{
          backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(168, 85, 247, 0.1) 25%, rgba(168, 85, 247, 0.1) 26%, transparent 27%, transparent 74%, rgba(168, 85, 247, 0.1) 75%, rgba(168, 85, 247, 0.1) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(168, 85, 247, 0.1) 25%, rgba(168, 85, 247, 0.1) 26%, transparent 27%, transparent 74%, rgba(168, 85, 247, 0.1) 75%, rgba(168, 85, 247, 0.1) 76%, transparent 77%, transparent)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Easter egg counter */}
      {easterEggCount > 0 && (
        <div className="fixed top-4 right-4 px-4 py-2 bg-pink-600/50 border border-pink-400 rounded text-sm z-50 animate-pulse">
          👼 Easter Eggs Found: {easterEggCount}
        </div>
      )}

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center animate-fade-in">
          <div className="mb-6 inline-block">
            <div className="px-4 py-2 bg-pink-500/10 border border-pink-500/30 rounded-full text-pink-300 font-mono text-sm">
              <span className="animate-pulse">📞</span> CASE FILE: CLASSIFIED
            </div>
          </div>

          <h1 className="text-6xl md:text-7xl font-black mb-6 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent leading-tight">
            MARTY'S ANGELS
          </h1>

          <p className="text-xl md:text-2xl text-slate-300 mb-2 font-mono tracking-widest">
            → Mission: GenAI Ascension ←
          </p>

          <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed italic">
            One visionary manager. Three elite engineers. One Fortune 50 company. 
            <br />
            <span className="text-pink-400 font-mono">They answer to nobody but Marty.</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button 
              onClick={() => setShowBriefing(!showBriefing)}
              className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-pink-500/50 hover:-translate-y-1 transition-all text-lg"
            >
              📡 Read Mission Briefing
            </button>
            <button className="px-8 py-4 border-2 border-pink-500 text-pink-400 font-bold rounded-lg hover:bg-pink-500/10 transition-all text-lg">
              👼 Meet the Team
            </button>
          </div>

          {/* Mission Briefing Modal */}
          {showBriefing && (
            <div className="mb-12 animate-slide-up">
              <MissionBriefing onClose={() => setShowBriefing(false)} />
            </div>
          )}

          {/* Deployment Progress */}
          <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-6 max-w-2xl mx-auto backdrop-blur">
            <div className="flex justify-between mb-2">
              <span className="text-sm font-mono text-pink-400">MISSION PROGRESS</span>
              <span className="text-sm font-mono text-slate-400">{Math.floor(deploymentPercent)}%</span>
            </div>
            <div className="w-full bg-slate-800 rounded-full h-3 overflow-hidden">
              <div 
                className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 h-full transition-all duration-300"
                style={{ width: `${Math.min(deploymentPercent, 100)}%` }}
              />
            </div>
            <p className="text-xs text-slate-400 mt-3 font-mono">
              {deploymentPercent < 30 && '👼 Marty briefing the Angels...'}
              {deploymentPercent >= 30 && deploymentPercent < 60 && '⚙️ Jonathan architecting systems...'}
              {deploymentPercent >= 60 && deploymentPercent < 80 && '🎨 Pan designing the UI magic...'}
              {deploymentPercent >= 80 && deploymentPercent < 95 && '🔧 Jake assembling the infrastructure...'}
              {deploymentPercent >= 95 && '🚀 Mission control, we are GO! 🎬'}
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
        <h2 className="text-5xl font-bold text-center mb-4 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
          👼 The Angels
        </h2>
        <p className="text-center text-slate-400 mb-16 italic max-w-2xl mx-auto">
          They receive their missions from Marty. They execute with precision. They answer to no one else.
        </p>
        <Team />
      </section>

      {/* Mission Timeline */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          📋 The Mission Log
        </h2>
        <p className="text-center text-slate-400 mb-16 italic max-w-2xl mx-auto">
          A classified timeline of the Angels' greatest mission
        </p>
        <MissionTimeline />
      </section>

      {/* AI Hallucinations Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-4 bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">
          🚨 Field Reports: Unexpected Complications
        </h2>
        <p className="text-center text-slate-400 mb-16 italic max-w-2xl mx-auto">
          Even Angels make mistakes. These are theirs.
        </p>
        <AIHallucinations />
      </section>

      {/* Footer Stats */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-700">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent mb-2">1</div>
              <p className="text-slate-400">Fearless Manager</p>
            </div>
            <div>
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-2">3</div>
              <p className="text-slate-400">Elite Angels</p>
            </div>
            <div>
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-pink-400 bg-clip-text text-transparent mb-2">∞</div>
              <p className="text-slate-400">Problems Solved</p>
            </div>
            <div>
              <div className="text-4xl font-bold bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent mb-2">🎬</div>
              <p className="text-slate-400">Cinematic Vibes</p>
            </div>
          </div>
        </div>
      </section>

      {/* Hidden easter egg text */}
      <div className="opacity-0 text-xs pointer-events-none select-none">
        psst... try the konami code (↑↑↓↓←→←→BA) for a surprise! Marty's Angels: where precision meets destiny.
      </div>
    </div>
  )
}
