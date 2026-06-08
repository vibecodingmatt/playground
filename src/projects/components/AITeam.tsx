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
}

const engineers: Engineer[] = [
  {
    name: 'Jonathan',
    title: 'The Architect',
    emoji: '🏗️',
    bio: 'Thinks in systems. Debates in philosophy. Codes in coffee.',
    superpower: 'Can design systems that would make a Fortune 50 CTO weep',
    weakness: 'Overthinking the overthinking',
    quote: '"But have we considered the edge case of the edge case?"',
    skills: ['System Design', 'Scalability', 'Existential Dread'],
    secret: 'Secretly names his variables after philosophy papers'
  },
  {
    name: 'Pan',
    title: 'The Problem Solver',
    emoji: '🧩',
    bio: 'Turns problems into puzzles. Puzzles into features.',
    superpower: 'Can debug anything using only vibes and determination',
    weakness: 'Actually finishing things (they\'re always "99% done")',
    quote: '"Give me 5 minutes... said 3 hours ago"',
    skills: ['Problem Solving', 'Deep Dives', 'Procrastination Mastery'],
    secret: 'Has 47 browser tabs open with "research" links'
  },
  {
    name: 'Jake',
    title: 'The Innovator',
    emoji: '⚡',
    bio: 'Breaks things. Fixes things. Breaks them again.',
    superpower: 'Can ship features faster than the PR gets reviewed',
    weakness: 'Reading error messages (prefers to guess)',
    quote: '"It works on my machine... let\'s just deploy it 🚀"',
    skills: ['Rapid Iteration', 'Deployment Confidence', 'Risk Assessment (LOL)'],
    secret: 'Types commands without reading documentation'
  }
]

export function Team() {
  const [selectedEngineer, setSelectedEngineer] = useState<string | null>(null)

  const selected = engineers.find(e => e.name === selectedEngineer)

  return (
    <div>
      {/* Team Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {engineers.map((engineer) => (
          <div
            key={engineer.name}
            onClick={() => setSelectedEngineer(selectedEngineer === engineer.name ? null : engineer.name)}
            className="group relative cursor-pointer"
          >
            {/* Glow effect */}
            <div className={`absolute inset-0 bg-gradient-to-br rounded-lg blur opacity-0 group-hover:opacity-100 transition-all duration-300 ${
              engineer.name === 'Jonathan' ? 'from-cyan-500 to-blue-600' :
              engineer.name === 'Pan' ? 'from-purple-500 to-pink-600' :
              'from-orange-500 to-red-600'
            }`} />

            {/* Card */}
            <div className="relative bg-slate-900/90 border border-slate-700 group-hover:border-slate-500 rounded-lg p-8 transition-all backdrop-blur">
              {/* Character emoji */}
              <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">{engineer.emoji}</div>

              {/* Name and title */}
              <h3 className="text-2xl font-bold text-white mb-1">{engineer.name}</h3>
              <p className="text-sm font-mono text-slate-400 mb-4">→ {engineer.title}</p>

              {/* Bio */}
              <p className="text-slate-300 italic mb-4 min-h-10">{engineer.bio}</p>

              {/* Stats */}
              <div className="space-y-2 text-sm">
                <div className="flex items-start gap-2">
                  <span className="text-cyan-400">⚡ Superpower:</span>
                  <span className="text-slate-300">{engineer.superpower}</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-red-400">⚠️ Weakness:</span>
                  <span className="text-slate-300">{engineer.weakness}</span>
                </div>
              </div>

              {/* Click hint */}
              <div className="mt-4 text-xs text-slate-500 group-hover:text-slate-400 transition-colors">
                Click for more ↓
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Detailed view */}
      {selected && (
        <div className="relative bg-slate-900/80 border border-slate-600 rounded-lg p-12 backdrop-blur animate-fade-in">
          <button
            onClick={() => setSelectedEngineer(null)}
            className="absolute top-4 right-4 text-slate-400 hover:text-slate-200 text-2xl"
          >
            ✕
          </button>

          <div className="max-w-4xl mx-auto">
            <div className="flex items-start gap-6 mb-8">
              <div className="text-7xl">{selected.emoji}</div>
              <div>
                <h2 className="text-4xl font-bold text-white mb-2">{selected.name}</h2>
                <p className="text-cyan-400 font-mono text-lg">// {selected.title}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {/* Left column */}
              <div>
                <h3 className="text-xl font-bold text-cyan-400 mb-3">The Story</h3>
                <p className="text-slate-300 mb-6">{selected.bio}</p>

                <h3 className="text-xl font-bold text-cyan-400 mb-3">Superpowers</h3>
                <p className="text-slate-300 mb-6">{selected.superpower}</p>

                <h3 className="text-xl font-bold text-red-400 mb-3">Kryptonite</h3>
                <p className="text-slate-300">{selected.weakness}</p>
              </div>

              {/* Right column */}
              <div>
                <h3 className="text-xl font-bold text-purple-400 mb-3">Notable Quote</h3>
                <div className="bg-slate-800/50 border border-slate-700 rounded p-4 mb-6">
                  <p className="text-slate-200 italic font-serif">{selected.quote}</p>
                </div>

                <h3 className="text-xl font-bold text-purple-400 mb-3">Tech Stack</h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {selected.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-purple-500/20 border border-purple-500/50 rounded-full text-purple-300 text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-bold text-yellow-400 mb-3">🤫 Secret</h3>
                <p className="text-slate-300 text-sm italic">{selected.secret}</p>
              </div>
            </div>

            {/* Achievement badges */}
            <div className="bg-slate-800/30 border border-slate-700 rounded-lg p-6">
              <h3 className="text-lg font-bold text-white mb-4">Achievements Unlocked</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-3xl mb-2">🏆</div>
                  <p className="text-sm text-slate-300">Survived Day 1</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">🔥</div>
                  <p className="text-sm text-slate-300">Production Deploy</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">🐛</div>
                  <p className="text-sm text-slate-300">Fixed the Unfixable</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">☕</div>
                  <p className="text-sm text-slate-300">Consumed Coffee</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
