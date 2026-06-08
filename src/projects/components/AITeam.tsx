import { useState } from 'react'

interface Engineer {
  name: string
  title: string
  emoji: string
  bio: string
  superpower: string
  weakness: string
  quote: string
  skills: string[]
  secret: string
  role: string
}

interface Manager {
  name: string
  title: string
  emoji: string
  bio: string
  philosophy: string
  greatestStrength: string
  quote: string
  achievements: string[]
}

const manager: Manager = {
  name: 'Marty',
  title: 'Mission Control',
  emoji: '📞',
  bio: 'The visionary who sees Angels in engineers and miracles in deadlines.',
  philosophy: 'Great managers don\'t tell you what to do. They tell you where to go, and trust you\'ll find the way.',
  greatestStrength: 'Assembling the perfect team and knowing when to get out of their way',
  quote: '"You\'re Angels. Act like it. (Also, ship this in 12 weeks.)"',
  achievements: [
    'Assembled the perfect trio',
    'Survived 47 architecture debates',
    'Talked a C-suite through "AI hallucinations"',
    'Made GenAI seem possible'
  ]
}

const engineers: Engineer[] = [
  {
    name: 'Jonathan',
    title: 'The Brain',
    emoji: '🧠',
    bio: 'Thinks in systems. Debates in theorems. Codes in patterns.',
    role: 'Architecture & System Design',
    superpower: 'Can design infinitely scalable systems while philosophizing about the nature of computation',
    weakness: 'Sometimes designs for the future so far away it becomes the past',
    quote: '"Have we considered what happens if the entire internet goes down? Also, should we cache that?"',
    skills: ['System Architecture', 'Scalability', 'Edge Case Theory', 'Coffee Consumption'],
    secret: 'Maintains a 47-page design doc for things that don\'t exist yet'
  },
  {
    name: 'Pan',
    title: 'The Designer',
    emoji: '🎨',
    bio: 'Turns chaos into beauty. Makes users forget they\'re talking to AI.',
    role: 'UI/UX & User Experience',
    superpower: 'Can make any interface feel like it\'s the future arriving early',
    weakness: 'Redesigns things that were already perfect (just differently perfect)',
    quote: '"This blue is nice, but what if it was... blue-er? Also, is the curve curved enough?"',
    skills: ['UI Design', 'User Psychology', 'Pixel Perfection', 'Aesthetic Confidence'],
    secret: 'Has strong opinions about kerning and is not afraid to voice them'
  },
  {
    name: 'Jake',
    title: 'The Glue',
    emoji: '🔧',
    bio: 'Builds the infrastructure that makes the magic real. Pioneer of production.',
    role: 'Infrastructure & DevOps',
    superpower: 'Can integrate anything with anything and make it look easy',
    weakness: 'Calls every deployment "the final one" (it\'s never the final one)',
    quote: '"It\'s deployed. In production. Right now. Pray it works."',
    skills: ['DevOps', 'Infrastructure Design', 'Deployment Sorcery', 'Fire Extinguishing'],
    secret: 'Has a lucky deploy script he\'s terrified to modify'
  }
]

export function Team() {
  const [selectedPerson, setSelectedPerson] = useState<string | null>(null)
  const [showManager, setShowManager] = useState(false)

  const selectedEngineer = engineers.find(e => e.name === selectedPerson)

  return (
    <div>
      {/* Manager Card (Marty's Angels Briefing Room) */}
      <div className="mb-16 p-8 bg-gradient-to-br from-red-900/40 to-red-800/40 border-2 border-red-500/50 rounded-lg">
        <button
          onClick={() => setShowManager(!showManager)}
          className="w-full text-left group"
        >
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-4">
              <div className="text-7xl group-hover:scale-110 transition-transform">📞</div>
              <div>
                <h2 className="text-3xl font-bold text-white group-hover:text-red-300 transition-colors">Marty</h2>
                <p className="text-red-400 font-mono text-lg">→ Mission Control & Fearless Manager</p>
              </div>
            </div>
            <span className={`text-3xl transform transition-transform ${showManager ? 'rotate-180' : ''}`}>
              👼
            </span>
          </div>

          <p className="text-slate-300 italic mb-4">{manager.bio}</p>

          {showManager && (
            <div className="mt-6 space-y-4 animate-slide-up">
              <div>
                <h3 className="text-red-400 font-bold mb-2">Leadership Philosophy</h3>
                <p className="text-slate-200">"{manager.philosophy}"</p>
              </div>

              <div>
                <h3 className="text-red-400 font-bold mb-2">Greatest Strength</h3>
                <p className="text-slate-200">{manager.greatestStrength}</p>
              </div>

              <div className="bg-slate-800/50 border border-slate-700 rounded p-4">
                <p className="text-slate-200 italic font-serif">{manager.quote}</p>
              </div>

              <div>
                <h3 className="text-red-400 font-bold mb-3">Legendary Achievements</h3>
                <ul className="space-y-2">
                  {manager.achievements.map((achievement, i) => (
                    <li key={i} className="text-slate-300 flex items-center gap-2">
                      <span className="text-red-400">★</span> {achievement}
                    </li>
                  ))}
                </ul>
              </div>

              <p className="text-slate-400 italic text-sm pt-4 border-t border-slate-700">
                "These three Angels would follow Marty into a data center fire. (He'd probably ask them to, and they'd do it.)"
              </p>
            </div>
          )}
        </button>
      </div>

      {/* Angels Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {engineers.map((engineer) => (
          <div
            key={engineer.name}
            onClick={() => setSelectedPerson(selectedPerson === engineer.name ? null : engineer.name)}
            className="group relative cursor-pointer"
          >
            {/* Glow effect */}
            <div className={`absolute inset-0 bg-gradient-to-br rounded-lg blur opacity-0 group-hover:opacity-100 transition-all duration-300 ${
              engineer.name === 'Jonathan' ? 'from-red-500 to-red-600' :
              engineer.name === 'Pan' ? 'from-red-600 to-rose-600' :
              'from-red-400 to-red-600'
            }`} />

            {/* Card */}
            <div className="relative bg-slate-900/90 border border-slate-700 group-hover:border-slate-500 rounded-lg p-8 transition-all backdrop-blur">
              {/* Character emoji */}
              <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">{engineer.emoji}</div>

              {/* Name and title */}
              <h3 className="text-2xl font-bold text-white mb-1">{engineer.name}</h3>
              <p className="text-sm font-mono text-red-400 mb-1">→ {engineer.title}</p>
              <p className="text-xs font-mono text-rose-400 mb-4">// {engineer.role}</p>

              {/* Bio */}
              <p className="text-slate-300 italic mb-4 min-h-10">{engineer.bio}</p>

              {/* Stats */}
              <div className="space-y-2 text-sm">
                <div className="flex items-start gap-2">
                  <span className={`${
                    engineer.name === 'Jonathan' ? 'text-red-400' :
                    engineer.name === 'Pan' ? 'text-rose-400' :
                    'text-red-400'
                  }`}>⚡ Superpower:</span>
                  <span className="text-slate-300">{engineer.superpower}</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-red-400">⚠️ Weakness:</span>
                  <span className="text-slate-300">{engineer.weakness}</span>
                </div>
              </div>

              {/* Click hint */}
              <div className="mt-4 text-xs text-slate-500 group-hover:text-slate-400 transition-colors">
                Click to see full profile ↓
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Detailed view */}
      {selectedEngineer && (
        <div className="relative bg-slate-900/80 border border-slate-600 rounded-lg p-12 backdrop-blur animate-fade-in">
          <button
            onClick={() => setSelectedPerson(null)}
            className="absolute top-4 right-4 text-slate-400 hover:text-slate-200 text-2xl"
          >
            ✕
          </button>

          <div className="max-w-4xl mx-auto">
            <div className="flex items-start gap-6 mb-8">
              <div className="text-7xl">{selectedEngineer.emoji}</div>
              <div>
                <h2 className="text-4xl font-bold text-white mb-2">{selectedEngineer.name}</h2>
                <p className="text-red-400 font-mono text-lg">// {selectedEngineer.title}</p>
                <p className="text-rose-400 font-mono text-sm">→ {selectedEngineer.role}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {/* Left column */}
              <div>
                <h3 className="text-xl font-bold text-red-400 mb-3">Mission Profile</h3>
                <p className="text-slate-300 mb-6">{selectedEngineer.bio}</p>

                <h3 className="text-xl font-bold text-cyan-400 mb-3">Superpowers</h3>
                <p className="text-slate-300 mb-6">{selectedEngineer.superpower}</p>

                <h3 className="text-xl font-bold text-red-400 mb-3">Kryptonite</h3>
                <p className="text-slate-300">{selectedEngineer.weakness}</p>
              </div>

              {/* Right column */}
              <div>
                <h3 className="text-xl font-bold text-red-400 mb-3">In Their Own Words</h3>
                <div className="bg-slate-800/50 border border-slate-700 rounded p-4 mb-6">
                  <p className="text-slate-200 italic font-serif">{selectedEngineer.quote}</p>
                </div>

                <h3 className="text-xl font-bold text-rose-400 mb-3">Specializations</h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedEngineer.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-purple-500/20 border border-purple-500/50 rounded-full text-purple-300 text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-bold text-yellow-400 mb-3">🤫 Secret</h3>
                <p className="text-slate-300 text-sm italic">{selectedEngineer.secret}</p>
              </div>
            </div>

            {/* Marty's take on this Angel */}
            <div className="bg-red-900/20 border border-red-700/50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-white mb-3">💬 Marty's Take</h3>
              <p className="text-slate-300 italic">
                "{selectedEngineer.name} is exactly what this mission needed. I send {selectedEngineer.name} on a mission, 
                {selectedEngineer.name === 'Jonathan' ? ' and the architecture becomes poetry. '
                : selectedEngineer.name === 'Pan' ? ' and the impossible becomes beautiful. '
                : ' and the lights stay green. '}
                That's why {selectedEngineer.name} is one of my Angels."
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Team Dynamic */}
      <div className="mt-16 p-8 bg-gradient-to-r from-slate-900/50 to-red-900/50 border border-slate-700 rounded-lg">
        <h3 className="text-2xl font-bold text-white mb-4">✨ The Magic: How Marty's Angels Work Together</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h4 className="font-bold text-red-400 mb-2">Jonathan → Pan</h4>
            <p className="text-slate-300 text-sm">Architecture meets design. Complex becomes elegant.</p>
          </div>
          <div>
            <h4 className="font-bold text-rose-400 mb-2">Pan → Jake</h4>
            <p className="text-slate-300 text-sm">Design meets infrastructure. Beauty becomes reliable.</p>
          </div>
          <div>
            <h4 className="font-bold text-red-400 mb-2">Jake → Jonathan</h4>
            <p className="text-slate-300 text-sm">Infrastructure meets architecture. Ideas become reality.</p>
          </div>
        </div>
        <p className="text-slate-400 italic text-sm mt-6 pt-6 border-t border-slate-700">
          "Together, they're unstoppable. Apart, they'd still be great. But together? That's when miracles happen." — Marty
        </p>
      </div>
    </div>
  )
}
