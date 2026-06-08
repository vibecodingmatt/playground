import { useState } from 'react'

interface Milestone {
  date: string
  title: string
  description: string
  emoji: string
  icon: string
  status: 'completed' | 'current' | 'future'
  details: string
}

const milestones: Milestone[] = [
  {
    date: 'Week 1',
    title: 'The Kickoff',
    description: 'Reality hits. Hard.',
    emoji: '💥',
    icon: '📋',
    status: 'completed',
    details: 'First meeting: 3 engineers, infinite questions, 0 clear answers. Coffee was consumed. A lot.'
  },
  {
    date: 'Week 2-3',
    title: 'The Great Debate',
    description: 'Which LLM? Which Framework? Why are there so many?',
    emoji: '🤔',
    icon: '⚔️',
    status: 'completed',
    details: 'Jonathan votes for one thing. Pan votes for another. Jake says "let\'s just try both." They do.'
  },
  {
    date: 'Week 4',
    title: 'First Hallucination',
    description: 'The AI said the database has 47 customers. It has 0.',
    emoji: '👻',
    icon: '🧠',
    status: 'completed',
    details: 'Nobody panics. Everyone panics internally. "This is fine" they said, starting fires.'
  },
  {
    date: 'Week 5-6',
    title: 'The Integration',
    description: 'It talks to your systems now. Pray it\'s helpful.',
    emoji: '🔌',
    icon: '⚡',
    status: 'completed',
    details: 'Turns out integrating GenAI with 50 legacy systems is... complicated. Who knew? Everyone. Everyone knew.'
  },
  {
    date: 'Week 7',
    title: 'The First Feature',
    description: 'Something actually works. Probably an accident.',
    emoji: '✨',
    icon: '🎉',
    status: 'completed',
    details: 'A feature ships. It doesn\'t immediately break. A miracle occurs. Jazz hands.'
  },
  {
    date: 'Week 8',
    title: 'Beta Testing',
    description: 'Real users. Real chaos. Real feedback.',
    emoji: '👥',
    icon: '🔍',
    status: 'current',
    details: 'Users find bugs the QA team never thought of. Some are features now.'
  },
  {
    date: 'Week 9-10',
    title: 'Refinement Hell',
    description: 'Fixing things that weren\'t broken. Breaking things that were.',
    emoji: '🔧',
    icon: '⚙️',
    status: 'future',
    details: 'The beautiful dance of iteration. Shipping. Regretting. Shipping again.'
  },
  {
    date: 'Week 11',
    title: 'The Launch',
    description: 'It\'s live. Hold your breath.',
    emoji: '🚀',
    icon: '🎯',
    status: 'future',
    details: 'Fortune 50 GenAI initiative goes live. The team watches from behind their desks.'
  },
  {
    date: 'Week 12+',
    title: 'The Legend',
    description: 'They did it. They actually did it.',
    emoji: '👑',
    icon: '🏆',
    status: 'future',
    details: 'Champagne corks pop. Stories are told. Jonathan talks about edge cases. Pan is 99% done with something new.'
  }
]

export function MissionTimeline() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-500 via-purple-500 to-pink-500 md:translate-x-1/2 md:left-1/2" />

      {/* Milestones */}
      <div className="space-y-8">
        {milestones.map((milestone, index) => (
          <div key={index} className={`relative ${index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2'}`}>
            {/* Timeline dot */}
            <div className={`absolute left-0 md:left-1/2 top-8 w-4 h-4 bg-slate-900 border-4 rounded-full md:translate-x-1/2 z-10 transition-all ${
              milestone.status === 'completed' ? 'border-cyan-400 shadow-lg shadow-cyan-400' :
              milestone.status === 'current' ? 'border-purple-400 shadow-lg shadow-purple-400 scale-125' :
              'border-slate-600'
            }`} />

            {/* Card */}
            <div className={`ml-12 md:ml-0 ${index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'}`}>
              <button
                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                className="w-full text-left group"
              >
                <div className={`bg-slate-900/60 border rounded-lg p-6 backdrop-blur transition-all cursor-pointer ${
                  milestone.status === 'completed' ? 'border-cyan-500/30 hover:border-cyan-500/60 hover:bg-slate-900/80' :
                  milestone.status === 'current' ? 'border-purple-500/60 hover:border-purple-500/80 bg-purple-900/20' :
                  'border-slate-700/30 hover:border-slate-600/60'
                }`}>
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">{milestone.emoji}</span>
                      <div>
                        <div className="text-xs font-mono text-slate-400 uppercase">{milestone.date}</div>
                        <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">{milestone.title}</h3>
                      </div>
                    </div>
                    <span className={`text-2xl transform transition-transform ${expandedIndex === index ? 'rotate-180' : ''}`}>
                      {milestone.status === 'completed' ? '✅' : milestone.status === 'current' ? '⚡' : '⏳'}
                    </span>
                  </div>

                  <p className="text-slate-300">{milestone.description}</p>

                  {milestone.status === 'current' && (
                    <div className="mt-3 text-sm text-purple-400 font-mono">
                      → You are here
                    </div>
                  )}
                </div>
              </button>

              {/* Expanded details */}
              {expandedIndex === index && (
                <div className="mt-4 ml-8 md:ml-0 md:mr-8 p-4 bg-slate-800/50 border border-slate-700 rounded-lg animate-slide-up">
                  <p className="text-slate-200 leading-relaxed">{milestone.details}</p>
                  <div className="mt-4 pt-4 border-t border-slate-600 flex gap-2 flex-wrap">
                    <span className="text-xs px-2 py-1 bg-slate-700 text-slate-300 rounded">
                      {milestone.status === 'completed' && '✓ Complete'}
                      {milestone.status === 'current' && '◉ In Progress'}
                      {milestone.status === 'future' && '○ Upcoming'}
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Progress indicator */}
      <div className="mt-16 pt-8 border-t border-slate-700">
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-3xl font-bold text-cyan-400">{milestones.filter(m => m.status === 'completed').length}</div>
            <p className="text-sm text-slate-400">Completed</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-purple-400">{milestones.filter(m => m.status === 'current').length}</div>
            <p className="text-sm text-slate-400">Current</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-slate-500">{milestones.filter(m => m.status === 'future').length}</div>
            <p className="text-sm text-slate-400">Remaining</p>
          </div>
        </div>
      </div>
    </div>
  )
}
